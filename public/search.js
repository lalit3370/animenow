search(1);
let x=1;
window.addEventListener('scroll',function(){
  const totalscroll=document.documentElement.scrollHeight-window.innerHeight;
  var scrolled=window.scrollY;
  scrolled=Math.ceil(scrolled);
  scrolled+=20;
  if(totalscroll<=scrolled){
    x++;
    search(x);
  }
});
function search(pageno){
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
    media (id: $id, search: $search, type: ANIME, sort: $sort) {
      idMal
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
    search: searchquery,
    sort: "POPULARITY_DESC",
    page: pageno,
    perPage: 50
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

fetch(url, options).then(handleResponse)
                   .then(handleData)
                   .catch(handleError);
}


function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) { 
  d1=document.getElementById("newanime");
  var count=Object.keys(data.data.Page.media).length;
  if (typeof animelist != 'undefined') {
    for(var i=0;i<count;i++){
      var element=data.data.Page.media[i];
      if (animelist.some(function getelement(list) {
          return list == element.idMal;
      })) {
          d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
      } else {
          d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/add" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-plus-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
      }  
    }
  }
  else{
    for (var i = 0; i < count; i++) {
      var element=data.data.Page.media[i];
        d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
    }    
  }
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}