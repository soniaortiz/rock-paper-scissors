import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Options} from './Components/Options'
import {SelectedOption} from './Components/SelectedOption'

function App() {

  const [playerOptions, setPlayersOptions] = useState([-1, -1])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload.
           */}
           Want to play?
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* {playerOptions[0]} */}
      <SelectedOption playerOptions={playerOptions}/>
      <Options setPlayersOptions={setPlayersOptions}/>
    </div>
  );
}

export default App;
