import React from 'react'
import Slots from '../Slots/Slots'
import "./Row.css"

function Row({
  row,
  slots,
  clues,
  currentRow,
  updateSlot,
}) {
  return (
    <tr className="row">
      <td>
        Clues
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
          disabled={row !== currentRow}
        >
          Check
        </button>
      </td>
    </tr>
  )
}

export default Row; 