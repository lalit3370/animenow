var express=require('express');
var bodyParser=require('body-parser');

var app=express();

var homeRoutes=require('./routes/home');
app.use(bodyParser.urlencoded({extended: false}));

app.use(homeRoutes);

server.listen(3000);