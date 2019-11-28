'use strict';

let modalButton = document.querySelector(".modalButton");

modalButton.addEventListener("click", () => {
  fetch("http://localhost:3000/playlists", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "playlist": playlist.value})
  })
    .then(response => response.json())
   /* .then(ourData => {
      p.innerText = `Your URL is aliased to ${ourData[0].alias} and your secret code is ${ourData[0].secretCode}.`
      alias.value = "";
      url.value = "";
    })*/
    .catch(error => {
      console.log(error);
      p.textContent = "Your alias is already in use!";
      p.style.color = "red";
    });
  });
  
  
/*function addPlaylistFunction() {
  let addRequest = new XMLHttpRequest();
  addRequest.open('POST', 'http://localhost:3000/playlists', true);

  ourRequest.onload = function () {
    let addData = JSON.parse(ourRequest.responseText);
    console.log(addData);
  }
  ourRequest.send();
}*/



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
