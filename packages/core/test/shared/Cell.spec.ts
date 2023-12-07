import { Cell, PlayerType } from '../../src';

it('should create a filled cell', () => {
  const cell = new Cell(0, 2, PlayerType.X);

  expect(cell.row).toBe(0);
  expect(cell.col).toBe(2);
  expect(cell.type).toBe(PlayerType.X);
  expect(cell.isEmpty()).toBeFalsy();
  expect(cell.isNotEmpty()).toBeTruthy();
});

it('should create an empty cell', () => {
  const cell = new Cell(1, 1);

  expect(cell.row).toBe(1);
  expect(cell.col).toBe(1);
  expect(cell.type).toBeNull();
  expect(cell.isEmpty()).toBeTruthy();
  expect(cell.isNotEmpty()).toBeFalsy();
});

it('should transform a empty cell into a filled', () => {
  const emptyCell = new Cell(1, 1);
  expect(emptyCell.type).toBeNull();

  const cell = emptyCell.markWith(PlayerType.X);
  expect(cell.type).toBe(PlayerType.X);
});

it('should ignore mark in a filled cell', () => {
  const cell = new Cell(0, 2).markWith(PlayerType.O);
  const sameCell = cell.markWith(PlayerType.X);

  expect(sameCell.type).toBe(PlayerType.O);
  expect(cell === sameCell).toBeTruthy();
});
