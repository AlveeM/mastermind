import React from 'react'
import "./Clue.css"

export default function Clue({ value }) {
  return (
    <div className={`clue clue--${value}`}></div>
  )
}
