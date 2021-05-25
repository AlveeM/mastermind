import React from 'react'
import "./Board.css"
import Row from '../Row/Row';
import Slots from '../Slots/Slots'
import Option from '../Option/Option'
import Options from '../Options/Options';

function Board({ gameState, gameFuncs }) {
  const { currentRow, rows, options, currentOption } = gameState;
  const { updateSlot, updateCurrentOption } = gameFuncs;

  return (
    <table className="board">
      <tbody>
        <tr>
          <td></td>
          <td>
            <Slots {...{
                row: 9,
                slots: rows[9].values,
                currentRow,
                updateSlot }} 
            />
          </td>
        </tr>
        <Row {...{
          row: 8,
          slots: rows[8].values,
          clues: rows[8].clues,
          updateSlot,
          currentRow,
        }} />
        <tr>
          <td></td>
          <td>
            <div className="board-options">
              <Options {...{
                options,
                gameState,
                gameFuncs
              }} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Board;