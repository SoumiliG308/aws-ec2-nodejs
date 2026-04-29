const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from Soumili AWS Lab')
})

app.listen(4000, '0.0.0.0', () => {
  console.log("Started server");
})
