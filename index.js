// index.js or app.js
const express = require('express');
const cors = require('cors');
const routes = require('./route/routes');

const app = express();

/* middleware */
app.use(express.json());
app.use(cors());

const port = 8080;

app.use('/', routes); // Mount the routes

try {
    app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
    });
} catch (error) {
    console.log("Cannot connect to the server");
}
