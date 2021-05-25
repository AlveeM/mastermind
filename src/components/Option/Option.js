import React from 'react'
import "./Option.css"

export default function Option({ option, currentOption, updateCurrentOption }) {
  function handleOptionClick() {
    updateCurrentOption(option);
  }

  return (
    <div 
      className={`option ${currentOption === option ? 'option--active' : null}`}
      onClick={handleOptionClick}
    >
      <p>{option}</p>
    </div>
  )
}
