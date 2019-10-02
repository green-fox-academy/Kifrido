'use strict';

import * as test from 'tape';
import { makeAnagrams } from "./Anagram";

test ('test makeAnagrams function', t =>{
    let actual  = makeAnagrams('whatever', 'erevthaw');
    let expected = true;

    t.equal(actual, expected);
    t.end();
});

