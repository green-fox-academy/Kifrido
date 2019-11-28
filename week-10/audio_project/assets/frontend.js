'use strict';

function myFunction() {
  let my_text = prompt('Enter text here');
  if (my_text) alert(my_text);
}

let source = document.querySelector('source');

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/playlist-tracks/', true);


let musicContainer = document.querySelector("ol");

ourRequest.onload = function () {

  let ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData);
  for (let i = 0; i < ourData.length; i++) {
    let song = document.createElement("li");
    song.setAttribute("src", ourData[i].path);
    song.innerText = `${ourData[i].title} (${ourData[i].artist})`;
    musicContainer.appendChild(song);
  };
}
ourRequest.send();

let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://localhost:3000/playlists', true);

let playlists = document.querySelector(".new");

myRequest.onload = function () {
  let myData = JSON.parse(myRequest.responseText);
  console.log("hello");
  console.log(myData.rows[0]);
  for (let i = 0; i < myData.rows.length; i++) {
    let playlist = document.createElement("p");
    playlist.innerText = myData.rows[i].playlist
    playlists.appendChild(playlist);
  };
};

myRequest.send();