var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
// var LocalStrategy = require('passport-local');
const flash = require('connect-flash');
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://lalit:lalit123@cluster0-fvaxm.gcp.mongodb.net/animenow', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log("MongoDB Connected..."))
    .catch(err=>console.log(err));
var db = mongoose.connection;
require('./config/passport')(passport);

var homeRoutes = require('./routes/home');
var authRoutes = require('./routes/auth');

var app = express(); 
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRoutes);
app.use(homeRoutes);

app.listen(3000);