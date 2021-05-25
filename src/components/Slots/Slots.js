import React from 'react'
import Slot from '../Slot/Slot'
import "./Slots.css"

function Slots({ slots, row, currentRow, updateSlot }) {
  return (
    <div className="slots">
      {slots.map((value, col) => {
        return <Slot {...{
                key: `slot-${row}-${col}`,
                value,
                row,
                col,
                currentRow,
                updateSlot }} 
              />
      })}
    </div>
  )
}

export default Slots;