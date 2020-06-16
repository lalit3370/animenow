var pageno=4;
let data;
window.addEventListener('scroll',function(){
    const totalscroll=document.documentElement.scrollHeight-window.innerHeight;
    var scrolled=window.scrollY;
    scrolled=Math.ceil(scrolled);
    scrolled+=20;
    // console.log('total scroll: '+totalscroll);
    // console.log('scrolled '+scrolled);
    if(totalscroll<=scrolled){
        // console.log("reached end");
        // console.log(pageno);
        pageno++;
        fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page='+pageno+'')
  .then((response) => {

    return response.json();
  })
  .then((data) => {
    var sec;
    var gotoid;
    console.log(data);
    for (var i = 0; i < 50; i++) {   
      const element = data.results[i];
      var firstchar=element.title[0];
      if(firstchar<'A'){
        sec="specialchar";
        gotoid="#";
      } else{
        sec=element.title[0];
        gotoid=element.title[0];
      }
      document.getElementById(sec).style.display="grid";
      document.getElementById("goto"+gotoid).style.display="block";
      document.getElementById(sec).insertAdjacentHTML('beforeend','<div><a href='+element.url+' class="anilink">' + element.title + '</a></div>');
  }
});
    }
});

fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page=1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var sec;
    console.log(data);
    var gotoid;
    for (var i = 0; i < 50; i++) {   
        const element = data.results[i];
        var firstchar=element.title[0];
        if(firstchar<'A'){
          sec="specialchar";
          gotoid="#";
        } else{
          sec=element.title[0];
          gotoid=element.title[0];
        }
        document.getElementById(sec).style.display="grid";
        document.getElementById("goto"+gotoid).style.display="block";
        document.getElementById(sec).insertAdjacentHTML('beforeend','<div><a href='+element.url+' class="anilink">' + element.title + '</a></div>');
    }
});
fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page=2')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  var gotoid;
  for (var i = 0; i < 50; i++) {   
    const element = data.results[i];
    var firstchar=element.title[0];
    
    if(firstchar<'A'){
      sec="specialchar";
      gotoid="#";
    } else{
      sec=element.title[0];
      gotoid=element.title[0];
      // console.log(sec);
    }
    document.getElementById(sec).style.display="grid";
    document.getElementById("goto"+gotoid).style.display="block";
    document.getElementById(sec).insertAdjacentHTML('beforeend','<div><a href='+element.url+' class="anilink">' + element.title + '</a></div>');
}

});
fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page=3')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  var gotoid;
  for (var i = 0; i < 50; i++) {   
    const element = data.results[i];
    var firstchar=element.title[0];
    
    if(firstchar<'A'){
      sec="specialchar";
      gotoid="#";
    } else{
      sec=element.title[0];
      gotoid=element.title[0];
      // console.log(sec);
    }
    document.getElementById(sec).style.display="grid";
    document.getElementById("goto"+gotoid).style.display="block";
    document.getElementById(sec).insertAdjacentHTML('beforeend','<div><a href='+element.url+' class="anilink">' + element.title + '</a></div>');
}

});