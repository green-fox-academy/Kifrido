'use strict';

import { Thing } from './thing';

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }


  print(): void {
    for(let i = 0; i < this.things.length; i++){
        if(this.things[i].getCompleted()){
            console.log((i + 1) + '. ' + '[x] ' + this.things[i].getName());
        } else {
            console.log((i + 1) + '. ' + '[ ] ' + this.things[i].getName());
        }
    }
  }

}

export { Fleet };