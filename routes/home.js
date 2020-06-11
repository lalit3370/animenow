var path=require('path');
var express=require('express');
var router=express.Router();
var app=express();

router.get('/',(req,res,next)=>{
    res.sendFile()
})

var server=http.createServer(app);
server.listen(3000);