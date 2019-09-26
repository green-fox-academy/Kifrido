'use strict';

import { Thing } from './thing';
import { Fleet } from './fleet';



// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

class FleetOfThings {

    main(){
        let fleet = new Fleet();
        let Thing1 = new Thing('Get milk');
        let Thing2 = new Thing('Remove the obstacles');
        let Thing3 = new Thing('Stand up');
        let Thing4 = new Thing('Eat lunch');

        Thing3.complete();
        Thing4.complete();

        fleet.add(Thing1);
        fleet.add(Thing2);
        fleet.add(Thing3);
        fleet.add(Thing4);

        fleet.print();
    }
}

let fleetOfThings = new FleetOfThings();
fleetOfThings.main();





