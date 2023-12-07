import { PlayerType } from '../../src';
import Board from '../../src/game/Board';

it('should create an empty board', () => {
  const board = Board.empty();

  expect(board.cols).toBe(3);
  expect(board.rows).toBe(3);
  expect(board.isFull()).toBeFalsy();
});

it('should return all cells from the board', () => {
  const board = Board.empty();

  expect(board.items.length).toBe(9);
});

it('should mark a cell by row and column', () => {
  const board = Board.empty().set(1, 1, PlayerType.X);

  expect(board.isNotEmpty(1, 1)).toBeTruthy();
  expect(board.isEmpty(1, 1)).toBeFalsy();
});

it('should return empty to nonexistent cell', () => {
  const board = Board.empty();

  expect(board.isNotEmpty(10, 1)).toBeFalsy();
  expect(board.isEmpty(10, 1)).toBeTruthy();
});

it('should ignore to mark a nonexistent cell', () => {
  const board = Board.empty();
  const sameBoard = board.set(10, 1, PlayerType.X);

  expect(board === sameBoard).toBeTruthy();
});
