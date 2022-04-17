import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonSignOut from './ButtonSignOut'
import Container from './Container'
import { AuthContext } from '../index';

export function useAuth() {
  return useContext(AuthContext);
}
const Profile = () => {
  let AuthInfo = useAuth();
  const navigate = useNavigate();
  // const { AuthInfo } = useContext(AuthContext);
  const [AuthStat, setAuthStat] = useState(AuthInfo.isAuth);
  console.log(AuthInfo)
  console.log(AuthStat)

  const signOut = (callback) => {
    if (AuthStat) {
      AuthInfo.isAuth = false
      setAuthStat(AuthInfo.isAuth)
      console.log(AuthInfo)
      console.log(AuthStat)
      setTimeout(callback, 100);
    } else {
      AuthInfo.isAuth = true
      setAuthStat(AuthInfo.isAuth)
      console.log(AuthInfo)
      console.log(AuthStat)
      setTimeout(callback, 100);
    }
  }

  return (
    <Container>
      <h1>My Profile</h1>
      <ButtonSignOut
        title="Sign Out"
        onClick={() => signOut(() => navigate("/"))}
      />
    </Container>
  )
}

export default Profile;
