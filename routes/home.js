var express = require('express');
var router = express.Router();
const path = require('path');
var User = require('../models/User');

function pathExtractor(req) {
    function escapeRegExp(str) {
     return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    }
    function replaceAll(str, find, replace) {
     return str.replace(new RegExp(escapeRegExp(find), 'g'), replace); 
    }
    return replaceAll(req.get('referer'), req.get('origin'), '');
}

// var { ensureAuthenticated } = require('../config/checkauth');
router.get('/catalogue', (req, res) => {
    res.render('catalogue', { user: req.user });

});
router.get('/mylist',(req,res)=>{
    if (typeof req.user != 'undefined') {
        User.findOne({ username: req.user.username }, (err, result) => {
            if (err) { console.log("error in findone in get /mylist user not found"); }
            else { 
                res.render('mylist', {user: result });
            }
        });
    } else{res.render('mylist', {user: req.user });}
});
router.get('/genre/:genid',(req,res)=>{
    if (typeof req.user != 'undefined') {
        User.findOne({ username: req.user.username }, (err, result) => {
            if (err) { console.log("error in findone in get /genre user not found"); }
            else { 
                res.render('genre', {genid: req.params.genid, user: result });
            }
        });
    } else{res.render('genre', {genid: req.params.genid, user: req.user });}
});
router.get('/search', (req, res) => {
    if (typeof req.user != 'undefined') {
        User.findOne({ username: req.user.username }, (err, result) => {
            if (err) { console.log("error in findone in get /search user not found"); }
            else { 
                res.render('search', {searchkey: req.query.searchkey, user: result });
            }
        });
    } else{res.render('search', {searchkey: req.query.searchkey, user: req.user });}
});
router.get('/', (req, res) => {
    if (typeof req.user != 'undefined') {
        User.findOne({ username: req.user.username }, (err, result) => {
            if (err) { console.log("error in findone in get /home user not found"); }
            else { 
                res.render('home', { user: result });
            }
        });
    } else{res.render('home', { user: req.user });}
});
router.post('/remove', (req, res) => {
    var refererurl=pathExtractor(req);
    User.findOneAndUpdate(
        { username: req.user.username, anime_mal_id:req.body.animeid             },
        {$pull: { anime_mal_id: req.body.animeid}}, (err) => {
            if (err) console.log(err);
            
        });
        res.redirect(refererurl);
});
router.post('/add', (req, res) => {
    var refererurl=pathExtractor(req);
    User.findOneAndUpdate(
        { username: req.user.username },        
        {$push: { anime_mal_id: req.body.animeid}}, (err) => {
            if (err) console.error(err);
        });
        res.redirect(refererurl);
});
router.get((req, res, next) => {
    console.log('404');
    res.status(404).render('404', { pageTitle: 'Page not found', user: req.user });
});
module.exports = router;

