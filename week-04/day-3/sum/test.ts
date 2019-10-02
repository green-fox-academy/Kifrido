'use strict';

import * as test from 'tape';
import { Calculator } from "./calculator";

test ('test sum method', t =>{
    let calculator = new Calculator();
    let actual  = calculator.sum([5]);
    let expected = 5;

    t.equal(actual, expected);
    t.end();
});