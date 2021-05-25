import React from 'react'
import Row from '../Row/Row';
import Slots from '../Slots/Slots'

function Board({ gameState, gameFuncs }) {
  const { currentRow, rows } = gameState;
  const { updateSlot } = gameFuncs;

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
      </tbody>
    </table>
  )
}

export default Board;