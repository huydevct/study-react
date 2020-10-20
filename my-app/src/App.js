import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppItem from './components/AppItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppItem title="mua bim bim" />
        <AppItem title="da bong" />
        <AppItem title="choi bida" />
        <AppItem title="di ve" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
