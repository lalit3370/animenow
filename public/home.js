getnew();
gettrend();
gettop();

function getnew() {
    let todaydate = new Date();
    let year = todaydate.getFullYear();
    let month = todaydate.getMonth() + 1;
    season = ['winter', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall'];
    let requestURL = 'https://api.jikan.moe/v3/season/' + year + '/' + season[month];
    // 
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((newdata) => {
            console.log(newdata);
            var d1 = document.getElementById('newanime');
            for (var i = 0; i < 50; i++) {
                const element = newdata.anime[i];
                d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <button type="submit" id="addtoprofile"> <i class="fas fa-plus-square fa-3x"></i></button><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
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
            console.log("trendata");
            console.log(trenddata);
            var d1 = document.getElementById('trendanime');
            for (var i = 0; i < 50; i++) {
                const element = trenddata.top[i];
                d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <button type="submit" id="addtoprofile"> <i class="fas fa-plus-square fa-3x"></i></button><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
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
            console.log("topdata");
            console.log(topdata);
            var d1 = document.getElementById("topanime");
            for (var i = 0; i < 50; i++) {
                const element = topdata.results[i];
                d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <button type="submit" id="addtoprofile"> <i class="fas fa-plus-square fa-3x"></i></button><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
            }
        });
}
window.addEventListener('load', () => {
    // init swiper here
    var swiper = new Swiper('.swiper-container.new', {
        slidesPerView: 6,
          spaceBetween: -50,
        slidesPerGroup: 6,
        // loop: true,
        // loopFillGroupWithBlank: true,
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
    // swiper.update();
}, false);
window.addEventListener('load', () => {
    // init swiper here
    var swiper = new Swiper('.swiper-container.trend', {
        slidesPerView: 6,
          spaceBetween: -50,
        slidesPerGroup: 6,
        // loop: true,
        // loopFillGroupWithBlank: true,
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
    // swiper.update();
}, false);
window.addEventListener('load', () => {
    // init swiper here
    var swiper = new Swiper('.swiper-container.top', {
        slidesPerView: 6,
          spaceBetween: -50,
        slidesPerGroup: 6,
        // loop: true,
        // loopFillGroupWithBlank: true,
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
    // swiper.update();
}, false);