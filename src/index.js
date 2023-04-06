const PORT = 80;
const express = require("express")
const cors = require("cors")
const routing = require("./routing")

require('dotenv').config()

const app = express();
app.use(cors({ exposedHeaders: ['*', 'token'] }));
app.options('*', cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', async (req, res) => {
    console.log(`Routing`) 

    return res.send({ error: false, v: 1,});
});

routing.GET.forEach(({route, handler}) => {
    app.get(route, handler);
});
routing.POST.forEach(({route, handler}) => {
    app.post(route, handler);
});

const server = app.listen(PORT, ()=>{ 
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