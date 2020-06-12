var express=require('express');
var router=express.Router();
const path = require('path');

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','signup.html'));
});
const { check, validationResult } = require('express-validator');

router.post('/signup',[
    check('username').notEmpty(),
    check('userpass').notEmpty()
  ],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    var username= req.body.username;
    var password= req.body.userpass;
    console.log(password);
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','login.html'));
});
router.get((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page not found'});
});

module.exports=router;