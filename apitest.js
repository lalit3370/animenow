let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const data = request.response;
    console.log(data);   
    var d1 = document.getElementById('row');
    for(let i=0;i<5;i++){
        const element=data.results[i];
        d1.insertAdjacentHTML('afterend', '<div class="row"><div class="col s12 m7"><div class="card"><div class="card-image" style="width:225px;"><img src='+element.image_url+'><span class="card-title">'+element.title+'</span></div><div class="card-content"><p>'+element.synopsis+'</p></div><div class="card-action"><a href="#">'+element.url+'</a></div></div></div></div>');
    }
}