
require('dotenv').config()

function Information(request, response) {    
    response.status(200);
    response.json({ date: new Date(), secrets_populated: process.env.SECRETS_POPULATED})
}

module.exports = { Information };