'use strict';

import { F35 } from './F35'
import { F16 } from './F16'
import { Aircraft } from './aircraft'
import { AircraftCarrier } from './aircraft-carrier'


let f35 = new F35;
let f16 = new F16;
let aircraftCarrier = new AircraftCarrier(0);
f35.getType();
f35.isPriority();
f16.fight();
f16.getStatus();
