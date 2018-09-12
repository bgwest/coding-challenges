// array_reverse.js

// test arrays
var arr = [ 1, 2, 3, 4 ];
var newArr = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var newNewArr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", -1000];

// input any array to reverse the order
function reverseArray(input) {
  var opposite = 0;
  var stopWhen = (input.length / 2) - 1;
  var toMove;
  for ( let index = input.length - 1; index > stopWhen; index-- ) {
    toMove = input[opposite];
    input[opposite] = input[index];
    input[index] = toMove;
    opposite = opposite + 1;
  }
  return input;
}

reverseArray(newNewArr);
