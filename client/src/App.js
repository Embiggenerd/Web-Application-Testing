import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Display, Dashboard } from './components';

function App() {
  return (
    <div className="App" data-testid="app">
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
