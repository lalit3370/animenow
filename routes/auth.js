var express = require('express');
var router = express.Router();
const path = require('path');
var User = require('../models/User');
var passport = require('passport');
const bcrypt = require('bcryptjs');

router.get('/signup', (req, res) => {
  res.render('signup');
});
router.get('/login', (req, res) => {
  res.render('login');
});

//Signup

router.post('/signup', (req, res) => {
  // console.log("/signup");
  let errors = [];
  const username = req.body.username;
  const password = req.body.password;
  // console.log(username);
  // console.log(password);
  const password2 = req.body.password2;
  if (!username || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be <br>at least 6 characters' });
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
                    req.flash('success_msg', "You've successfully<br> registered");
                    res.redirect('/login');
                  }
                ).catch(err => console.log(err));
            })
          })
        }
      });
  }
}
);
//Login

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
router.get((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found' });
});
module.exports = router;