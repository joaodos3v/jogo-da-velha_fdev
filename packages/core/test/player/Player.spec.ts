import { Player, PlayerType } from '../../src';

it('should return the same instance when add 0 score', () => {
  const player = new Player('P1', PlayerType.O);

  expect(player.addScore(0) === player).toBeTruthy();
});

it('should return a different instance when add score', () => {
  const player = new Player('P1', PlayerType.O);

  expect(player.addScore(1) === player).toBeFalsy();
});

it('should add 10 points to the player', () => {
  const player = new Player('P1', PlayerType.O).addScore(10);

  expect(player.name).toBe('P1');
  expect(player.type).toBe(PlayerType.O);
  expect(player.score).toBe(10);
});

it('should clear player with score', () => {
  let player = new Player('P1', PlayerType.O, 100);
  expect(player.score).toBe(100);

  player = player.clear();
  expect(player.name).toBe('P1');
  expect(player.type).toBe(PlayerType.O);
  expect(player.score).toBe(0);
});
