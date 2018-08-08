// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten() {
  kittens.push('Ralph');
}
destructivelyAppendKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten() {
  kittens.unshift('Bob');
}
destructivelyPrependKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
destructivelyRemoveLastKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
destructivelyRemoveFirstKitten()

var kittens = ['Milo', 'Otis', 'Garfield'];
var moreKittens;
function appendKitten() {
  moreKittens = kittens.splice(3, 1, 'Broom');
  return moreKittens
}
appendKitten()
