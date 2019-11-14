'use strict';


//show list of book titles

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
        links.setAttribute("href", ourData.posts[i].url);
        upvote.setAttribute("style", "background: url(assets/images/upvote.png)"  );
        score.innerText = ourData.posts[i].score;
        downvote.setAttribute("style", "background: url(assets/images/downvote.png)");
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
    };
}
ourRequest.send();

//show full data

/*let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://localhost:3000/fulldata', true);
let tableContainer = document.getElementsByTagName("table")[0];
myRequest.onload = function () {
    let myData = JSON.parse(myRequest.responseText);
    for (let i = 0; i < myData.length; i++) {
        let tr = document.createElement("tr");
        let th = document.createElement("td");
        th.innerText = myData[i].book_name;
        tr.appendChild(th);
        tableContainer.appendChild(tr);
        let autName = document.createElement("td");
        autName.innerText = myData[i].aut_name;
        tr.appendChild(autName);
        tableContainer.appendChild(tr);
        let category = document.createElement("td");
        category.innerText = myData[i].cate_descrip;
        tr.appendChild(category);
        tableContainer.appendChild(tr);
        let publisher = document.createElement("td");
        publisher.innerText = myData[i].pub_name;
        tr.appendChild(publisher);
        tableContainer.appendChild(tr);
        let price = document.createElement("td");
        price.innerText = myData[i].book_price;
        tr.appendChild(price);
        tableContainer.appendChild(tr);
    };
}
myRequest.send();*/