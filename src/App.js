import React, { useEffect } from 'react';
import './App.css';

import { generateIntegerCode } from './api/codeGenerator'

function App() {
  useEffect(() => {
    generateIntegerCode().then(console.log)
  }, []) 

  return (
    <div className="App">
      <h1>Mastermind</h1>
    </div>
  );
}

export default App;
