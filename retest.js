var test = require('tape');
var numberifier = require('./wordifier.js');

test('make single digit words into numbers', function (t) {
  t.plan(4)
  t.equal(numberifier(1), "one");
  t.equal(numberifier(2), "two");
  t.equal(numberifier(3), "three");
  t.equal(numberifier(4), "four");
})
test('make four digit words into numbers', function (t) {
  t.plan(3)
  t.equal(numberifier(2000), "two thousand");
  t.equal(numberifier(3000), "three thousand");
  t.equal(numberifier(4000), "four thousand");
})
test('make three digit words into numbers', function (t){
  t.plan(3)
  t.equal(numberifier(203), "two hundred three");
  t.equal(numberifier(300), "three hundred");
  t.equal(numberifier(400), "four hundred");
})
