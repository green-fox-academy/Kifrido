'use strict';

import { Student } from './student';

class Teacher {

    teach(student): void{
        student.learn();
    }

    answer(): void {
        console.log("I'm answering a question.");
    }
}

export { Teacher };