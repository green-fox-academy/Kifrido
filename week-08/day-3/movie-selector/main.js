'use strict';

let genres = document.querySelector('.genres');
let movies = document.querySelector('.movies');
let drama = document.querySelector('[value=drama]');
let scifi = document.querySelector('[value=scifi]');
let comedy = document.querySelector('[value=comedy]');
let dramaM = document.querySelectorAll('[value=drama1]');
let scifiM = document.querySelectorAll('[value=scifi1]');
let comedyM = document.querySelectorAll('[value=comedy1]');

genres.addEventListener("change", function () {
    if (drama.selected) {
        for (let i = 0; i < movies.options.length; i++) {
            if (movies.options[i].value !== "drama1") {
                movies.options[i].style.display = "none";
            } else{
                movies.options[i].style.display = "";
            }
        }
    } else if (scifi.selected) {
        for (let i = 0; i < movies.options.length; i++) {
            if (movies.options[i].value !== "scifi1") {
                movies.options[i].style.display = "none";
            } else{
                movies.options[i].style.display = "";
            }
        }
    } else if (comedy.selected) {
        for (let i = 0; i < movies.options.length; i++) {
            if (movies.options[i].value !== "comedy1") {
                movies.options[i].style.display = "none";
            } else{
                movies.options[i].style.display = "";
            }
        }
    }
});

let selectedMovieText = 'The selected movie is: ';
let chosenMovie = document.querySelector('p');
chosenMovie.textContent = selectedMovieText.concat('-');

movies.addEventListener('change', (event) => {
	let span = document.createElement('span');
	span.textContent = movies.options[movies.selectedIndex].textContent
	chosenMovie.textContent = selectedMovieText;
	chosenMovie.appendChild(span);
});