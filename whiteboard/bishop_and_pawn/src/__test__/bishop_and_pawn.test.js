'use strict';

const bishopAndPawn = require('../lib/bishop_and_pawn');

describe('testing bishop_and_pawn.js', () => {
  test('since game is dynamic, testing for all normal game functionality', () => {
    // return new chessboard
    let chessBoard = bishopAndPawn.functions.createChessBoard();

    // place pieces
    chessBoard = bishopAndPawn.functions.placePiece(chessBoard, 'P');
    chessBoard = bishopAndPawn.functions.placePiece(chessBoard, 'B');

    // find pieces
    const myPawn = bishopAndPawn.functions.findPiece(chessBoard, 'P');
    const myBishop = bishopAndPawn.functions.findPiece(chessBoard, 'B');

    // get strike method
    const myStrikeMethod = bishopAndPawn.functions
      .determineStrikeMethod(chessBoard, myPawn, myBishop);
    console.log(myStrikeMethod);

    const attemptedStrike = bishopAndPawn.functions
      .attemptStrike(chessBoard, myPawn, myBishop, myStrikeMethod);
    console.log(attemptedStrike);
    if (!myStrikeMethod && !attemptedStrike) {
      expect(attemptedStrike).toEqual(false);
    }
    if (myStrikeMethod && attemptedStrike) {
      expect(attemptedStrike.attempt).toEqual(true);
    }
    if (myStrikeMethod && !attemptedStrike) {
      expect(attemptedStrike).toEqual(false);
    }
  });
});
