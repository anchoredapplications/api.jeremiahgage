
require('dotenv').config()

function Information(request, response) {    
    res.status(200);
    response.json({ date: new Date(), version: process.env.VERSION_NUMBER})
}

module.exports = { Information };