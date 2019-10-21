'use strict';

import * as test from 'tape';
import { Anagram } from "./Anagram";

test ('test Anagram function', t =>{
    let actual  = Anagram('whatever', 'erevthaw');
    let expected = true;

    t.equal(actual, expected);
    t.end();
});

