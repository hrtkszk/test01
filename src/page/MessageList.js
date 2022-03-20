import { useState } from 'react';
// import React from 'react'
//import { css } from 'glamor'
import Container from './Container'
// import UserContext from './UserContext'

const MessageList = () => {
  const [messageList, setMessageList] = useState();
// class Private extends React.Component {
//   state = {
//     MessageList: []
//   }

  // static contextType = UserContext


  setMessageList("");
  // componentDidMount()
    // const { user, isLoaded } = this.context
    // console.log(this.context)
    // if (isLoaded === false) {
    //   console.log(this.context)
    //   window.location.href = "/"
    // } else {
      // const requestOptions ={
      //   method: 'POST',
      //   headers:{'Content-Type': 'application/json'},
      //   body: JSON.stringify({"id":user.username})
      // }
      // console.log(user.username)
      // fetch("https://j0xl3jx013.execute-api.ap-northeast-1.amazonaws.com/dev",requestOptions)
      // .then(response=> response.json())
      // .then(result =>{
      //   console.log(result)
      //   this.setState({MessageList:result.body})
      // })
    // }
    //this.interval = setInterval(()=>this.componentDidMount(), 30000);

  // render() {
  // console.log(this.state.MessageList)

  if (messageList = "") {
    return (
      <Container>
        <h1>メッセージリスト</h1>
        <div className="App">
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <h1>メッセージリスト</h1>
        <div className="App">
          <div className="App-header">
            {/* <ul>
              {this.state.MessageList.map((Message, i) => {
                return <li key={Message.sendTo}>{Message.nickname}{Message.age}{Message.latestMessage}{Message.date}</li>;
              })}
            </ul> */}
          </div>
        </div>
      </Container>
    )
  }
}

// const styles = {
//   button: {
//     padding: '10px 60px',
//     backgroundColor: '#ffb102',
//     marginTop: 10,
//     marginBottom: 10,
//     cursor: 'pointer',
//     borderRadius: '30px',
//     ':hover': {
//       backgroundColor: '#ffbb22'
//     }
//   },
//   buttonText: {
//     margin: 0,
//     color: 'white'
//   },
//   input: {
//     height: 40,
//     marginBottom: '10px',
//     border: 'none',
//     outline: 'none',
//     borderBottom: '2px solid #ffb102',
//     fontSize: '16px',
//     '::placeholder': {
//       color: 'rgba(0, 0, 0, .3)'
//     }
//   },
//   container: {
//     flex: 1,
//     paddingTop: '15px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   formContainer: {
//     padding: 20,
//     width: 400,
//     display: 'flex',
//     flexDirection: 'column',
//     boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
//     borderRadius: 20
//   }
// }

export default MessageList
