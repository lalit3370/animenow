printnew();
printtrend();
printtop();
function printnew(){
    let todaydate=new Date();
    let year=todaydate.getFullYear();
    let month=todaydate.getMonth()+1;
    console.log(month);
    season=['winter','winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall'];
    let requestURL = 'https://api.jikan.moe/v3/season/'+year+'/'+season[month];
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        const data = request.response;
        console.log(data);   
        var d1 = document.getElementById('newanime');
        for(let i=0;i<6;i++){
            console.log(d1);
            const element=data.anime[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src='+element.image_url+' alt="Error Displaying the image"><div class="imagetext"><p>'+element.title+'</p></div>');
    }
}
}

function printtrend(){  
    let requestURL = 'https://api.jikan.moe/v3/top/anime/1/airing';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        const data = request.response;
        console.log(data);   
        // var d1 = document.getElementById('topanime');
        for(let i=0;i<6;i++){
            var d1 = document.getElementById('trendanime');
            console.log(d1);
            const element=data.top[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src='+element.image_url+' alt="Error Displaying the image"><div class="imagetext"><p>'+element.title+'</p></div>');
    }
}
}
function printtop(){
    let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
        const data = request.response;
        console.log(data);   
        for(let i=0;i<6;i++){
            var d1 = document.getElementById('topanime');
            console.log(d1);
            const element=data.results[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src='+element.image_url+' alt="Error Displaying the image"><div class="imagetext"><p>'+element.title+'</p></div>');
    }
}
}