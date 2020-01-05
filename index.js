/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || "8000";

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    //res.status(200).send("WHATABYTE: Food For Devs");
    console.log("GET request at port 8000 ....");
    console.log(req.hostname);
    console.log(req.headers["accept-language"]);
    console.log(req.headers["cache-control"]);
    res.sendFile(__dirname + '/index.html');
    
  });
/**
  app.post('/submit-form', (req, res) => {
    const score = req.body.score;
    console.log('Score = ' +  score);
    //...

    res.sendFile(__dirname + '/index.html');
  })
 */
  /**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });