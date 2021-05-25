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
  const [gameCode, setGameCode] = useState(defaultCode);
  const [gameState, setGameState] = useState(defaultGameState);
  const {
    isPlaying,
    code,
    turn,
    rows,
    currentOption,
    currentRow,
    options,
    isWon
  } = gameState;

  function updateSlot(row, col) {
    if (row !== currentRow) return;
    const newRows = gameState.rows.slice();
    newRows[row].values[col] = currentOption;
    setGameState(prev => {
      return {
        ...prev,
        rows: newRows
      }
    })
  }

  const gameFuncs = {
    updateSlot,
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board gameState={gameState} gameFuncs={gameFuncs} />
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
      values: [-1, -1, -1, -1]
    })
  }
  return rows;
}