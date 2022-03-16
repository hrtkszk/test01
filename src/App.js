import './App.css';
import React from 'react';
//import ButtonSend from './ButtonSend';
import Router from './Router'
// import UserContext from './UserContext'

class App extends React.Component {
  // state = {
  //   currentUser: {},
  //   isLoaded: false
  // }
  // componentDidMount() {
  //   this.updateCurrentUser()
  // }
  // updateCurrentUser = async (user) => {
  //   if (user) {
  //     this.setState({ currentUser: user })
  //     return
  //   }
  //   try {
  //     //const user = await getCurrentUserSession()
  //     this.setState({ currentUser: user, isLoaded: true })
  //   } catch (err) {
  //     this.setState({ currentUser: null, isLoaded: true })
  //   }
  // }
  render() {
    return (
      // <UserContext.Provider value={{
      //   user: this.state.currentUser,
      //   updateCurrentUser: this.updateCurrentUser,
      //   isLoaded: this.state.isLoaded
      // }}>
        <div className="App">
          <Router />
        </div>
      // </UserContext.Provider>
    );
  }
}
  // state = {
  //   sendMessage: '',
  //   pythonout: ''
  // }
  // onChange = (key, value) => {
  //   this.setState({
  //     [key]: value
  //   })
  // }

  // sendMsg = () => {
  //   const requestOptions ={
  //     method: 'POST',
  //     headers:{'Content-Type': 'application/json'},
  //     body: JSON.stringify({"text":this.state.sendMessage})
  //   }
  //   fetch("receive_get.php",requestOptions)
  //   .then(response=> response.json())
  //   .then(responseJson =>{
  //     console.log(responseJson)
  //     this.setState({pythonout:responseJson.pythonout})
  //     this.setState({sendMessage:""})
  //   })
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App">
  //         <footer className="App-footer">
  //           <input
  //             id="sendMessage"
  //             onChange={evt => this.onChange('sendMessage', evt.target.value)}
  //             className="input"
  //             placeholder='メッセージ'
  //           />
  //           <ButtonSend
  //             title="Send"
  //             onClick={this.sendMsg}
  //           />
  //         </footer>
  //       </div>
  //       <div className="App-header">
  //           {this.state.pythonout}
  //       </div>
  //     </div>
  //   )
  // }

export default App;
