
require('dotenv').config()

function Information(response, number, errorReason) {    
    response.json({ version: process.env.VERSION_NUMBER})
}

module.exports = { Information };