var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
const flash = require("connect-flash");
var db = require("./config/key").MongoURI;
var mongo = require("mongodb");
var mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

require("./config/passport")(passport);

var homeRoutes = require("./routes/home");
var authRoutes = require("./routes/auth");
var animemeRoutes = require("./routes/animeme");
var profileRoutes = require("./routes/profile");

var app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
//allow use of public folder
app.use(express.static(path.join(__dirname, "public")));
//using routes
app.use(authRoutes);
app.use(homeRoutes);
app.use(animemeRoutes);
app.use(profileRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
