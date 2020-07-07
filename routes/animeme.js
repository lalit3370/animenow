var express = require('express');
var router = express.Router();
var multer = require('multer');
const path = require('path');
var { ensureAuthenticated } = require('../config/checkauth');
var Animeme = require('../models/Animeme');
var storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null,req.user.username+"-"+file.originalname);
    
  }
});
var upload = multer({
  storage: storage,
  limits: { fileSize: 5242880 }, //5MB in binary
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
});

function checkFileType(file, cb) {
  var filetypes = /jpeg|jpg|png|svg|gif/;
  var ext = path.extname(file.originalname).toLowerCase();
  var checkext = filetypes.test(ext);
  var mimetype = filetypes.test(file.mimetype);
  if (mimetype && checkext) {
    return cb(null, true);
  } else {
    cb("Images only allowed");
  }
}
router.get('/animemes', (req, res) => {
  Animeme.find({},(err,result)=>{
    res.render('animemes', { user: req.user, memelist: result });
  })
});

router.post('/animemes/upload',ensureAuthenticated, upload.single('mymeme'), function (req, res) {
  console.log(req.file);
  const newAnimeme = new Animeme({
    uploader: req.user.username,
    title: req.body.title,
    // path: "/uploads/"+req.body.title+"--"+req.user.username+path.extname(req.file.originalname)
    path: "/uploads/"+req.user.username+"-"+req.file.originalname
  });
  newAnimeme.save().catch(err => console.log(err));
  // req.flash('success_msg', "File uploaded");
  res.redirect('/animemes');
});
router.get((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not found' });
});
module.exports = router;