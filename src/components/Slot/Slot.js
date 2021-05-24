import React from 'react'
import "./Slot.css"

function Slot() {
  const slotClass = `slot slot--unselected slot--active`;

  return (
    <div className={slotClass}>0</div>
  )
}

export default Slot