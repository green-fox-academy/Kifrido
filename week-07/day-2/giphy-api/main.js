'use strict';

let body = document.getElementsByTagName("body")[0];

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=oJCl7QGYVPWPgWY6VFgkpcH8WzJwaFkj&q=lion&limit=16&offset=0&rating=G&lang=en', true);
   
    ourRequest.onload = function(){
        let ourData = JSON.parse(ourRequest.responseText);
        for(let i = 0; i < 16; i++){
            let newImg = document.createElement("img");
            newImg.setAttribute("src", ourData.data[i].images.fixed_height_small_still.url);
            newImg.addEventListener("click", function(){
                newImg.setAttribute("src", ourData.data[i].images.downsized_large.url);;
            })
            body.appendChild(newImg);
        }
};
ourRequest.send();

