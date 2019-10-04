var driehoeken = document.querySelectorAll(".container > div");
console.log(driehoeken);

for(var i=0; i < driehoeken. length; i++){
    driehoeken[i].addEventListener('click', gaAnimeren);
}


function gaAnimeren(e){
    console.log(e);
    e.target.classList.add("expand");
}
