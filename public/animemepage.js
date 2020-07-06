var x = document.getElementById('memearea');
memelist.forEach(element => {
    console.log(element);
    x.insertAdjacentHTML('beforeend', '<div class="swiper-slide"><div class="memediv"><div><span class="memetitle">' + element.title + '</span><span class="memeuploader">Uploader: ' + element.uploader + '</span></div><div><br><br><img src= '+ element.path +'  alt="Image error"></div></div></div>');
});

// window.addEventListener('load', () => {
//     var swiper = new Swiper('.swiper-container.meme', {
//         // autoHeight: true,
//         direction: 'vertical',
//         slidesPerView: 1,
//         spaceBetween: 500,
//         mousewheel: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });
// }, false);
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


let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
});
function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
})

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
})

function highlight(e) {
    dropArea.classList.add('highlight')
}

function unhighlight(e) {
    dropArea.classList.remove('highlight')
}
dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer
  let file = dt.file
  uploadfile(file);
}
function uploadfile(file){
    let formdata=new FormData();
    formdata.append('file',file);
    console.log(file);
    formdata.append('text',title);
    fetch('/animemes/upload',{method: 'POST', body:formdata})
    .then(()=>{
        console.log("form sent");
    })
    .catch((err)=>{console.log(error);});
}