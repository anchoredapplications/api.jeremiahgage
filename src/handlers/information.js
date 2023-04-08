
require('dotenv').config()

function Information(request, response) {    
    response.status(200);
    response.json({ author:"Jeremiah Gage", version_number:process.env.VERSION_NUMBER, secrets_populated: process.env.SECRETS_POPULATED, date: new Date()})
}

module.exports = { Information };