'use strict';


//show main page

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/posts', true);


let postContainer = document.querySelector("article");
ourRequest.onload = function () {

    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData.posts.length);
    for (let i = 0; i < ourData.posts.length; i++) {
        let posts = document.createElement("div");
        let votedivs = document.createElement("div");
        let postdivs = document.createElement("div");
        let upvote = document.createElement("button");
        let score = document.createElement("p");
        let downvote = document.createElement("button");
        let title = document.createElement("h1");
        let links = document.createElement("a");
        let modify = document.createElement("a");
        let remove = document.createElement("a");
        let linkdivs = document.createElement("div");

        posts.setAttribute("class", "posts");
        votedivs.setAttribute("class", "vote");
        postdivs.setAttribute("class", "text");
        links.setAttribute("href", ourData.posts[i].url);
        upvote.setAttribute("class", "button upvote");
        linkdivs.setAttribute("class", "linkdivs");
        score.innerText = ourData.posts[i].score;
        downvote.setAttribute("class", "button downvote");

        modify.innerText = "Modify";
        remove.innerText = " Remove";
        links.innerText = ourData.posts[i].url;
        title.innerText = ourData.posts[i].title;

        postContainer.appendChild(posts);
        posts.appendChild(votedivs);
        posts.appendChild(postdivs);
        votedivs.appendChild(upvote);
        votedivs.appendChild(score);
        votedivs.appendChild(downvote);
        postdivs.appendChild(title);
        postdivs.appendChild(links);
        linkdivs.appendChild(modify);
        linkdivs.appendChild(remove);
        postdivs.appendChild(linkdivs);
    };
}
ourRequest.send();