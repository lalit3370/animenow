var pageno=1;
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
    for (var i = 0; i < 100; i++) {
        const element = data.results[i];
        animelist.insertAdjacentHTML('beforeend','<ul><a href='+element.url+' id="anilink">' + element.title + '</a></ul>');

  }
});
    }
})

fetch('https://api.jikan.moe/v3/search/anime?order_by=title&page=1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    topdata = data;
    var animelist = document.getElementById("midrow");
    for (var i = 0; i < 100; i++) {
        const element = topdata.results[i];
        animelist.insertAdjacentHTML('beforeend','<ul><a href='+element.url+' id="anilink">' + element.title + '</a></ul>');
  }
});
