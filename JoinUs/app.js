var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'gunavata',
    database: 'join_us',
});

app.get("/", function(req, res, cb) {
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results){
        if (err) throw err;
        var count = results[0].count;
        // res.send("We have " + count + " users in our db!");
        res.render("home", {count: count});
    });
});

app.post("/register", function(req, res, cb) {
    var q = "INSERT INTO users SET ?";
    var person = {
        email : req.body.email   
    };
    connection.query(q, person, function(err, results) {
        if (err) throw err;
        res.redirect("/");
    });
});

app.get("/joke", function(req, res, cb) {
    var joke = "joke so funny";
    res.send(joke);
});

app.get("/random_num", function(req, res, cb) {
    var num = Math.floor(Math.random() * 10) + 1;
    res.send("Lucky number is " + num);
});

app.listen(8080, function() {
    console.log("server running on 8080!");
});