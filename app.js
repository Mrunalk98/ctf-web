const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./html/login.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname,'./html/login.html'));
});

app.get('/findflag', function (req, res) {
        res.sendFile(path.join(__dirname,'./html/findflag.html'));
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})