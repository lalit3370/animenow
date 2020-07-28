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
    pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
    }
    media (sort: $sort, type: ANIME, isAdult: $isAdult, genre: $genre) {
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
genre: genid,
sort: "POPULARITY_DESC",
perPage: 50,
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
.then((data)=>{
    console.log(data);
    var count = Object.keys(data.data.Page.media).length;
    for (var i = 0; i < count; i++) {
        const element=data.data.Page.media[i];
        document.getElementById("newanime").insertAdjacentHTML('beforeend', '<div class="animethumbs"><div class="animage"><img src=' + element.coverImage.large + ' alt="Error Displaying the image" class="animage"></div><div class="imagetext"><p>' + element.title.romaji + '</p></div>');
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