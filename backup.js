// printnew(0);
// printtrend(0);
// printtop(0);
// var i=0;
// document.getElementById("but2").addEventListener("click",rightbtn);

// // const rb=document.querySelectorAll(".rightbutton");
// // for(const rightbutton of rb)
// // {
// //     rightbutton.addEventListener("click",rightbtn);
// // }
// // function rightbtn(){
// // i=i+6;
// // printnew(i);
// // }

// function printnew(i){
//     var j=i+6;
//     let todaydate=new Date();
//     let year=todaydate.getFullYear();
//     let month=todaydate.getMonth()+1;
//     season=['winter','winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall'];
//     let requestURL = 'https://api.jikan.moe/v3/season/'+year+'/'+season[month];
//     let request = new XMLHttpRequest();
//     request.open('GET', requestURL);
//     request.responseType = 'json';
//     request.send();
    
//     request.onload = function() {
//         const data = request.response;
//         console.log(data);   
//         var d1 = document.getElementById('newanime');
//         document.getElementById("newanime").innerHTML="";
//         for(i;i<j;i++){
//             console.log(d1);
//             const element=data.anime[i];
//             d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src='+element.image_url+' alt="Error Displaying the image"><div class="imagetext"><p>'+element.title+'</p></div>');
//     }
// }
// }

// function printtrend(){  
//     let requestURL = 'https://api.jikan.moe/v3/top/anime/1/airing';
//     let request = new XMLHttpRequest();
//     request.open('GET', requestURL);
//     request.responseType = 'json';
//     request.send();
    
//     request.onload = function() {
//         const data = request.response;
//         console.log(data);   
//         // var d1 = document.getElementById('topanime');
//         for(let i=0;i<6;i++){
//             var d1 = document.getElementById('trendanime');
//             console.log(d1);
//             const element=data.top[i];
//             d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src='+element.image_url+' alt="Error Displaying the image"><div class="imagetext"><p>'+element.title+'</p></div>');
//     }
// }
// }
// function printtop(){
//     let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
//     let request = new XMLHttpRequest();
//     request.open('GET', requestURL);
//     request.responseType = 'json';
//     request.send();
    
//     request.onload = function() {
//         const data = request.response;
//         console.log(data);   
//         for(let i=0;i<6;i++){
//             var d1 = document.getElementById('topanime');
//             console.log(d1);
//             const element=data.results[i];
//             d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src='+element.image_url+' alt="Error Displaying the image"><div class="imagetext"><p>'+element.title+'</p></div>');
//     }
// }
// }

printnew(0);
printtrend(0);
printtop(0);
var i = 0;
document.getElementById("but2").addEventListener("click", rightbtn);
function rightbtn() {
    i = i + 6;
    printnew(i);
    console.log("RIGHT BUTTON PRESSED");
    console.log(i);
}
document.getElementById("but1").addEventListener("click", leftbtn);
function leftbtn() {
    if (i >=6)
        i = i - 6;
        console.log("LEFT BUTTON PRESSED");
        console.log(i);
    printnew(i);
}

function printnew(i) {
    var j = i + 6;
    let todaydate = new Date();
    let year = todaydate.getFullYear();
    let month = todaydate.getMonth() + 1;
    season = ['winter', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall'];
    let requestURL = 'https://api.jikan.moe/v3/season/' + year + '/' + season[month];
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const data = request.response;
        console.log(data);
        var d1 = document.getElementById('newanime');
        document.getElementById("newanime").innerHTML = "";
        for (i; i < j; i++) {
            // console.log(d1);
            const element = data.anime[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
}
var k = 0;
document.getElementById("but4").addEventListener("click", rightbtn2);
function rightbtn2() {
    k = k + 6;
    printtrend(k);  
    console.log("RIGHT BUTTON PRESSED");
    console.log(k);
}
document.getElementById("but3").addEventListener("click", leftbtn2);
function leftbtn2() {
    if (k >=6)
        k = k - 6;
        console.log("LEFT BUTTON PRESSED");
        console.log(k);
    printtrend(k);
}
function printtrend(i) {
    var j=i+6;
    let requestURL = 'https://api.jikan.moe/v3/top/anime/1/airing';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const data = request.response;
        console.log(data);
        var d1 = document.getElementById('trendanime');
        document.getElementById("trendanime").innerHTML = "";
        for (i; i < j; i++) {
            console.log(d1);
            const element = data.top[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
}
function printtop() {
    let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const data = request.response;
        console.log(data);
        for (let i = 0; i < 6; i++) {
            var d1 = document.getElementById('topanime');
            console.log(d1);
            const element = data.results[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
}