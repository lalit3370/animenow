var path=require('path');
var express=require('express');
var bodyParser=require('body-parser');

var app=express();
app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','views','home.html'));
})
app.get('/list',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','views','list.html'));
})
// var homeRoutes=require('./routes/home');
// app.use(homeRoutes);
app.post('/genre',(req,res)=>{
    res.render('genre',{genid: req.body.genrebtn});
});
app.post('/search',(req,res)=>{
    res.render('search',{searchkey:req.body.searchkey});
})
app.use((req,res,next)=>{
    console.log('404');
    res.status(404).render('404',{pageTitle: 'Page not found'});
});

app.listen(3000);

