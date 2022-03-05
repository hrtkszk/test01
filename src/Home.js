import React from 'react'
// import { Auth } from 'aws-amplify'
//import QRCode from 'qrcode.react'
// import { css } from 'glamor'
import UserContext from './UserContext'
import Container from './Container'
// import Button from './Button'
import './Message.css';
import ButtonSend from './ButtonSend';

class Home extends React.Component {
  state = {
    // qrCode: '',
    // challengeAnswer: '',
    // showPreferred: false,
    Messages: [],
    sendMessage: '',
    // image:'noImage'
  }
  static contextType = UserContext
  onChange = (key, value) => {
    //this.props.updateErrorMessage(null)
    this.setState({
      [key]: value
    })
  }
  // addTTOP = () => {
    // const { user } = this.context
    // Auth.setupTOTP(user).then((code) => {
    //   const authCode = "otpauth://totp/AWSCognito:"+ user.username + "?secret=" + code + "&issuer=AWSCognito";
    //   this.setState({
    //     qrCode: authCode,
    //     showPreferred: true
    //   })
    // });
  // }
  // setPreferredMFA = (authType) => {
    // const { user } = this.context
    // Auth.verifyTotpToken(user, this.state.challengeAnswer).then(() => {
    //   Auth.setPreferredMFA(user, authType)
    //     .then(data => console.log('data from verify...: ', data))
    //     .catch(err => console.log('error: ', err))
    // });
  // }

  sendMsg = () => {
    // const { user } = this.context
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"id":this.state.sendMessage})
    }
    console.log(requestOptions)
    // console.log(user.username)
    fetch("receive_get.php",requestOptions)
    .then((response)=> response.json())
    .then(result =>{
      console.log(result)
      this.setState({Messages:result.pythonout2})
    })
  }

  render() {
    // const isAuthenticated = this.context.user && this.context.user.username ? true : false
    if (this.state.Messages === []) {
      return (
        <Container>
        <div className="App">
          <h1>Welcome</h1>
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
        </Container>
      )
    } else {
        return (
          <Container>
          <div className="App">
            <h1>Welcome</h1>
            <div className="App-header">
              <ul>
                {this.state.Messages.map((Message, i) => {
                  return <li key={Message.ID}>{Message.ID}</li>;
                })}
              </ul>
            </div>
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
          </div>
          </Container>
        )
      }
    }

  //   <ul>
  //   {this.state.Messages.map((Message, i) => {
  //     return <li key={Message.message}>{Message.message}</li>;
  //   })}
  // </ul>
    // return (
    //   <Container>
    //     <h1>Welcome</h1>
        
    //     {
    //       isAuthenticated && (
    //         <>
    //           <Button
    //             title="Update TOTP"
    //             onClick={this.addTTOP}
    //           />
    //           <div {...css(styles.buttonContainer)}>
    //             {
    //               // (this.state.qrCode !== '') && (
    //               //   <div>
    //               //     <br />
    //               //     <QRCode value={this.state.qrCode} />
    //               //   </div>
    //               // )
    //             }
    //             {
    //               this.state.showPreferred && (
    //                 <div {...css(styles.buttonContainer)}>
    //                   <button
    //                     onClick={() => this.setPreferredMFA('TOTP')}
    //                     {...css(styles.button)}
    //                   >
    //                     <p>Prefer TOTP</p>
    //                   </button>
    //                   <button
    //                     onClick={() => this.setPreferredMFA('SMS')}
    //                     {...css(styles.button)}
    //                   >
    //                     <p>Prefer SMS</p>
    //                   </button>
    //                   <input
    //                     placeholder='TOTP Code'
    //                     onChange={e => this.setState({ challengeAnswer: e.target.value })}
    //                     {...css(styles.input)}
    //                   />
    //                 </div>
    //               )
    //             }
    //           </div>
    //         </>
    //       )
    //     }
    //   </Container>
    // )
  }

// const styles = {
//   buttonContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   button: {
//     cursor: 'pointer',
//     margin: 4,
//     border: '1px solid #ddd',
//     width: 225,
//     ':hover': {
//       backgroundColor: "rgba(0, 0, 0, .1)"
//     }
//   },
//   input: {
//     padding: 8,
//     height: 40,
//     width: 225,
//     border: '1px solid #ddd'
//   }
// }


export default Home