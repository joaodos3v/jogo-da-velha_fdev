import { Board, PlayerType } from '../../src';
import DiagonalChecker from '../../src/result/DiagonalChecker';

it('should finish with victory from player X for diagonal one', () => {
  const board = Board.empty().set(0, 0, PlayerType.X).set(1, 1, PlayerType.X).set(2, 2, PlayerType.X);

  const result = new DiagonalChecker().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeTruthy();
  expect(result.oWins).toBeFalsy();
});

it('should finish with victory from player X for diagonal two', () => {
  const board = Board.empty().set(0, 2, PlayerType.X).set(1, 1, PlayerType.X).set(2, 0, PlayerType.X);

  const result = new DiagonalChecker().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.xWins).toBeTruthy();
  expect(result.oWins).toBeFalsy();
});

it('should continues in progress without victory', () => {
  const board = Board.empty().set(0, 0, PlayerType.X).set(1, 1, PlayerType.X).set(2, 2, PlayerType.O);

  const result = new DiagonalChecker().check(board);

  expect(result.inProgress).toBeTruthy();
  expect(result.finished).toBeFalsy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
