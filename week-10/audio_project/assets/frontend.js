'use strict';

//adding playlist to the playlist list

let modalButton = document.querySelector(".modalButton");

modalButton.addEventListener("click", () => {
  modal.style.display = "none"
  fetch("http://localhost:3000/playlists", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "playlist": playlist.value })
  })
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
});

//adding songs to tracklist

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/playlist-tracks/', true);


let musicContainer = document.querySelector("ol");

ourRequest.onload = function () {

  let ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData);
  for (let i = 0; i < ourData.length; i++) {
    let song = document.createElement("li");
    song.setAttribute("id", ourData[i].path);
    song.setAttribute("class", "music");
    song.innerText = `${ourData[i].title} (${ourData[i].artist})`;
    musicContainer.appendChild(song);
  };
}
ourRequest.send();

//reading the playlist list from the database

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

//modal functions

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//play the songs from the tracklist

let ol = document.querySelector('ol');
let source = document.querySelector('source');
let audio = document.querySelector('#player');
let p = document.querySelector('.current p');


ol.addEventListener("click", (event) => {
  let value = event.target.id;
  source.setAttribute("src", value);
  audio.load();
  audio.play();
  p.innerText = event.target.innerText;
})

