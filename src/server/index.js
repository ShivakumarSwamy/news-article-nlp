const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('dist'));


app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

app.post('/evaluateArticle', function(req, res) {
    fetch(`${baseURL}?key=${process.env.API_KEY}&lang=en&url=${req.body.url}`)
    .then(response => response.json())
    .then(data => res.send({ displayText: `Subjectivity: ${data.subjectivity}`}));
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
})
