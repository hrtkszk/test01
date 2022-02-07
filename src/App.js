import './App.css';
import React from 'react';
import ButtonSend from './ButtonSend';

class App extends React.Component {
  state = {
    sendMessage: '',
    receivedMessage: ''
  }
  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  sendMsg = () => {
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"text":this.state.sendMessage})
    }
    fetch("receive_get.php",requestOptions)
    .then(response=> response.json())
    .then(responseJson =>{
      console.log(responseJson)
      //this.componentDidMount()
      this.setState({receivedMessage:responseJson.message})
      this.setState({sendMessage:""})
      console.log(this.state.sendMessage)
      //this.render()
    })
  }
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
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div>
  //         <form method="post" action="receive_get.php">
  //           <input type="text" name="message" placeholder="メッセージ" />
  //           <input type="submit" />
  //         </form>
  //       </div>
  //     </header>
  //   </div>
  // );
  render() {
    return (
      <div className="App">
        <div className="App">
          <footer className="App-footer">
            <input
              id="sendMessage"
              onChange={evt => this.onChange('sendMessage', evt.target.value)}
              className="input"
              placeholder='メッセージ'
            />
            <ButtonSend
              title="Send"
              onClick={this.sendMsg}
            />
          </footer>
        </div>
        <div className="App-header">
            {this.state.receivedMessage}
        </div>
      </div>
    )
  }
}


export default App;
