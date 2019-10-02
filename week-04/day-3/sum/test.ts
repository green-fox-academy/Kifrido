'use strict';

import * as test from 'tape';
import { Calculator } from "./calculator";

test ('test sum method', t =>{
    let calculator = new Calculator();
    let actual  = calculator.sum([]);
    let expected = 0;

    t.equal(actual, expected);
    t.end();
});