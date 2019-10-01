'use strict';

import { Reservationy } from './reservationy' 

export class Reservation implements Reservationy{
    protected static _dow : string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    protected static _codeList: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  

    getDowBooking(): string{
            let randomItem = Reservation._dow[Math.floor(Math.random() * Reservation._dow.length)];
            return randomItem;
    }
    

    getCodeBooking(): string{
            let randomItem2: string [] = [];
            for(let j: number = 0; j < 8; j++){
                randomItem2.push(Reservation._codeList[Math.floor(Math.random() * Reservation._codeList.length)]);
            }
            return randomItem2.join("");
    }
    
}
