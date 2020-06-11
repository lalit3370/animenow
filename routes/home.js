var express=require('express');
var router=express.Router();
const path = require('path');

router.get('/list',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','list.html'));
})
router.post('/genre',(req,res)=>{
    res.render('genre',{genid: req.body.genrebtn});
});
router.post('/search',(req,res)=>{
    res.render('search',{searchkey:req.body.searchkey});
})
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','home.html'));
})
router.get((req,res,next)=>{
    console.log('404');
    res.status(404).render('404',{pageTitle: 'Page not found'});
});
module.exports=router;