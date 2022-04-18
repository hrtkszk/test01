import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
import { AuthContext } from './index';
// import SignOut from './SignOut';

export function useAuth() {
  return useContext(AuthContext);
}

const AuthStatus = () => {
// export function AuthStatus() {
  // const { AuthInfo } = useContext(AuthContext);
  let AuthInfo = useAuth();
  const navigate = useNavigate();
  // console.log(AuthInfo)

  const SignOut = (callback) => {
    // let signout = (callback: VoidFunction) => {
    AuthInfo.user = null;
    console.log(AuthInfo.user)
    // isAuthenticated = false;
    setTimeout(callback, 100);
  }

  if (!AuthInfo.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {AuthInfo.user}!{" "}
      <button
        // onClick={() => {
        //     SignOut(() => navigate("/"));
        // }}
        onClick={() => SignOut(() => navigate("/"))}
      >
        Sign out
      </button>
    </p>
  );
}
export default AuthStatus
  