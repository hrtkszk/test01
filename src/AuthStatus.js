import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
import { AuthContext } from './index';
import { SignOut } from './SignInOut';

export function useAuth() {
  return useContext(AuthContext);
}
const AuthStatus = () => {
// export function AuthStatus() {
  // const { AuthInfo } = useContext(AuthContext);
  let AuthInfo = useAuth();
  const navigate = useNavigate();
  console.log(AuthInfo)

  if (!AuthInfo.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {AuthInfo.user}!{" "}
      <button
        onClick={() => {
            SignOut(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
export default AuthStatus
  