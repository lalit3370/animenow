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
  function showacctlinks(){
    var x=document.getElementById("acctdropcontent-mobile");
    if(x.className=="acctdropcontent-mobile"){
      x.className+=" responsive";
    } else{
      x.className="acctdropcontent-mobile"
    }
    console.log(x.className);
  }