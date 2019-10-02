'use strict';

import * as test from 'tape';
import { Apple} from "./apple";

test("test getApple method", t => {
    let greenApple = new Apple();
    let actual: string = greenApple.getApple();
    let expected: string = 'apple';

    t.equal(actual, expected);
    t.end();
});