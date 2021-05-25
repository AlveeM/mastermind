import React from 'react'
import "./Row.css"
import Clues from '../Clues/Clues'
import Slots from '../Slots/Slots'

function Row({
  row,
  slots,
  clues,
  currentRow,
  updateSlot,
  checkGuess,
  isPlaying
}) {
  return (
    <tr className="row">
      <td>
        <Clues clues={clues} currentRow={currentRow} />
      </td>
      <td>
        <Slots {...{
          slots,
          row,
          currentRow,
          updateSlot
        }} />
      </td>
      <td>
        <button
          className="row-btn-check"
          disabled={!isPlaying || row !== currentRow}
          onClick={checkGuess}
        >
          check
        </button>
      </td>
    </tr>
  )
}

export default Row; 