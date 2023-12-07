import { Board, PlayerType } from '../../src';
import VerticalChecker from '../../src/result/VerticalChecker';

it('should finish with victory from player O', () => {
  const board = Board.empty().set(0, 0, PlayerType.O).set(1, 0, PlayerType.O).set(2, 0, PlayerType.O);

  const result = new VerticalChecker().check(board);

  expect(result.finished).toBeTruthy();
  expect(result.oWins).toBeTruthy();
  expect(result.xWins).toBeFalsy();
});

it('should continues in progress without victory', () => {
  const board = Board.empty().set(0, 0, PlayerType.X).set(1, 0, PlayerType.X).set(2, 0, PlayerType.O);

  const result = new VerticalChecker().check(board);

  expect(result.inProgress).toBeTruthy();
  expect(result.finished).toBeFalsy();
  expect(result.xWins).toBeFalsy();
  expect(result.oWins).toBeFalsy();
});
