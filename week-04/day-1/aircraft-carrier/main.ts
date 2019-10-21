'use strict';

import { F35 } from './F35'
import { F16 } from './F16'
import { Aircraft } from './aircraft'
import { AircraftCarrier } from './aircraft-carrier'

let missouri = new AircraftCarrier (2300, 5000);

let iceMan = new F35 ();
let coolerOne = new F35 ();
let americanEagle = new F35
let maverick = new F16 ();
let goose = new F16 ();

missouri.add(iceMan);
missouri.add(coolerOne);
missouri.add(americanEagle);
missouri.add(maverick);
missouri.add(goose);

missouri.fill();

missouri.getStatus();


let konovalov = new AircraftCarrier (2600, 1600);

missouri.fight(konovalov);

konovalov.getStatus();

