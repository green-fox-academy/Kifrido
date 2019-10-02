'use strict';

import * as test from 'tape';
import { countLetters } from "./count-letters";


test ('test countLetters function', t =>{
    let string1: string = JSON.stringify(countLetters('halllloo'));
    let actual  = string1;
    let expected = '{"a":1,"h":1,"l":4,"o":2}';

    t.equal(actual, expected);
    t.end();
});
