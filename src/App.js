import './App.css';
import React from 'react';
import logo from './logo.svg';

function App() {
  // return (
  // <div className="App">
  //   <header className="App-header">
  //   <h1>ログイン</h1>
  //     <div>
  //       <form method="get" action="../src/receive_get.py">
  //         <input type="text" name="your_name" />
  //         <input type="submit" />
  //       </form>
  //     </div>
  //   </header>
  // </div>
  // )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
