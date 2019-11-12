'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');


test('Correct time added', function (t) {
    request(app)
      .get('/yondu')
      .query({ distance: 100, time: 20})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        t.error(err, 'No error');
        console.log(res.body);
        t.deepEqual(res.body, {"distance":100,"time":20,"speed":5}, 'Correct speed');
        t.end();
      });
  });

  test('time with zero', function (t) {
    request(app)
      .get('/yondu')
      .query({ distance: 100, time: 0})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        t.error(err, 'No error');
        console.log(res.body);
        t.deepEqual(res.body, {"distance":100,"time":0,"speed":'undefined'}, 'speed with zero');
        t.end();
      });
  });