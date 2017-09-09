const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const translate = require('google-translate-api');
const port = require('./wedeploy').port;
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Server Google Translate API!

    The following endpoint is available:

    POST /translate { text, translateFrom, translateTo }
  </pre>
  `

  res.send(help);
});

app.post('/translate', (req, res) => {
  const { text, translateFrom, translateTo } = req.body;
  const options = {
    from: translateFrom || 'en', // optional
    to: translateTo
  };

  if (text) {
    translate(text, options).then(data => {
      res.send({ 'text': data.text });
    }).catch(err => {
      console.error(err);

      res.status(500).send({
        error: err
      });
    });
  }
  else {
    res.status(403).send({
      error: 'Please provide a text and translateTo in the request body'
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
