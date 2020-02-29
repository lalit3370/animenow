getnew();
getTrend();
gettop();
var i = 0;
var j = 0;
var k = 0;
// ONCLICK OF RIGHT LEFT IN NEW ANIME AREA
document.getElementById("but1").addEventListener("click", function () {
    if (i >= 6) {
        console.log('i in but1 bc ' + i);
        i = i - 6;
        console.log('i in but1 af ' + i);
        var f = i + 6;
        console.log('f in but2 af ' + f);
        console.log("LEFT BUTTON PRESSED");
        var d = document.getElementById('newanime');
        d.innerHTML = "";
        for (var j = i; j < f; j++) {
            const element = newdata.anime[j];
            d.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
});
document.getElementById("but2").addEventListener("click", function () {
    console.log('i in but2 bc ' + i);
    i = i + 6;

    var f = i + 6;

    var d = document.getElementById('newanime');
    d.innerHTML = "";
    for (var j = i; j < f; j++) {
        const element = newdata.anime[j];
        d.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
    }

});

// ONCLICK OF RIGHT LEFT IN TREND ANIME AREA


document.getElementById("but3").addEventListener("click", function () {
    if (j >= 6) {

        j = j - 6;

        var f = j + 6;
        var d = document.getElementById('trendanime');
        d.innerHTML = "";
        for (var i = j; i < f; i++) {
            const element = trenddata.top[i];
            d.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
});
document.getElementById("but4").addEventListener("click", function () {
    j = j + 6;
    var f = j + 6;
    var d = document.getElementById('trendanime');
    d.innerHTML = "";
    for (var i = j; i < f; i++) {
        const element = trenddata.top[i];
        d.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
    }
});

// ONCLICK OF RIGHT LEFT IN TOP ANIME AREA

document.getElementById("but5").addEventListener("click", function () {
    if (k >= 6) {
        console.log('i in but1 bc ' + k);
        k = k - 6;
        console.log('i in but1 af ' + k);
        var f = k + 6;
        console.log('f in but2 af ' + f);
        console.log("LEFT BUTTON PRESSED");
        var d = document.getElementById('topanime');
        d.innerHTML = "";
        for (var i = k; i < f; i++) {
            const element = topdata.results[i];
            d.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
});
document.getElementById("but6").addEventListener("click", function () {
    console.log('i in but2 bc ' + k);
    k = k + 6;
    var f = k + 6;
    var d = document.getElementById('topanime');
    d.innerHTML = "";
    for (var i = k; i < f; i++) {
        const element = topdata.results[i];
        d.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
    }
    console.log(i);
});

var newdata, trenddata, topdata;

function getnew() {
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
        newdata = request.response;
        // console.log(newdata);
        var d1 = document.getElementById('newanime');
        for (var i = 0; i < 6; i++) {
            const element = newdata.anime[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
}

function getTrend() {
    let requestURL = 'https://api.jikan.moe/v3/top/anime/1/airing';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        trenddata = request.response;
        var d1 = document.getElementById('trendanime');
        for (var i = 0; i < 6; i++) {
            const element = trenddata.top[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
}
function gettop() {
    let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        topdata = request.response;
        var d1 = document.getElementById("topanime");
        for (var i = 0; i < 6; i++) {
            const element = topdata.results[i];
            d1.insertAdjacentHTML('beforeend', '<div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div>');
        }
    }
}