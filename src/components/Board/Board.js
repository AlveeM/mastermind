import React from 'react'
import "./Board.css"
import Row from '../Row/Row';
import Slots from '../Slots/Slots'
import Options from '../Options/Options';

function Board({ gameState, gameFuncs }) {
  const { currentRow, rows, options, isPlaying, code } = gameState;
  const { updateSlot, checkGuess } = gameFuncs;

  return (
    <table className="board">
      <tbody>
        <tr>
          <td></td>
          <td>
            <Slots {...{
                row: -1,
                slots: isPlaying ? [-1, -1, -1, -1] : code }} />
          </td>
        </tr>
        {
          rows.map((row, i) => (
            <Row {...{
              key: `row-${i}`,
              row: i,
              slots: row.values,
              clues: row.clues,
              updateSlot,
              checkGuess,
              currentRow,
              isPlaying
            }} />
          ))
        }
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