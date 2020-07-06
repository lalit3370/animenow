var express = require('express');
var router = express.Router();
const path = require('path');
var User = require('../models/User');
var { ensureAuthenticated } = require('../config/checkauth');
router.get('/list', (req, res) => {
    res.render('list', { user: req.user });

});
router.post('/genre', (req, res) => {
    res.render('genre', { genid: req.body.genrebtn, user: req.user });
});
router.post('/search', (req, res) => {
    res.render('search', { searchkey: req.body.searchkey, user: req.user });
});
router.get('/', (req, res) => {
    if (typeof req.user != 'undefined') {
        User.findOne({ username: req.user.username }, (err, result) => {
            if (err) { console.log("error in findone in get /"); }
            else { 
                res.render('home', { user: result });
            }
        });
    } else{res.render('home', { user: req.user });}
});
router.post('/remove', ensureAuthenticated, (req, res) => {
    User.findOneAndUpdate(
        { username: req.user.username, anime_mal_id:req.body.animeid             },
        {$pull: { anime_mal_id: req.body.animeid}}, (err) => {
            if (err) console.log(err);
            
        });
        res.redirect('/');
});
router.post('/add', ensureAuthenticated, (req, res) => {
    User.findOneAndUpdate(
        { username: req.user.username },        
        {$push: { anime_mal_id: req.body.animeid}}, (err) => {
            if (err) console.log(err);
        });
        res.redirect('/');
});
router.get((req, res, next) => {
    console.log('404');
    res.status(404).render('404', { pageTitle: 'Page not found', user: req.user });
});
module.exports = router;

