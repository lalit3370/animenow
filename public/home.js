getnew();
gettrend();
gettop();

// function getnew() {
//     let todaydate = new Date();
//     let year = todaydate.getFullYear();
//     let month = todaydate.getMonth() + 1;
//     season = ['winter', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall'];
//     let requestURL = 'https://api.jikan.moe/v3/season/' + year + '/' + season[month];
//     // let requestURL='/jsonfiles/new.json'
//     fetch(requestURL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((newdata) => {
//             var d1 = document.getElementById('newanime');
//             if (typeof animelist != 'undefined') {
//                 for (var i = 0; i < 50; i++) {
//                     var element = newdata.anime[i];
//                     if (animelist.some(function getelement(list) {
//                         return list == element.mal_id;
//                     })) {
//                         console.log("found " + element.mal_id);
//                         d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                     } else {
//                         d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                     }
//                 }
//             }
//             else {
//                 for (var i = 0; i < 50; i++) {
//                     const element = newdata.anime[i];
//                     d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                 }
//             }

//         });
// }
// function gettrend() {
//     let requestURL = 'https://api.jikan.moe/v3/top/anime/1/airing';
//     fetch(requestURL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((trenddata) => {

//             var d1 = document.getElementById('trendanime');

//             if (typeof animelist != 'undefined') {

//                 for (var i = 0; i < 50; i++) {
//                     var element = trenddata.top[i];
//                     if (animelist.some(function getelement(list) { return list == element.mal_id; })) {
//                         console.log("found " + element.mal_id);
//                         d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                     }
//                     else {
//                         d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                     }
//                 }
//             }
//             else {
//                 for (var i = 0; i < 50; i++) {
//                     const element = trenddata.top[i];
//                     d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                 }
//             }
//         });
// }

// function gettop() {
//     let requestURL = 'https://api.jikan.moe/v3/search/anime?order_by=score';
//     // let requestURL='/jsonfiles/top.json'
//     fetch(requestURL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((topdata) => {
            // var d1 = document.getElementById("topanime");

//             if (typeof animelist != 'undefined') {

//                 for (var i = 0; i < 50; i++) {
//                     var element = topdata.results[i];
//                     if (animelist.some(function getelement(list) {
//                         return list == element.mal_id;
//                     })) {
//                         console.log("found " + element.mal_id);
//                         d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                     } else {
//                         d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.mal_id + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                     }
//                 }
//             }
//             else {
//                 for (var i = 0; i < 50; i++) {
//                     const element = topdata.results[i];
//                     d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.image_url + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title + '</p></div></div>');
//                 }
//             }
//         });
// }
function getnew(){
    var d1 = document.getElementById("newanime");
    var query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort], $isAdult: Boolean, $status: MediaStatus, $format_not: MediaFormat) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search, sort: $sort, type: ANIME, isAdult: $isAdult, status: $status, format_not: $format_not) {
          title {
            romaji
        }
        coverImage {
          large
        }
        status
        format
        }
      }
    }
  `;

var variables = {
  sort: "START_DATE_DESC",
  perPage: 20,
  isAdult: false,
  status: "RELEASING",
  format_not: "ONA"
};

var url = 'https://graphql.anilist.co',
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  };

fetch(url, options)
  .then(handleResponse)
  .then((data)=>{
    console.log(data);
    var count = Object.keys(data.data.Page.media).length;
    for (var i = 0; i < count; i++) {
        const element=data.data.Page.media[i];
          d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');    
    }
  })
  .catch(handleError);

}

function gettrend(){
  var d1 = document.getElementById("trendanime");
  var query = `
  query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search, sort: $sort, type: ANIME) {
        id
        idMal
        externalLinks {
          url
        }
        title {
          romaji
      }
      coverImage {
        large
      }
      }
    }
  }
`;
var variables = {
sort: "TRENDING_DESC",
perPage: 20
};

var url = 'https://graphql.anilist.co',
options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query: query,
    variables: variables
  })
};

fetch(url, options)
.then(handleResponse)
.then((data)=>{
  var count = Object.keys(data.data.Page.media).length;
  for (var i = 0; i < count; i++) {
      const element=data.data.Page.media[i];
      d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');    
  }
})
.catch(handleError);

}

function gettop(){
    var d1 = document.getElementById("topanime");
    var query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search, sort: $sort, type: ANIME) {
          id
          idMal
          externalLinks {
            url
          }
          title {
            english
            native
            romaji
        }
        coverImage {
          medium
          large
          extraLarge
        }
        popularity
        }
      }
    }
  `;

var variables = {
  sort: "POPULARITY_DESC",
  perPage: 20
};

var url = 'https://graphql.anilist.co',
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  };

fetch(url, options)
  .then(handleResponse)
  .then((data)=>{
    var count = Object.keys(data.data.Page.media).length;
    for (var i = 0; i < count; i++) {
        const element=data.data.Page.media[i];
        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');    
    }
  })
  .catch(handleError);
}


function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleError(error) {
    console.error(error);
}