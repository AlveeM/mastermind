import React, { useEffect } from 'react';
import './App.css';

import { generateCode } from './api/codeGenerator'

function App() {
  useEffect(() => {
    const codeConfig = {
      num: 4,
      min: 0,
      max: 7
    };
    generateCode(codeConfig).then(console.log)
  }, []) 

  return (
    <div className="App">
      <h1>Mastermind</h1>
    </div>
  );
}

export default App;
