var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require('path');
// const flash = require('connect-flash');
console.log(__dirname);
// var User = require('../models/User');

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({ 
  storage: storage,
  limits: {fileSize: 5242880}, //5MB in binary
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
});
function checkFileType(file, cb){
  var filetypes= /jpeg|jpg|png|svg|gif/;
  var ext= path.extname(file.originalname).toLowerCase();
  var checkext =filetypes.test(ext);
  var mimetype =filetypes.test(file.mimetype);
  if(mimetype && checkext){
    return cb(null, true);
  } else {
    cb("Images only allowed");
  }
}

router.post('/animemes',upload.single('mymeme'), function (req, res) {

    console.log(req.file);
    req.flash('success_msg', "File uploaded");
    res.redirect('/animemes');
});
router.get('/animemes', (req, res) => {
  console.log("123");
  res.render('animemes');
});
router.get((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found' });
});
module.exports = router;