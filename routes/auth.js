var express = require('express');
var router = express.Router();
const path = require('path');
var User = require('../models/User');
var passport = require('passport');
const bcrypt = require('bcryptjs');
var checkauth = require('connect-ensure-login');
var { forwardAuthenticated} = require('../config/checkauth');
router.get('/signup',forwardAuthenticated, (req, res) => {
  res.render('signup');
});
router.get('/login',forwardAuthenticated, (req, res) => {
  res.render('login');
});
//Signup

router.post('/signup',(req, res) => {
  let errors = [];
  const username = req.body.username;
  const password = req.body.password;

  const password2 = req.body.password2;
  if (!username || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password need to be atleast 6 characters' });
  }
  if (errors.length > 0) {
    res.render('signup', { errors });
  } else {
    User.findOne({ username: username })
      .then(user => {
        if (user) {
          errors.push({ msg: 'Username already exists' });
          res.render('signup', {
            errors,
            username,
            password,
            password2
          });
        } else {
          const newUser = new User({
            username,
            password
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(
                  user => {
                    req.flash('success_msg', "You've successfully registered");
                    res.redirect('/login');
                  }
                ).catch(err => console.log(err));
            });
          });
        }
      });
  }
}
);
//Login

router.post('/login',passport.authenticate('local', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));
router.get('/logout',checkauth.ensureLoggedIn(), (req, res) => {
  req.logout();
  res.redirect('/');
});
router.get((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found' });
});
module.exports = router;