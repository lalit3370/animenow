var express=require('express');
var router=express.Router();
const path = require('path');

router.get('/list',(req,res)=>{
    console.log("in list",req.body);
    console.log("in list",req.user);
    res.render('list',{user:req.user});

})
router.post('/genre',(req,res)=>{
    res.render('genre',{genid: req.body.genrebtn,user:req.user});
});
router.post('/search',(req,res)=>{
    res.render('search',{searchkey:req.body.searchkey, user:req.user});
})
router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../','views','home.html'));
    res.render('home',{user:req.user});
})
router.get((req,res,next)=>{
    console.log('404');
    res.status(404).render('404',{pageTitle: 'Page not found',user:req.user});
});
module.exports=router;