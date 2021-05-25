import React, { useState } from 'react'
import "./Slot.css"

function Slot({ row, col, value, currentRow, updateSlot}) {
  let slotClass = `slot slot--active`;

  if (value > -1) {
    slotClass += ' slot--selected';
  }

  function selectSlot() {
    if (row >= 0) {
      updateSlot(row, col);
    }
  }

  return (
    <div className={slotClass} onClick={selectSlot}>
      {value >= 0 ? value : undefined}
    </div>
  )
}

export default Slot