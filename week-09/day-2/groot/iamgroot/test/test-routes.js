'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
    request(app)
    .get('/groot')
    .query({ message: 'something'})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
        console.log(res.body);
      t.error(err, 'No error');
      t.deepEqual(res.body.received, "something", 'Correct message');
      t.end();
    });
});

test('groot without endpoint ', (t) => {
    request(app)
    .get('/groot')
    .query({ message: ''})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
        console.log(res.body);
      t.error(err, 'No error');
      t.deepEqual(res.body, {error: 'I am Groot!' }, 'Correct message for error');
      t.end();
    });
});
