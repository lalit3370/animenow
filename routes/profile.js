var express = require('express');
var router = express.Router();
const path = require('path');
var User = require('../models/User');
var { ensureAuthenticated } = require('../config/checkauth');

router.get('/profile',ensureAuthenticated,(req,res)=>{
    res.render('profile',{user: req.user});
});
module.exports = router;