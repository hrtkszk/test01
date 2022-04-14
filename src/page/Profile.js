import React, { useContext, useState } from 'react'
import ButtonSignOut from './ButtonSignOut'
import Container from './Container'
import { AuthContext } from '../index';

export function useAuth() {
  return useContext(AuthContext);
}
const Profile = () => {
  let AuthInfo = useAuth();
  // const { AuthInfo } = useContext(AuthContext);
  const [AuthStat, setAuthStat] = useState(AuthInfo.isAuth);
  console.log(AuthInfo)
  console.log(AuthStat)

  const signOut = () => {
    if (AuthStat) {
      AuthInfo.isAuth = false
      setAuthStat(AuthInfo.isAuth)
      console.log(AuthInfo)
      console.log(AuthStat)
    } else {
      AuthInfo.isAuth = true
      setAuthStat(AuthInfo.isAuth)
      console.log(AuthInfo)
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
