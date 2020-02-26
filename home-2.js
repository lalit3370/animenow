var i=0,l=0,k=0;
getNew();
getTrend();
getTop();
// printnew(0);
// printtrend(0);
// printtop(0);
//ONCLICK OF RIGHT LEFT IN NEW ANIME AREA
// document.getElementById("but1").addEventListener("click", leftbtn);
// function leftbtn() {
//     if (i >= 6)
//         i = i - 6;
//     console.log("LEFT BUTTON PRESSED");
//     console.log(i);
//     printnew(i);
// } 
// document.getElementById("but2").addEventListener("click", rightbtn);
// function rightbtn() {
//     i = i + 6;
//     console.log("RIGHT BUTTON PRESSED");
//     printnew(i);
// }
// document.getElementById("but3").addEventListener("click", leftbtn2);
// function leftbtn2() {
//     if (k >=6)
//         k = k - 6;
//         console.log("LEFT BUTTON PRESSED");
//         console.log(k);
//     printtrend(k);
// }
// document.getElementById("but4").addEventListener("click", rightbtn2);
// function rightbtn2() {
//     k = k + 6;
//     printtrend(k);  
//     console.log("RIGHT BUTTON PRESSED");
//     console.log(k);
// }
// document.getElementById("but5").addEventListener("click", leftbtn2);
// function leftbtn2() {
//     if (l >=6)
//         l = l - 6;
//         console.log("LEFT BUTTON PRESSED");
//         console.log(l);
//     printtop(l);
// }
// document.getElementById("but6").addEventListener("click", rightbtn2);
// function rightbtn2() {
//     l = l + 6;
//     printtop(l);  
//     console.log("RIGHT BUTTON PRESSED");
//     console.log(l);
// }
var newdata;
const getNew=new Promise((resolve,reject)=>{
    let todaydate = new Date();
    let year = todaydate.getFullYear();
    let month = todaydate.getMonth() + 1;
    season = ['winter', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall'];
    let requestURL = 'https://api.jikan.moe/v3/season/' + year + '/' + season[month];
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.onload=function(){
        
    }

function getTrend(){
    let requestURL = 'https://api.jikan.moe/v3/top/anime/1/airing';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    trenddata=request.response;
    console.log(trenddata);
}
function getTop(){
    let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    topdata=request.response;
    console.log(topdata);
}
function printnew(i) {
    var j=i+6;
    var d1 = document.getElementById('trendanime');
    document.getElementById("trendanime").innerHTML = "";
    for (i; i < j; i++) {
        console.log(d1);
        const element = newdata.top[i]; 
        d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
}
}
function printtrend(k){
    var j = k + 6;
    var d1 = document.getElementById('trendanime');
    document.getElementById("trendanime").innerHTML = "";
    for (k; k < j; k++) {
        console.log(d1);
        const element = trenddata.top[k];
        d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
}
}
function printtop(l){
    var j=l+6
    for (l; l < j; l++) {
        var d1 = document.getElementById('topanime');
        console.log(d1);
        const element = topdata.results[l];
        d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
    }
}