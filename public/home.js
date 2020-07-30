getnew();
gettrend();
gettop();

function getnew(){
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
        idMal
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
    var d1 = document.getElementById("newanime");
    var count = Object.keys(data.data.Page.media).length;
    if (typeof animelist != 'undefined') {
      for (var i = 0; i < count; i++) {
        const element=data.data.Page.media[i];
          if (animelist.some(function getelement(list) {
              return list == element.idMal;
          })) {
              d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
          } else {
              d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
          }
      }
    }
    else {
        for (var i = 0; i < count; i++) {
          const element=data.data.Page.media[i];
            d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji+ '</p></div></div>');
        }
    }
}).catch(handleError);
}

function gettrend(){
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
  var d1 = document.getElementById('trendanime');
    if (typeof animelist != 'undefined') {

        for (var i = 0; i < count; i++) {
          const element=data.data.Page.media[i];
            if (animelist.some(function getelement(list) { return list == element.idMal; })) {
                d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
            }
            else {
                d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
            }
        }
    }
    else {
        for (var i = 0; i < count; i++) {
          const element=data.data.Page.media[i];
            d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
        }
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
    var d1 = document.getElementById("topanime");

    if (typeof animelist != 'undefined') {

        for (var i = 0; i < count; i++) {
          const element=data.data.Page.media[i];
            if (animelist.some(function getelement(list) {
                return list == element.idMal;
            })) {
                d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
            } else {
                d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
            }
        }
    }
    else {
        for (var i = 0; i < count; i++) {
          const element=data.data.Page.media[i];
            d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
        }
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
var swiper1 = new Swiper('.swiper-container.new', {
  slidesPerView: 6,
  // spaceBetween: -50,
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
  breakpoints: {
    600:  {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    936: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1205: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1520: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1840: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  },
});
var swiper2 = new Swiper('.swiper-container.trend', {
  slidesPerView: 6,
  // spaceBetween: -50,
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
  breakpoints: {
    600:  {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    936: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1205: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1520: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1840: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  },
});

var swiper3 = new Swiper('.swiper-container.top', {
  slidesPerView: 6,
  // spaceBetween: -50,
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
  breakpoints: {
    600:  {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    936: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1205: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1520: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1840: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  },
});
setTimeout(() => {
  swiper1.update();
  swiper2.update();
  swiper3.update();
  console.log("now");
}, 1500);

function showtopnav(){
  var x=document.getElementById("navbar");
  if(x.className=="navbar"){
    x.className+=" responsive";
  } else{
    x.className="navbar";
  }
  console.log(x.className);
}
function showgenre(){
  var x=document.getElementById("genre-mobile-links");
  if(x.className=="genre-mobile-links"){
    x.className+=" responsive";
  } else{
    x.className="genre-mobile-links";
  }
  console.log(x.className);
}