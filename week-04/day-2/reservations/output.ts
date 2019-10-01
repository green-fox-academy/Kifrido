'use strict';

import { Reservationy } from './reservationy' 
import { Reservation } from './reservation' 

let booking = new Reservation();

for(let i = 0; i< 10; i++){
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);
}


