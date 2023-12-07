import { Game, Player, PlayerType } from '../../src';

it('should return the next player', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O));

  expect(game.currentPlayer.type).toBe(PlayerType.X);
  expect(game.nextRound().currentPlayer.type).toBe(PlayerType.O);
});

it('should finish the game with victory #1', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O))
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.inProgress).toBeFalsy();
  expect(game.result.xWins).toBeTruthy();
  expect(game.result.oWins).toBeFalsy();
  expect(game.player1.score).toBe(1);
  expect(game.player2.score).toBe(0);
});

it('should finish the game with victory #2', () => {
  const game = Game.create(new Player('P1', PlayerType.O), new Player('P2', PlayerType.X))
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.inProgress).toBeFalsy();
  expect(game.result.xWins).toBeTruthy();
  expect(game.result.oWins).toBeFalsy();
  expect(game.player1.score).toBe(0);
  expect(game.player2.score).toBe(1);
});

it.skip('should clear the game after a victory', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O))
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2)
    .clear();

  expect(game.result.inProgress).toBeTruthy();
  expect(game.player1.score).toBe(0);
  expect(game.player2.score).toBe(0);
});

it('should go to next round after a victory', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O))
    .addMove(0, 0)
    .addMove(1, 1)
    .addMove(0, 1)
    .addMove(1, 2)
    .addMove(0, 2)
    .nextRound();

  expect(game.result.inProgress).toBeTruthy();
  expect(game.player1.score).toBe(1);
  expect(game.player2.score).toBe(0);
  expect(game.currentPlayer.type).toBe(game.player2.type);
});

it('should switch player when clear the game', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O));
  expect(game.currentPlayer.type).toBe(game.player1.type);

  const newGame = game.clear();
  expect(newGame.currentPlayer.type).toBe(game.player2.type);
});

it('should switch player when to go to next round', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O)).nextRound();
  expect(game.currentPlayer.type).toBe(game.player2.type);
});

it('should ignore repetitive moves', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O)).addMove(0, 0);

  const newGame = game.addMove(0, 0);

  expect(game === newGame).toBeTruthy();
});

it('should ignore move from won game', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O))
    .addMove(1, 1)
    .addMove(0, 0)
    .addMove(1, 2)
    .addMove(0, 1)
    .addMove(2, 2)
    .addMove(0, 2)
    .addMove(2, 0);

  const newGame = game.addMove(2, 2);

  expect(game === newGame).toBeTruthy();
});

it('should generate a tied game', () => {
  const game = Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O))
    .addMove(0, 0)
    .addMove(0, 1)
    .addMove(0, 2)
    .addMove(1, 1)
    .addMove(1, 0)
    .addMove(1, 2)
    .addMove(2, 1)
    .addMove(2, 0)
    .addMove(2, 2);

  expect(game.result.finished).toBeTruthy();
  expect(game.result.tied).toBeTruthy();
});
