

const express = require('express');

const app = express();
const port = process.env.PORT || 9999;
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/quote/', (req, res) => {
  const ans = "hi"
  res.send(ans);
});
