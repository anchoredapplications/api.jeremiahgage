const PORT = 8080;
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const routing = require("./routing")

require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json())

routing.GET.forEach(({route, handler}) => {
    app.get(route, handler);
});
routing.POST.forEach(({route, handler}) => {
    app.post(route, handler);
});

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`))

if (process.env.NODE_ENV === 'production') {
    process.on('SIGINT', () => {
      server.close(() => {
        // close database
        console.log("Anchor: Process closed by SIGINT")
        process.exit(0);
      });
    });
}