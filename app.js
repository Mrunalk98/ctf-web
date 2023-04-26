const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./login.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname,'./login.html'));
});

app.get('/findflag', function (req, res) {
    res.sendFile(path.join(__dirname,'./findflag.html'));
});
/*
app.post('/login', async (req, res) => {
    if (req.body.username == "admin") {
        if (req.body.password == "admin") {            
            res.send('<div><h2>login successful</h2></div>');
            res.redirect("/findflag")
        }
    } 
    else {
        res.send('<div><h2>Invalid email or password</h2></div>');
    }

});
*/

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})