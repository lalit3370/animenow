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
      large
    }
    }
  }
}
`;

var variables = {
    // search: "Fate/Zero",
    // genre_in: "action",
    search: searchquery,
    sort: "POPULARITY_DESC",
    page: 1,
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

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
  var count=Object.keys(data.data.Page.media).length;
  for(var i=0;i<count;i++){
    document.getElementById("newanime").insertAdjacentHTML('beforeend', '<div class="animethumbs"><div class="animage"><img src=' + data.data.Page.media[i].coverImage.large + ' alt="Error Displaying the image" class="animage"></div><div class="imagetext"><p>' + data.data.Page.media[i].title.romaji + '</p></div>');
  }
    console.log(data);
    // console.log(data.data.Page);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}