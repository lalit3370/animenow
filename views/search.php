<!DOCTYPE html>
<html lang="en">

<head>
    <script src="homestyle.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Oxygen|Trade+Winds&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="home.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AnimeNow</title>
    <script>
        var query = "<?php echo $_GET["searchkey"]; ?>";
        console.log(query);
        fetch('https://api.jikan.moe/v3/search/anime?q=' + query + '&page=1')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                for (var i = 0; i < 100; i++) {
                    const element = data.results[i];
                    document.getElementById("newanime").insertAdjacentHTML('beforeend', '<div class="animethumbs"><div class="animage"><img src=' + element.image_url + ' alt="Error Displaying the image" class="animage"></div><div class="imagetext"><p>' + element.title + '</p></div>');
                }
            });
    </script>
</head>

<body>
    <div class="wrapper">
        <div id="navbar">
            <div id="homeicon">
                <a href="home.html">AnimeNow</a>
            </div>
            <div class="topnav">
                <a href="home.html" class="active">Home</a>
                <a href="list.html">List</a>
                <div class="dropdown">
                    <button class="dropbtn">Genre</button>
                    <div class="dropdown-content">
                        <div>
                            <form action="genre.php" method="GET">
                                <div><button type="submit" class="genreid" value="1" name="genrebtn">Action</button>
                                </div>
                                <div><button type="submit" class="genreid" value="2" name="genrebtn">Adventure</div>
                                <div><button type="submit" class="genreid" value="4" name="genrebtn">Comedy</button>
                                </div>
                                <div><button type="submit" class="genreid" value="8" name="genrebtn">Drama</button>
                                </div>
                                <div><button type="submit" class="genreid" value="36" name="genrebtn">Slice of
                                        Life</button></div>
                            </form>
                        </div>

                        <div>
                            <form action="genre.php" method="GET">
                                <div><button type="submit" class="genreid" value="10" name="genrebtn">Fantasy</button>
                                </div>
                                <div><button type="submit" class="genreid" value="16" name="genrebtn">Magic</button>
                                </div>
                                <div><button type="submit" class="genreid" value="37"
                                        name="genrebtn">Supernatural</button></div>
                                <div><button type="submit" class="genreid" value="14" name="genrebtn">Horror</button>
                                </div>
                                <div><button type="submit" class="genreid" value="7" name="genrebtn">Mystery</button>
                                </div>
                            </form>
                        </div>

                        <div>
                            <form action="genre.php" method="GET">
                                <div><button type="submit" class="genreid" value="40"
                                        name="genrebtn">Psychological</button></div>
                                <div><button type="submit" class="genreid" value="22" name="genrebtn">Romance</button>
                                </div>
                                <div><button type="submit" class="genreid" value="24" name="genrebtn">Sci-Fi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <a href="#browse">Browse</a>
                <a href="#animemes">Animemes</a>
            </div>

            <div class="searcharea">
                <form action="search.php" method="GET" id="searchform">
                    <input type="text" id="search" name="searchkey" placeholder="Press Enter to Search">
                </form>
            </div>
            <div id="acctarea">
                <a href="#login">Login</a>
                <a href="#signup">Signup</a>
                <div id="acctdropdown">
                    <button id="acctdropbtn"><i class="fas fa-cog fa-2x"></i></button>
                    <div id="acctdropcontent">
                        <p>
                            Turn Dark theme ON/OFF
                        </p>
                        <div id="themesliderdiv">
                            <button id="themeslider" onclick="changetheme()">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="mid">
            <div class="row" id="midrow">
                <div class="filter">
                    <form action="advsearch.php" method="post" id="advsearch">
                        <div class="typearea">
                            <div>
                                <label for="type">Type</label>
                            </div>
                            <div>
                                <select id="type" name="type" form="advsearch">
                                    <option value="" selected> </option>
                                    <option value="tv">tv</option>
                                    <option value="ova">ova</option>
                                    <option value="movie">movie</option>
                                    <option value="special">special</option>
                                    <option value="onaa">ona</option>
                                    <option value="music">music</option>
                                </select>
                            </div>
                        </div>
                        <div class="statusarea">
                            <div><label for="status">Status</label></div>
                            <div>
                                <select id="status" name="status" form="advsearch">
                                    <option value="" selected> </option>
                                    <option value="airing">airing</option>
                                    <option value="completed">completed</option>
                                    <option value="complete">complete</option>
                                    <option value="to_be_aired">to be aired</option>
                                    <option value="tba">to be announced</option>
                                    <option value="upcoming">upcoming</option>
                                </select>
                            </div>
                        </div>
                        <div class="genrearea">
                            <div>
                                <label for="genre">Genre</label>
                            </div>
                            <div class="test">
                                <div>
                                    <input type="radio" name="genre" id="genre" value="1" form="advsearch">
                                    <label for="">Action</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="2" form="advsearch">
                                    <label for="">Adventure</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="3" form="advsearch">
                                    <label for="">Cars</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="4" form="advsearch">
                                    <label for="">Comedy</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="5" form="advsearch">
                                    <label for="">Dementia</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="6" form="advsearch">
                                    <label for="">Demons</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="7" form="advsearch">
                                    <label for="">Mystery</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="8" form="advsearch">
                                    <label for="">Drama</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="9" form="advsearch">
                                    <label for="">Ecchi</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="10" form="advsearch">
                                    <label for="">Fantasy</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="11" form="advsearch">
                                    <label for="">Game</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="12" form="advsearch">
                                    <label for="">Hentai</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="13" form="advsearch">
                                    <label for="">Historical</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="14" form="advsearch">
                                    <label for="">Horror</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="15" form="advsearch">
                                    <label for="">Kids</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="16" form="advsearch">
                                    <label for="">Magic</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="17" form="advsearch">
                                    <label for="">Martial Arts</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="18" form="advsearch">
                                    <label for="">Mecha</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="19" form="advsearch">
                                    <label for="">Music</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="20" form="advsearch">
                                    <label for="">Parody</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="21" form="advsearch">
                                    <label for="">Samurai</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="22" form="advsearch">
                                    <label for="">Romance</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="23" form="advsearch">
                                    <label for="">School</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="24" form="advsearch">
                                    <label for="">Sci Fi</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="25" form="advsearch">
                                    <label for="">Shoujo</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="26" form="advsearch">
                                    <label for="">Shoujo Ai</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="27" form="advsearch">
                                    <label for="">Shounen</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="28" form="advsearch">
                                    <label for="">Shounen Ai</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="29" form="advsearch">
                                    <label for="">Space</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="30" form="advsearch">
                                    <label for="">Sports</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="31" form="advsearch">
                                    <label for="">Super Power</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="32" form="advsearch">
                                    <label for="">Vampire</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="33" form="advsearch">
                                    <label for="">Yaoi</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="34" form="advsearch">
                                    <label for="">Yuri</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="35" form="advsearch">
                                    <label for="">Harem</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="36" form="advsearch">
                                    <label for="">Slice Of Life</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="37" form="advsearch">
                                    <label for="">Supernatural</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="38" form="advsearch">
                                    <label for="">Military</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="39" form="advsearch">
                                    <label for="">Police</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="40" form="advsearch">
                                    <label for="">Psychological</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="41" form="advsearch">
                                    <label for="">Thriller</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="42" form="advsearch">
                                    <label for="">Seinen</label>
                                </div>
                                <div>
                                    <input type="radio" name="genre" id="genre" value="43" form="advsearch">
                                    <label for="">Josei</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="animethumbarea" id="newanime">
                </div>
            </div>
        </div>
        <div id="foot">
            <div>
                About Us
            </div>
            <div>
                Contact Us
            </div>
        </div>
</body>

</html>