import React from 'react'
import Slots from '../Slots/Slots'

function Board({ gameState, gameFuncs }) {
  const { currentRow } = gameState;
  const { updateSlot } = gameFuncs;
  console.log(gameState.rows[9].values)
  return (
    <table className="board">
      <tbody>
        <tr>
          <td>
            <Slots {...{
                row: 9,
                slots: gameState.rows[9].values,
                currentRow,
                updateSlot }} 
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Board;