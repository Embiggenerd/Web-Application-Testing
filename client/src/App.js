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

  const handleAddFoul = () => {
    if (strikes <= 1) {
      setStrikes(strikes + 1)
    }
  }

  const handleAddBall = () => {
    setBalls(balls + 1)
  }

  const handleAddHit = () => {
    setHits(balls + 1)
  }

  const handleAddStrike = () => {
    setStrikes(strikes + 1)
  }

  useEffect(() => {
    if (balls >= 4) {
      resetBoard()
    }

    if (strikes >= 3) {
      resetBoard()
    }

    if (hits >= 1) {
      resetBoard()
    }

  }, [balls, strikes, hits])

  return (
    <div className="App" data-testid="app">
      <Display balls={balls} strikes={strikes} />
      <Dashboard handleAddFoul={handleAddFoul} handleAddBall={handleAddBall} handleAddStrike={handleAddStrike} handleAddHit={handleAddHit} />
    </div>
  );
}

export default App;
