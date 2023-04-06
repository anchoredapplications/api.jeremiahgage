const PORT = 8080;
const express = require("express")
const cors = require("cors")
const routing = require("./routing")
const bodyParser = require("body-parser")

require('dotenv').config()

const app = express();
app.use(cors({ exposedHeaders: ['*', 'token'] }));
app.options('*', cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

routing.GET.forEach(({route, handler}) => {
    app.get(route, handler);
});
routing.POST.forEach(({route, handler}) => {
    app.post(route, handler);
});

app.listen(PORT, ()=>{ 
    console.log(`Listening on port ${PORT}...`) 
    console.log(`ENV: ${process.env.NODE_ENV}`)
})

if (process.env.NODE_ENV === 'production') {
    process.on('SIGINT', () => {
      server.close(() => {
        // close database
        console.log("Anchor: Process closed by SIGINT")
        process.exit(0);
      });
    });
}