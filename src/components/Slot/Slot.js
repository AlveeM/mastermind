import React from 'react'

function Slot() {
  const slotClass = `slot slot-option__${0} slot--active`;

  return (
    <div className={slotClass}></div>
  )
}

export default Slot