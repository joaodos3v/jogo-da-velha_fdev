import Board from '../game/Board';
import CellsChecker from './CellsChecker';
import GameResult from './GameResult';
import ResultChecker from './ResultChecker';

export default class DiagonalChecker implements ResultChecker {
  check(board: Board): GameResult {
    const diagonalOne = new CellsChecker([
      [0, 0],
      [1, 1],
      [2, 2],
    ]).check(board);
    const diagonalTwo = new CellsChecker([
      [0, 2],
      [1, 1],
      [2, 0],
    ]).check(board);

    return diagonalOne.finished ? diagonalOne : diagonalTwo;
  }
}
