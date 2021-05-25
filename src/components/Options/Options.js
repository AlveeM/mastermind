import React from 'react'
import "./Options.css"
import Option from '../Option/Option';

function Options({ options, gameState, gameFuncs }) {
  const { currentOption } = gameState;
  const { updateCurrentOption } = gameFuncs;

  return (
    <div className="options">
      <div className="options-grid">
        { options.map(option => (
          <Option {...{
            key: `option-${option}`,
            option,
            currentOption,
            updateCurrentOption,
          }} />
        ))}
      </div>
    </div>
  )
}

export default Options;