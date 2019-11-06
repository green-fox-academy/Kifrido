'use strict';

let genres = document.querySelector('.genres');
let movies = document.querySelector('.movies');
let drama = document.querySelector('[value=drama]');
let scifi = document.querySelector('[value=scifi]');
let comedy = document.querySelector('[value=comedy]');
let dramaM = document.querySelectorAll('[value=drama1]');
let scifiM = document.querySelectorAll('[value=scifi1]');
let comedyM = document.querySelectorAll('[value=comedy1]');
let dramaNew =[];
let scifiNew =[];
let comedyNew =[];
for(let i = 0; i < dramaM.length; i++){
    dramaNew.push(dramaM[i].value);
    scifiNew.push(scifiM[i].value);
    comedyNew.push(comedyM[i].value);
}


/*genres.addEventListener("change", function(){
    drama.selected ? scifiNew.style.display = "none" : scifiNew.style.display = "";
});*/


/*genres.addEventListener("change", function(){
    drama.selected ? console.log(scifiNew) = "none" : console.log("szia");
});*/

genres.addEventListener("change", function(){
    if(drama.selected){
        scifiNew.style.display = "none"
    } else{ 
        console.log("szia");
}
});