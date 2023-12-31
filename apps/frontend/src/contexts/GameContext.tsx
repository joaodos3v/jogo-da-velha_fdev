'use client';
import { Board, Game, GameResult, Player, PlayerType } from 'core';
import { createContext, useState } from 'react';

interface GameContextProps {
  player1: Player;
  player2: Player;
  currentPlayer: Player;
  ties: number;
  board: Board;
  result: GameResult;
  addMove: (row: number, col: number) => void;
  restart: () => void;
  clear: () => void;
}

const GameContext = createContext<GameContextProps>({} as any);

export function GameProvider(props: any) {
  const [game, setGame] = useState<Game>(Game.create(new Player('P1', PlayerType.X), new Player('P2', PlayerType.O)));

  function addMove(row: number, col: number) {
    setGame(game.addMove(row, col));
  }

  function restart() {
    setGame(game.nextRound());
  }

  function clear() {
    setGame(game.clear());
  }

  return (
    <GameContext.Provider
      value={{
        player1: game.player1,
        player2: game.player2,
        currentPlayer: game.currentPlayer,
        ties: game.ties,
        board: game.board,
        addMove,
        result: game.result,
        restart,
        clear,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContext;
