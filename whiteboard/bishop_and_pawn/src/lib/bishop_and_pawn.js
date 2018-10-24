'use strict';

// export for testing and porting
const twoPieceChess = {};

// define global board size
const lastRow = 8;
const lastCol = 8;

// export global vars
twoPieceChess.globals = {};
twoPieceChess.globals.lastRow = lastRow;
twoPieceChess.globals.lastCol = lastCol;

// create chess board
function createChessBoard() {
  const chessBoard = [];
  // build chess board
  for (let row = 0; row <= lastRow - 1; row++) {
    chessBoard.push([]);
    for (let col = 0; col <= lastCol - 1; col++) {
      chessBoard[row][col] = [`row${row}-col${col}`];
    }
  }
  return chessBoard;
}

// Place Pawn and Bishop randomly
function placePiece(board, piece) {
  // Also ensure pawn and bishop do not get randomly placed out of bounds
  //   by using lastRow and lastCol definitions
  const randomRow = Math.floor(Math.random() * lastRow);
  // console.log(randomRow);
  const randomCol = Math.floor(Math.random() * lastCol);
  // console.log(randomCol);
  // push 'Piece' - Pawn or Bishop
  board[randomRow][randomCol] = piece;
  return board;
}

// find Pawn and Bishop
function findPiece(board, piece) {
  let rowCol = {};
  for (let row = 0; row <= lastRow - 1; row++) {
    for (let col = 0; col <= lastCol - 1; col++) {
      if (board[row][col] === piece) {
        // equivalent to: { 'col': col, 'row': row };
        rowCol = { row, col };
      }
    }
  }
  return rowCol;
}

// determine if bishop can legally strike pawn
function determineStrikeMethod(board, myPawn, myBishop) {
  // console.log(myPawn);
  // console.log(myBishop);
  let chosenMethod = {};
  const strikeMethods = {
    NW: '--',
    NE: '-+',
    SE: '++',
    SW: '+-',
  };
  if (myPawn.row < myBishop.row && myPawn.col < myBishop.col) {
    chosenMethod = strikeMethods.NW;
  }
  if (myPawn.row < myBishop.row && myPawn.col > myBishop.col) {
    chosenMethod = strikeMethods.NE;
  }
  if (myPawn.row > myBishop.row && myPawn.col > myBishop.col) {
    chosenMethod = strikeMethods.SE;
  }
  if (myPawn.row > myBishop.row && myPawn.col < myBishop.col) {
    chosenMethod = strikeMethods.SW;
  }
  if (myPawn.row === myBishop.row || myPawn.col === myBishop.col) {
    // a strike is returned false if Pawn is on same row or col as bishop
    chosenMethod = false;
  }
  return chosenMethod;
}

function attemptStrike(board, pawn, bishop, strikeMethod) {
  if (!strikeMethod) {
    // if strikeMethod is false, return false
    return false;
  }
  let { row, col } = bishop;
  const attack = {};

  switch (strikeMethod) {
    case '--':
      // NW
      while (row >= 0 && col >= 0) {
        if (board[row][col] === 'P') {
          attack.attempt = true;
          attack.direction = 'NW';
          attack.pawnPos = pawn;
          attack.bishopPos = bishop;
        }
        row -= 1;
        col -= 1;
      }
      if (attack.attempt) {
        return attack;
      } // else
      return false;
    case '-+':
      // NE
      while (row >= 0 && col <= lastCol - 1) {
        if (board[row][col] === 'P') {
          attack.attempt = true;
          attack.direction = 'NE';
          attack.pawnPos = pawn;
          attack.bishopPos = bishop;
        }
        row -= 1;
        col += 1;
      }
      if (attack.attempt) {
        return attack;
      } // else
      return false;
    case '++':
      // SE
      while (row <= lastRow - 1 && col <= lastCol - 1) {
        if (board[row][col] === 'P') {
          attack.attempt = true;
          attack.direction = 'SE';
          attack.pawnPos = pawn;
          attack.bishopPos = bishop;
        }
        row += 1;
        col += 1;
      }
      if (attack.attempt) {
        return attack;
      } // else
      return false;
    case '+-':
      // SW
      while (row <= lastRow - 1 && col >= 0) {
        if (board[row][col] === 'P') {
          attack.attempt = true;
          attack.direction = 'SW';
          attack.pawnPos = pawn;
          attack.bishopPos = bishop;
        }
        row += 1;
        col -= 1;
      }
      if (attack.attempt) {
        return attack;
      } // else
      return false;
    default:
      return 'something went wrong.';
  }
}

// setup exports for twoPieceChess functions
twoPieceChess.functions = {};
twoPieceChess.functions.createChessBoard = createChessBoard;
twoPieceChess.functions.placePiece = placePiece;
twoPieceChess.functions.findPiece = findPiece;
twoPieceChess.functions.determineStrikeMethod = determineStrikeMethod;
twoPieceChess.functions.attemptStrike = attemptStrike;

// all comments below are for testing functionality
// there are also extra notes about running these functions

// return new chessboard
// let chessBoard = createChessBoard();

// place pieces
// chessBoard = placePiece(chessBoard, 'P');
// chessBoard = placePiece(chessBoard, 'B');

// find pieces
// const myPawn = findPiece(chessBoard, 'P');
// const myBishop = findPiece(chessBoard, 'B');

// get strike method
// const myStrikeMethod = determineStrikeMethod(chessBoard, myPawn, myBishop);
// console.log(myStrikeMethod);

//   attempt strike will return false if row OR col is the same
//                                or...
//   if an attack was not able to be attempted
//   (aka piece was not diagonal from Bishops position)
// const attemptedStrike = attemptStrike(chessBoard, myPawn, myBishop, myStrikeMethod);
// console.log(attemptedStrike);

// if myStrikeMethod && attempted Strike are false, then row && || col were the same value
// if only attemptedStrike turns false, then attack was not valid

module.exports = twoPieceChess;
