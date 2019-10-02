'use strict';

import * as test from 'tape';
import { Calculator } from "./calculator";

test ('test sum method', t =>{
    let calculator = new Calculator();
    let actual  = calculator.sum([1, 2, 3]);
    let expected = 6;

    t.equal(actual, expected);
    t.end();
});