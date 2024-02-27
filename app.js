const express = require('express');
const app = express();
const port = 3003;
const path = require("path");

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/registro', (req, res) => {
  res.sendFile(path.resolve('./views/register.html'))
});

app.get('/ingreso', (req, res) => {
  res.sendFile(path.resolve('./views/login.html'))
});

app.post('/registro', (req, res) => {
  res.send("Felicidades te registraste con exito")
});

app.get('*', (req, res) => {
  res.status(404).send('404 not found. <br> Error')
});




