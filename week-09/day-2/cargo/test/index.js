'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('First test!', function (t) {
  t.end();
});

test('Correct pokemons returned', function (t) {
    request(app)
      .get('/api/pokemon')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        t.error(err, 'No error');
        t.equal(res.body.length, 4, 'Correct number of pokemons');
        t.equal(res.body[0].name, 'Pikachu', 'Correct name of first pokemon')
        t.end();
      });
  });