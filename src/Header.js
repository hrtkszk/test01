import React, { useContext, useState } from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'
// import UserContext from './UserContext'
import ButtonSignOut from './page/ButtonSignOut'
// import { Auth } from 'aws-amplify'
import { loginContext } from './index';


const Header = () => {
  const { loginInfo } = useContext(loginContext);
  const [AuthStat, setAuthStat] = useState(loginInfo.isAuth);
  console.log(loginInfo)
  console.log(AuthStat)
// class Header extends React.Component {
  // static contextType = UserContext
  // render() {
    // const isAuthenticated = this.context.user && this.context.user.username ? true : false
    // const isLoaded = this.context.isLoaded

  const signOut = () => {
    if (AuthStat) {
      loginInfo.isAuth = false
      setAuthStat(loginInfo.isAuth)
      console.log(loginInfo)
      console.log(AuthStat)
    } else {
      loginInfo.isAuth = true
      setAuthStat(loginInfo.isAuth)
      console.log(loginInfo)
      console.log(AuthStat)
    }
  }
  
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.navContainer)}>
        {
          AuthStat ? (
          // isLoaded ? isAuthenticated ? (
            <>
              <Link to='/' {...css(styles.link)}>
                <p {...css(styles.navItem)}>ホーム</p>
              </Link>
              <Link to='/profilesearch' {...css(styles.link)}>
                <p {...css(styles.navItem)}>検索</p>
              </Link>
              <Link to='/boshu' {...css(styles.link)}>
                <p {...css(styles.navItem)}>掲示板</p>
              </Link>
              <Link to='/messagelist' {...css(styles.link)}>
                <p {...css(styles.navItem)}>メッセージリスト</p>
              </Link>
              <Link to='/message' {...css(styles.link)}>
                <p {...css(styles.navItem)}>メッセージ</p>
              </Link>
              <Link to='/myprofile' {...css(styles.link)}>
                <p {...css(styles.navItem)}>プロフィール</p>
              </Link>
              <ButtonSignOut
                title="変更"
                onClick={signOut}
              />
            </>
          ) : (
            <>
              <Link to='/' {...css(styles.link)}>
                <p {...css(styles.navItem)}>サイト名</p>
              </Link>
              <Link to='/signin' {...css(styles.link)}>
                <p {...css(styles.navItem)}>ログイン</p>
              </Link>
              <ButtonSignOut
                title="変更"
                onClick={signOut}
              />
            </>
          )
        }

      </div>
    </div>
  )
  // }
}
// function signOut() {
//   console.log("test Sign out")
  // Auth.signOut()
  //   .then(() => {
  //     //this.props.history.push('/auth')
  //     window.location.href = "/auth"
  //   })
  //   .catch(() => console.log('error signing out...'))
// }

const styles = {
    title: {
      fontWeight: 300,
      color: 'white',
      margin: 0,
      textAlign: 'left',
      marginLeft: 10,
    },
    navContainer: {
      display: 'flex',
      flex: 1,
      paddingLeft: 10,
      marginTop: 0
    },
    link: {
      textDecoration: 'none',
    },
    navItem: {
      marginLeft: 20,
      color: 'white',
      borderBottom: '2px solid transparent',
      ':hover': {
        borderBottom: '2px solid white'
      }
    },
    container: {
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#FF9900',
      display: 'flex'
    }
  }
  
  export default Header
  