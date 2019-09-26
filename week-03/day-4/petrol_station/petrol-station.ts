'use strict';

import { Station } from './Station';
import { Car } from './Car';

//Create a Station and a Car classes
//Station
//gasAmount
//refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//Car
//gasAmount
//capacity
//create constructor for Car where:
//initialize gasAmount -> 0
//initialize capacity -> 100

let car = new Car();
let station = new Station(200);

console.log('This is the gasamount of the car before filling: ' + car.gasAmount);
console.log('This is the gasamount of the station before filling: ' + station.gasAmount);

station.refill(car);

console.log('This is the gasamount of the car after filling: ' + car.gasAmount);
console.log('This is the gasamount of the station before filling: ' + station.gasAmount);
