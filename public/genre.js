getgenre(1);
var x=1;
window.addEventListener('scroll',function(){
    const totalscroll=document.documentElement.scrollHeight-window.innerHeight;
    var scrolled=window.scrollY;
    scrolled=Math.ceil(scrolled);
    scrolled+=20;
    if(totalscroll<=scrolled){
      x++;
      getgenre(x);
    }
});
function getgenre(pageno){
    var query = `
query ($page: Int, $perPage: Int, $sort: [MediaSort], $isAdult: Boolean, $genre: String) {
    Page (page: $page, perPage: $perPage) {
    media (sort: $sort, type: ANIME, isAdult: $isAdult, genre: $genre) {
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
genre: genid,
sort: "POPULARITY_DESC",
perPage: 25,
isAdult: false,
page: pageno
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
.then(handleData)
.catch(handleError);
}
function handleData(data){
    console.log(data);
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
function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleError(error) {
console.error(error);
}