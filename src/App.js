import './App.css';
import React from 'react'

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
      <h1>ログイン</h1>
        <div>
          <form method="get" action="../src/receive_get.py">
            <input type="text" name="your_name" />
            <input type="submit" />
          </form>
        </div>
      </header>
    </div>
    )
  }
}

export default App
