const axios = require('axios')
const express = require('express');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 9999;


app.use(cors())

// create a GET route

// app.get('/advice/', (req, res) => {
//   axios.get("http://api.adviceslip.com/advice")
//   .then(response => res.send(response.data.slip.advice))
// });

app.get('/quote/', (req, res) => {
	axios.get("https://quota.glitch.me/random")
  .then(response => {
    res.send(response.data.quoteText + " -- " + response.data.quoteAuthor);
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
