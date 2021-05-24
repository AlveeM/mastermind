import React, { useState, useEffect } from 'react'
import { generateIntegerCode } from '../../api/codeGenerator'
import Board from '../Board/Board'

const defaultCode = [-1, -1, -1, -1];
const defaultOptions = [0, 1, 2, 3, 4, 5, 6, 7];
const defaultRows = getDefaultRows();
const defaultGameState = {
  isPlaying: true,
  code: defaultCode,
  turn: 0,
  rows: defaultRows,
  currentOption: 0,
  currentRow: 9,
  options: defaultOptions,
  isWon: false
}

function Game() {
  const [code, setCode] = useState(defaultCode);
  const [gameState, setGameState] = useState(defaultGameState);

  return (
    <div className="game">
      <div className="game-board">
        <Board gameState={gameState} />
      </div>
    </div>
  )
}

export default Game;

function getDefaultRows() {
  const rows = [];
  for (let i = 0; i <= 9; i++) {
    rows.push({
      clues: [-1, -1, -1, -1],
      inputs: [-1, -1, -1, -1]
    })
  }
  return rows;
}