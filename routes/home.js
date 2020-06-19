var express=require('express');
var router=express.Router();
const path = require('path');

router.get('/list',(req,res)=>{
    res.render('list',{user:req.user});

});
router.post('/genre',(req,res)=>{
    res.render('genre',{genid: req.body.genrebtn,user:req.user});
});
router.post('/search',(req,res)=>{
    res.render('search',{searchkey:req.body.searchkey, user:req.user});
});
router.get('/',(req,res)=>{
    res.render('home',{user:req.user});
});

router.get((req,res,next)=>{
    console.log('404');
    res.status(404).render('404',{pageTitle: 'Page not found',user:req.user});
});
module.exports=router;