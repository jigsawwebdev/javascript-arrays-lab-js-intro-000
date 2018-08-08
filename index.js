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
