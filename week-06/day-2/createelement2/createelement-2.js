'use strict';

//Remove the king from the list.

let asteroidList = document.querySelector('ul.asteroids');
const removeKing = document.querySelector('li');
asteroidList.removeChild(removeKing);

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
//Each list item should have its category as a class and its content as text content.

      const planetData = [
        {
          category: 'inhabited',
          content: 'Foxes',
          asteroid: true,
        },
        {
          category: 'inhabited',
          content: 'Whales and Rabbits',
          asteroid: true,
        },
        {
          category: 'uninhabited',
          content: 'Baobabs and Roses',
          asteroid: true,
        },
        {
          category: 'inhabited',
          content: 'Giant monsters',
          asteroid: false,
        },
        {
          category: 'inhabited',
          content: 'Sheep',
          asteroid: true,
        },
      ];

let asteroids = document.querySelector('.asteroids');
let asteroidData = [];

planetData.forEach(element => {
	element.asteroid == true ? asteroidData.push(element) : undefined
});

asteroidData.forEach(element => {
	let newItem = document.createElement('li');
	let newItemContent = document.createTextNode(asteroidData[asteroidData.indexOf(element)].content);
	newItem.appendChild(newItemContent);
	newItem.setAttribute('class', asteroidData[asteroidData.indexOf(element)].category)
	asteroids.appendChild(newItem)
})

console.log(asteroids);