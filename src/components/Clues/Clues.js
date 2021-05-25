import React from 'react'
import Clue from '../Clue/Clue'
import "./Clues.css"

export default function Clues({ clues }) {
  return (
    <div className="clues">
      { clues.map((clue, i) => (
        <Clue key={`clue-${i}`} value={clue} />
      ))}
    </div>
  )
}
