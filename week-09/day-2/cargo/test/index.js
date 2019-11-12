'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('First test!', function (t) {
  t.end();
});

test('overall status of the ship', function (t) {
    request(app)
      .get('/rocket')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        t.error(err, 'No error');
        t.deepEqual(res.body, { caliber25: 0, caliber30: 0, caliber50: 0, shipstatus: 'empty', ready: false }, 'overall status');
        t.end();
      });
  });
