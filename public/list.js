getlist(1);
getlist(2);
getlist(3);
var x=3;
window.addEventListener('scroll',function(){
    const totalscroll=document.documentElement.scrollHeight-window.innerHeight;
    var scrolled=window.scrollY;
    scrolled=Math.ceil(scrolled);
    scrolled+=20;
    if(totalscroll<=scrolled){
      x++;
      getlist(x);
    }
});

function getlist(pageno) {
  var query = `
query ($page: Int, $perPage: Int, $sort: [MediaSort], $isAdult: Boolean) {
    Page (page: $page, perPage: $perPage) {
    media (sort: $sort, type: ANIME, isAdult: $isAdult) {
      title {
        romaji
     }
     siteUrl
    }
    }
}
`;

  var variables = {
    sort: "TITLE_ROMAJI",
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
    .then((data) => {
      // var sec, gotoid;
      for (var i = 0; i < 50; i++) {
        const element = data.data.Page.media[i];
        var firstchar = element.title.romaji[0];
        if (!firstchar.match(/[a-zA-Z]/)) {
          sec = "specialchar";
          gotoid = "#";
        } else {
          sec = firstchar;
          gotoid = firstchar;
        }
        console.log("gotoid: "+gotoid);
        console.log("sec: "+sec);
        document.getElementById(sec).style.display = "grid";
        document.getElementById("goto" + gotoid).style.display = "block";
        document.getElementById(sec).insertAdjacentHTML('beforeend', '<div><a href=' + element.siteUrl + ' class="anilink">' + element.title.romaji + '</a></div>');
      }
    }).catch(handleError);
}

function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

function handleError(error) {
  console.error(error);
}