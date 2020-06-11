var path=require('path');
var express=require('express');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var expressValidator=require('express-validator');
var flash=require('connect-flash'); //not sure y used
var session=require('express-session');
var passport =require('passport');
var LocalStrategy=require('passport-local');
var mongo=require('mongodb');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://lalit:lalit123@cluster0-fvaxm.gcp.mongodb.net/animenow', { useNewUrlParser: true ,useUnifiedTopology: true })
var db=mongoose.connection;

var homeRoutes=require('./routes/home');
var authRoutes=require('./routes/auth');

var app=express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret:'secret',
    saveUninitialized: true,
    resave: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(authRoutes);
app.use(homeRoutes);

app.listen(3000);

