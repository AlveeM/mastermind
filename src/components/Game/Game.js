import React, { useState, useEffect } from 'react'
import { generateIntegerCode } from '../../api/codeGenerator'
import Board from '../Board/Board'

function Game() {  
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

export default Game;