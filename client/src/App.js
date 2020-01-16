import React, { useState, useEffect } from 'react';
import './App.css';
import { Display, Dashboard } from './components';

function App() {

  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)
  const [hits, setHits] = useState(0)

  const resetBoard = () => {
    setHits(0)
    setBalls(0)
    setStrikes(0)
  }

  useEffect(() => {
    if (balls >= 4) {
      resetBoard()
    }

    if (strikes >= 3) {
      resetBoard()
    }
  }, [balls, strikes, hits])

  return (
    <div className="App" data-testid="app">
      <Display balls={balls} strikes={strikes} />
      <Dashboard setStrikes={setStrikes} setBalls={setBalls} balls={balls} strikes={strikes} />
    </div>
  );
}

export default App;
