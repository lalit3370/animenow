var x = document.getElementById('memearea');
memelist.forEach(element => {
    console.log(element);
    x.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="memediv"><span class="memetitle">' + element.title + '</span><br><span class="memeuploader">Uploader: ' + element.uploader + '</span><br><br><img src= '+ element.path +'  alt="Image error"></div></div>');
});


var modal=document.getElementsByClassName("modal")[0];
document.getElementById("updbtn").addEventListener("click", openModal);
function openModal(){
    modal.style.display="block";
}
window.addEventListener('click',closemodel);
function closemodel(e){
    if(e.target==modal){
        modal.style.display="none"
    }   
}
var imageinput=document.getElementById("meme-img");
imageinput.onchange = function(e) { 
    var src=URL.createObjectURL(event.target.files[0]);
    document.getElementById("default-drop-area").style.display="none";
    document.getElementById("imgprev").src=src;
    document.getElementById("imgprev").style.display="block";
};
function resetform(){
    document.getElementById("default-drop-area").style.display="block";
    document.getElementById("imgprev").style.display="none";
}