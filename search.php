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
        var query="<?php echo $_GET["searchkey"]; ?>";
        console.log(query);
        fetch('https://api.jikan.moe/v3/search/anime?q='+query+'&page=1')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data); 
            for (var i = 0; i < 10 ; i++) {
                const element = data.results[i];
                document.getElementById("newanime").insertAdjacentHTML('beforeend','<div class="animethumbs"><div class="animage"><img src=' + element.image_url + ' alt="Error Displaying the image" class="animage"></div><div class="imagetext"><p>' + element.title + '</p></div>');
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
                                <div><button type="submit" class="genreid" value="1" name="genrebtn">Action</button></div>
                                <div><button type="submit" class="genreid" value="2" name="genrebtn">Adventure</div>
                                <div><button type="submit" class="genreid" value="4" name="genrebtn">Comedy</button></div>
                                <div><button type="submit" class="genreid" value="8" name="genrebtn">Drama</button></div>
                                <div><button type="submit" class="genreid" value="36" name="genrebtn">Slice of Life</button></div>
                            </form>
                        </div>

                        <div>
                            <form action="genre.php" method="GET">
                                <div><button type="submit" class="genreid" value="10" name="genrebtn">Fantasy</button></div>
                                <div><button type="submit" class="genreid" value="16" name="genrebtn">Magic</button></div>
                                <div><button type="submit" class="genreid" value="37" name="genrebtn">Supernatural</button></div>
                                <div><button type="submit" class="genreid" value="14" name="genrebtn">Horror</button></div>
                                <div><button type="submit" class="genreid" value="7" name="genrebtn">Mystery</button></div>
                            </form>
                        </div>

                        <div>
                            <form action="genre.php" method="GET">
                                <div><button type="submit" class="genreid" value="40" name="genrebtn">Psychological</button></div>
                                <div><button type="submit" class="genreid" value="22" name="genrebtn">Romance</button></div>
                                <div><button type="submit" class="genreid" value="24" name="genrebtn">Sci-Fi</button></div>
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

</htmGET