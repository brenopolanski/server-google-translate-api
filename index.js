const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const translate = require('google-translate-api');
const app = express();

// WeDeploy platform has been shut down on April 22nd, 2019.
// const port = require('./wedeploy').port;

const port = 3000;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Server Google Translate API!

    The following endpoint is available:

    POST /translate { text, from, to }
  </pre>
  `;

  res.send(help);
});

app.post('/translate', (req, res) => {
  const { text, from, to } = req.body;

  if (text && to) {
    translate(text, { from, to }).then(data => {
      res.send({ 'text': data.text });
    }).catch(error => {
      console.error(error);
      res.status(500).send(error);
    });
  }
  else {
    res.status(403).send({
      error: 'Please provide a "text" and "to" in the request body'
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
