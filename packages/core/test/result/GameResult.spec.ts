import { Cell, GameResult, PlayerType } from '../../src';

it('should create a empty result', () => {
  const game = new GameResult();

  expect(game.finished).toBeFalsy();
  expect(game.inProgress).toBeTruthy();
  expect(game.tied).toBeFalsy();
});

it('should create a tied result', () => {
  const tied = new GameResult([], true);

  expect(tied.finished).toBeTruthy();
  expect(tied.tied).toBeTruthy();
  expect(tied.inProgress).toBeFalsy();
});

it('should create a result with victory', () => {
  const c1 = new Cell(0, 0, PlayerType.X);
  const c2 = new Cell(0, 1, PlayerType.X);
  const c3 = new Cell(0, 2, PlayerType.X);

  const victory = new GameResult([c1, c2, c3]);

  expect(victory.finished).toBeTruthy();
  expect(victory.tied).toBeFalsy();
  expect(victory.hasCell(0, 0)).toBeTruthy();
  expect(victory.hasCell(1, 1)).toBeFalsy();
  expect(victory.xWins).toBeTruthy();
  expect(victory.oWins).toBeFalsy();
});
