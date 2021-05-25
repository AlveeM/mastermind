import React from 'react'
import Clues from '../Clues/Clues'
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
        <Clues clues={clues} />
      </td>
      <td>
        <Slots {...{
          slots,
          clues,
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