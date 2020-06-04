import React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import { ReactComponent as UserIcon } from './assets/accountbox.svg';
import Header from './components/header.js';

function App() {
  return (
    <div>
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

const modernFunction = () => {

};

export default App;
