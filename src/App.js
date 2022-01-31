import './App.css';
import React from 'react'
import { css } from 'glamor'

class App extends React.Component {
  state = {
    username: '',
    password: ''
  }
  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  signIn = () => {
    
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
      <h1>ログイン</h1>
        <div {...css(styles.formContainer)}>
          <form method="get" action="../src/receive_get.py">
            <input type="text" name="your_name" />
            <input type="submit" />
          </form>
          <input
            onChange={evt => this.onChange('username', evt.target.value)}
            {...css(styles.input)}
            placeholder='ユーザー名'
            
          />
          <input
            type='password'
            onChange={evt => this.onChange('password', evt.target.value)}
            {...css(styles.input)}
            placeholder='パスワード'
          />
          <div {...css(styles.button)} onClick={this.signIn}>
            <p {...css(styles.buttonText)}>ログイン</p>
          </div>
        </div>
      </header>
    </div>
    )
  }
}

const styles = {
  signInHeader: {
    textAlign: 'left',
    margin: '0px 0px 20px'
  },
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
export default App
