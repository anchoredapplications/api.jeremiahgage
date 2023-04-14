const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

async function SendEmail(request, response) {
    const data = request.body.email

    const config = {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        apiVersion: "2010-12-01",
        region: "us-east-2"
    }
    const params = {
        Destination: {
            ToAddresses: [
                process.env.SES_RECIPIENT_ADDRESS
            ]
        }, 
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8", 
                    Data: data.message
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: `jeremiahgage.me: ${data.subject}`
            }
        }, 
        ReplyToAddresses: [
            data.email
        ], 
        Source: process.env.SES_SENDER_ADDRESS
    };

    const client = new SESClient(config);
    const send = new SendEmailCommand(params)
    
    client.send(send).then(
        (data) => {
            if (data.$metadata.httpStatusCode != 200) {
                response.status(503)
                response.json({ message: "Message failed!"});
            } else {
                response.status(201)
                response.json({ message: "Message sent!"});
            }
        }
    );
}

module.exports = { SendEmail };