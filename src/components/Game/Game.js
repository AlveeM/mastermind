import React, { useState, useEffect } from 'react'
import "./Game.css"
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
  const [gameState, setGameState] = useState(defaultGameState);

  useEffect(() => {
    generateIntegerCode()
      .then(randomCode => {
        setGameState(prev => {
          return {
            ...prev,
            code: randomCode
          }
        })
      })
  }, [])

  function updateSlot(row, col) {
    if (row !== gameState.currentRow) return;
    const newRows = gameState.rows.slice();
    newRows[row].values[col] = gameState.currentOption;
    setGameState(prev => {
      return {
        ...prev,
        rows: newRows
      }
    })
  }

  function updateCurrentOption(option) {
    setGameState({ ...gameState, currentOption: option });
  }

  function updateClues(row, correctVal, correctPos) {
    console.log({row, correctVal, correctPos, updateClues: "UPDATE CLUES"})
    const newRows = gameState.rows.slice();
    const clues = newRows[row].clues;
    let curIdx = 0;

    for (let i = 0; i < correctPos.length; i++) {
      clues[curIdx] = 2;
      curIdx++;
    }

    for (let i = 0; i < correctVal.length; i++) {
      clues[curIdx] = 1;
      curIdx++;
    }

    setGameState(prev => {
      return {
        ...prev,
        rows: newRows
      }
    })
  }

  function checkGuess() {
    const curVals = gameState.rows[gameState.currentRow].values;
    
    if (curVals.indexOf(-1) !== -1) return;

    const correctVal = [];
    const correctPos = [];
    const code = gameState.code;

    for (let i = 0; i < code.length; i++) {
      const slotVal = curVals[i];
      const correctValIdx = correctVal.indexOf(slotVal);
      const correctPosIdx = correctPos.indexOf(slotVal);
      const isCorrectVal = correctValIdx !== -1;
      const isCorrectPos = correctPosIdx !== -1;

      if (slotVal === code[i]) {
        correctPos.push(slotVal);
        if(isCorrectVal) {
          correctVal.splice(correctValIdx, 1);
        }
      } else if (code.indexOf(slotVal) !== -1
              && !isCorrectVal
              && !isCorrectPos) {
        correctVal.push(slotVal);
      }
    }

    if (correctPos.length === 4) {
      updateClues(gameState.currentRow, correctVal, correctPos);
      setGameState(prev => {
        return {
          ...prev,
          isPlaying: false,
          isWon: true
        }
      })
      return;
    } else {
      updateClues(gameState.currentRow, correctVal, correctPos);
    }

    if (gameState.currentRow - 1 < 0) {
      setGameState(prev => {
        return {
          ...prev,
          isPlaying: false
        }
      })
      return;
    }

    setGameState(prev => {
      return {
        ...prev,
        currentRow: prev.currentRow - 1
      }
    })
  }

  function resetGame() {
    setGameState({
      ...defaultGameState,
      rows: getDefaultRows()
    });
  }

  const gameFuncs = {
    updateSlot,
    updateCurrentOption,
    checkGuess,
  }

  return (
    <div className="game">
      <Board gameState={gameState} gameFuncs={gameFuncs} />
      <button className="game-reset-btn" onClick={resetGame}>New Game</button>
    </div>
  )
}

export default Game;

function getDefaultRows() {
  const rows = [];
  for (let i = 0; i <= 9; i++) {
    rows.push({
      clues: [0, 0, 0, 0],
      values: [-1, -1, -1, -1]
    })
  }
  return rows;
}