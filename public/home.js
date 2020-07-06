getnew();
gettrend();
gettop();

function getnew() {
    let todaydate = new Date();
    let year = todaydate.getFullYear();
    let month = todaydate.getMonth() + 1;
    season = ['winter', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall'];
    let requestURL = 'https://api.jikan.moe/v3/season/' + year + '/' + season[month];
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((newdata) => {
            var d1 = document.getElementById('newanime');
            if (typeof animelist != 'undefined') {
                for (var i = 0; i < 50; i++) {
                    var element = newdata.anime[i];
                    if (animelist.some(function getelement(list) {
                        return list == element.mal_id;
                    })) {
                        console.log("found " + element.mal_id);
                        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                    } else {
                        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                    }
                }
            } 
            else {
                for (var i = 0; i < 50; i++) {
                    const element = newdata.anime[i];
                    d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                }
            }

        });
}
function gettrend() {
    let requestURL = 'https://api.jikan.moe/v3/top/anime/1/airing';
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((trenddata) => {

            var d1 = document.getElementById('trendanime');

            if (typeof animelist != 'undefined') {

                for (var i = 0; i < 50; i++) {
                    var element = trenddata.top[i];
                    if (animelist.some(function getelement(list) {return list == element.mal_id;})){
                        console.log("found " + element.mal_id);
                        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                    } 
                    else {
                        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                    }
                }
            }
             else {
                for (var i = 0; i < 50; i++) {
                    const element = trenddata.top[i];
                    d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                }
            }
            }); 
}

function gettop() {
    let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((topdata) => {
            var d1 = document.getElementById("topanime");

            if (typeof animelist != 'undefined') {

                for (var i = 0; i < 50; i++) {
                    var element = topdata.results[i];
                    if (animelist.some(function getelement(list) {
                        return list == element.mal_id;
                    })) {
                        console.log("found " + element.mal_id);
                        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                    } else {
                        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                    }
                }
            } 
            else {
                for (var i = 0; i < 50; i++) {
                    const element = topdata.results[i];
                    d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
                }
            }
        });
}
window.addEventListener('load', () => {
    var swiper = new Swiper('.swiper-container.new', {
        slidesPerView: 6,
        spaceBetween: -50,
        slidesPerGroup: 6,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}, false);
window.addEventListener('load', () => {

    var swiper = new Swiper('.swiper-container.trend', {
        slidesPerView: 6,
        spaceBetween: -50,
        slidesPerGroup: 6,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}, false);
window.addEventListener('load', () => {
    var swiper = new Swiper('.swiper-container.top', {
        slidesPerView: 6,
        spaceBetween: -50,
        slidesPerGroup: 6,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}, false);