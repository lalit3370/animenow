for(var i=0;i<animelist.length;i++){
    getmylist(animelist[i]);
}
function getmylist(animeid){
    var query = `
query ($page: Int, $perPage: Int, $sort: [MediaSort], $isAdult: Boolean, $genre: String, $idMal: Int) {
    Page (page: $page, perPage: $perPage) {
    media (sort: $sort, type: ANIME, isAdult: $isAdult, genre: $genre, idMal: $idMal) {
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
// perPage: 1,
// isAdult: false,
idMal: animeid
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
    var element=data.data.Page.media[0];
    d1=document.getElementById("newanime");
    d1.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="animethumbs"> <form action="/remove" method="post"><button type="submit" class="addtoprofile"  name="animeid" value=' + element.idMal + ' onclick="addtoprofile()"> <i class="fas fa-check-square fa-3x"></i></button></form><img src=' + element.coverImage.large + ' alt="Error Displaying the image"><div class="imagetext"><p>' + element.title.romaji + '</p></div></div>');
}
function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleError(error) {
console.error(error);
}