import { useRef } from 'react';
// import React from 'react'
import { css } from 'glamor'
import Container from './Container'
// import UserContext from './UserContext'

const Private = () => {
  const inputRef = useRef();
// class Private extends React.Component {
  // const [message, setMessage] = useState();
  // const [receiverID, setReceiverID] = useState();
  // state = {
  //   message: '',
  //   receiverID: ''
  // }

  const inputValue = e => {
    // evt => setMessage(evt.target.value)
    text = e.target.value;
  };

  const sendMsg = () => {
    // console.log("message: " + message);
    text = "";
    inputRef.current.value = "";
    // var docClient = new AWS.DynamoDB.DocumentClient();
    // var params = {
    //     TableName: Chatting001,
    //     Item:{
    //          identityId: identityId, // ★prime partition key
    //          email: _self.state.email,
    //          username: _self.state.username,
    //          filename: filepath,
    //          thumbnail: thumbnail,
    //          type: fileType,
    //          title: title,
    //          story: story,
    //          imageOverwrite: _self.state.imageOverwrite,
    //          mapUse: _self.state.mapUse,
    //          position: _self.state.position,
    //          uploadTime: uploadTime, // ★prime & secondary sort key
    //          uploadDate: uploadDate,
    //          partitionYear: partitionYear, //★secondary partition key
    //          refCounter: 0
    //     }
    // };
    // docClient.put(params, function(err, data) {
    //     if(err) {
    //         console.log("Err: table put :" +err);
    //     } else {
    //         console.log("Success: table put ok");
    //     }
    // });
  }

  // onChange = (key, value) => {
  //   // this.props.updateErrorMessage(null)
  //   [key](value)
  //   // this.setState({
  //   //   [key]: value
  //   // })
  // }
  // static contextType = UserContext
  // render() {
  return (
    <Container>
      <h1>メッセージ</h1>
      <output id="testoutput2"></output>
      <div {...css(styles.container)}>
      {
        <div {...css(styles.formContainer)}>
          <input
            ref={inputRef}
            type="text"
            onChange={inputValue}
            {...css(styles.input)}
            placeholder='メッセージ'
          />
          <div {...css(styles.button)} onClick={() => sendMsg()}>
            <p {...css(styles.buttonText)}>送信</p>
          </div>
        </div>
      }
    </div>
    </Container>
  )
  // }
}

const styles = {
  button: {
    padding: '10px 60px',
    backgroundColor: '#ffb102',
    marginTop: 10,
    marginBottom: 10,
    cursor: 'pointer',
    borderRadius: '30px',
    ':hover': {
      backgroundColor: '#ffbb22'
    }
  },
  buttonText: {
    margin: 0,
    color: 'white'
  },
  input: {
    height: 40,
    marginBottom: '10px',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #ffb102',
    fontSize: '16px',
    '::placeholder': {
      color: 'rgba(0, 0, 0, .3)'
    }
  },
  container: {
    flex: 1,
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formContainer: {
    padding: 20,
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
    borderRadius: 20
  }
}

export default Private
