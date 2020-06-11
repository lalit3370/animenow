var express=require('express');
var router=express.Router();
const path = require('path');
router.post('/signup', (req, res) => {
    console.log('ligma');
    res.sendFile(path.join(__dirname,'../','views','signup.html'));
});
router.get((req,res,next)=>{
    console.log('404');
    res.status(404).render('404',{pageTitle: 'Page not found'});
});
module.exports=router;
//   User.create({
//     username: req.body.username,
//     password: req.body.password
//   }).then(user => res.json(user));
// });
// const { check, validationResult } = require('express-validator');

// router.post('/signup', [
//   // username must be an email
//   check('username').isEmail(),
//   // password must be at least 5 chars long
//   check('password').isLength({ min: 5 })
// ], (req, res) => {
//   // Finds the validation errors in this request and wraps them in an object with handy functions
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }

//   User.create({
//     username: req.body.username,
//     password: req.body.userpass
//   }).then(user => res.json(user));