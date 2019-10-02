'use strict';

import * as test from 'tape';
import { Fibonacci } from "./fibonacci";


test ('test Fibonacci function', t =>{
    let actual  = Fibonacci(5);
    let expected = 8;

    t.equal(actual, expected);
    t.end();
});
