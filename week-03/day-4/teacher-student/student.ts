'use strict';

import { Teacher } from './teacher';

class Student {

    learn(): void {
        console.log("I'm learning something new");
      }

    question(teacher : Teacher): void {
        teacher.answer();
    }

}

export { Student };

