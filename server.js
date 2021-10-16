// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Get values from .env file
const dotenv = require('dotenv').config()

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000; // port
const server = app.listen(port, () => {
  console.log(`The server is running on localhost:${port}`);
  console.log(`My key is: ${process.env.KEY}`);
});

// GET route that returns the projectData object
app.get('/getProjectData', (req, res) => {
  res.send(projectData);
});

app.post('/postProjectData', (req, res) => {
  newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content
  }
  console.log('POST data received:\n' + JSON.stringify(newEntry));
  projectData = newEntry;
  res.send(projectData);
});
