var pageno=3;
window.addEventListener('scroll',function(){
    const totalscroll=document.documentElement.scrollHeight-window.innerHeight;
    var scrolled=window.scrollY;
    scrolled=Math.ceil(scrolled);
    console.log('total scroll: '+totalscroll);
    console.log('scrolled '+scrolled);
    if(totalscroll<=scrolled){
        console.log("reached end");
        pageno++;
        fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page='+pageno+'')
  .then((response) => {

    return response.json();
  })
  .then((data) => {
    var animelist = document.getElementById("midrow");
    for (var i = 0; i < 50; i++) {   
      const element = data.results[i];
      document.getElementById("listcol").insertAdjacentHTML('beforeend','<div><a href='+element.url+' id="anilink">' + element.title + '</a></div>');
  }
});
    }
})

fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page=1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("1");
    for (var i = 0; i < 50; i++) {   
        const element = data.results[i];
        document.getElementById("listcol").insertAdjacentHTML('beforeend','<div><a href='+element.url+' id="anilink">' + element.title + '</a></div>');
    }
});
fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page=2')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log("2");
  for (var i = 0; i < 50; i++) {
      const element = data.results[i];
      document.getElementById("listcol").insertAdjacentHTML('beforeend','<div><a href='+element.url+' id="anilink">' + element.title + '</a></div>');
}

});