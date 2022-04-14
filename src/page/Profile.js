import React, { useContext, useState } from 'react'
import ButtonSignOut from './ButtonSignOut'
import Container from './Container'
import { AuthContext } from '../index';

const Profile = () => {
  const { loginInfo } = useContext(AuthContext);
  const [AuthStat, setAuthStat] = useState(loginInfo.isAuth);
  console.log(loginInfo)
  console.log(AuthStat)

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
    <Container>
      <h1>My Profile</h1>
      <ButtonSignOut
                title="Sign Out"
                onClick={signOut}
              />
    </Container>
  )
}

export default Profile;
