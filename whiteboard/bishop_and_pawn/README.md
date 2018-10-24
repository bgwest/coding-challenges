# coding-challenge-32: bishop_and_pawn
## Visual Algo
![CF](./src/lib/assests/bishop_and_pawn.jpg)

[![Build Status](https://travis-ci.com/bgwest/coding-challenges.svg?branch=bishop_and_pawn)](https://travis-ci.com/bgwest/coding-challenges)

## Problem

2-d array with a bishop and a pawn, but an unknown location of their pieces. Find their pieces and also determine if the bishop is in a striking position.

### Running

Examples

[x] setup game
```
// return new chessboard
let chessBoard = bishopAndPawn.functions.createChessBoard
// place pieces
chessBoard = bishopAndPawn.functions.placePiece(chessBoard, 'P');
chessBoard = bishopAndPawn.functions.placePiece(chessBoard, 'B');
// find pieces
const myPawn = bishopAndPawn.functions.findPiece(chessBoard, 'P');
const myBishop = bishopAndPawn.functions.findPiece(chessBoard, 'B');
```

[x] play game
```
// get strike method
const myStrikeMethod = bishopAndPawn.functions.determineStrikeMethod(chessBoard, myPawn, myBishop);
const attemptedStrike = bishopAndPawn.functions.attemptStrike(chessBoard, myPawn, myBishop, myStrikeMethod);
```

### Tests Performed with Jest
###### bishop_and_pawn.test.js
- since game is dynamic, test is for all normal game functionality

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/bishop_and_pawn');

## Built With

* Node
* Eslint
* jest

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 
