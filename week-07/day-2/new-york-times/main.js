'use strict';

//Search interesting articles on The New York Times.
//Create an Account and register an app using localhost as the website URL to get your API key.
//Use the Article Search API
//Find articles about the moon landing by Apollo 11
//Display the following fields in a list
//Headline
//Snippet
//Publication date
//Create a permalink for each article


let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=6jE654DTiY4f4z9t67NBMF2YcJ0GRvSC', true);


let listContainer = document.getElementsByTagName("ul")[0];

ourRequest.onload = function () {
    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    for (let i = 0; i < ourData.response.docs.length; i++) {
        let headLine = document.createElement("li");
        headLine.innerText = ourData.response.docs[i].headline.main;
        let snippet = document.createElement("li");
        snippet.innerText = ourData.response.docs[i].snippet;
        let publicationDate = document.createElement("li");
        publicationDate.innerText = ourData.response.docs[i].pub_date.substr(0, 10);
        let link = document.createElement("a");
        link.setAttribute("href", ourData.response.docs[i].web_url);
        link.innerText= headLine.innerText;
        listContainer.appendChild(headLine);
        listContainer.appendChild(snippet);
        listContainer.appendChild(publicationDate);
        listContainer.appendChild(link);
    }
};
ourRequest.send();