const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 8333;
const bodyParser = require("body-parser");

// This is middleware called for all routes.
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log("*********middleware*********");
    console.log(req.method);
    console.log(req.path);
    console.log("*********middleware*********");
    next();
});

//bodyParser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//STARTSIDAN GET ***************************************************************
app.get('/', function(req, res, next) {
    const data = {
            title: 'Me',
            body: 'Hello world!'
    };

    res.json(data);
});
//STARTSIDAN *******************************************************************

//LOGG GET / POST **************************************************************
//GET
app.get("/logg", (req, res) => {
  console.log("----------------");
  console.log("*logg GET*");
  console.log("----------------");

  res.end("logg GET");

});

//POST
app.post("/logg", (req, res) => {
  console.log("----------------");
  console.log("*logg POST*");
  console.log(req.body);
  console.log("----------------");

  res.end("logg POST");

});
//LOGG GET / POST **************************************************************





app.listen(port, () => console.log(`Example API listening on port ${port}!`));
