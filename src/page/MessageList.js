import { useState } from 'react';
// import React from 'react'
//import { css } from 'glamor'
import Container from './Container'
// import UserContext from './UserContext'

const MessageList = () => {
  const [messageList, setMessageList] = useState("test");
// class Private extends React.Component {
//   state = {
//     MessageList: []
//   }

  // static contextType = UserContext



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


  // if (messageList === "") {
  //   return (
  //     <Container>
  //       <h1>メッセージリスト</h1>
  //       <div className="App">
  //         {() => {
  //           setMessageList("test")
  //           console.log(messageList)
  //         }}
  //       </div>
  //     </Container>
  //   )
  // } else {
    return (
      <Container>
        <h1>メッセージリスト
          {/* {() => setMessageList("test1")} */}
          {console.log("再描写1")}
          {console.log(messageList)}
          {messageList}
        </h1>
        <div className="App">
          <div className="App-header">
            {() => {
              setMessageList("test1")
              console.log("再描写3")
              console.log(messageList)
            }}
            {/* <ul>
              {this.state.MessageList.map((Message, i) => {
                return <li key={Message.sendTo}>{Message.nickname}{Message.age}{Message.latestMessage}{Message.date}</li>;
              })}
            </ul> */}
          </div>
        </div>
      </Container>
    )
  // }
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
