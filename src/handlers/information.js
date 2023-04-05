
require('dotenv').config()

function Information(request, response) {    
    response.json({ date: new Date(), version: process.env.VERSION_NUMBER})
}

module.exports = { Information };