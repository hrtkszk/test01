import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import SignInOut from './SignInOut';

// export function useAuth() {
//   return useContext(AuthContext);
// }
const AuthStatus = () => {
// export function AuthStatus() {
  const { AuthInfo } = useContext(AuthContext);
//   let auth = useAuth();
  const navigate = useNavigate();
  console.log(AuthInfo.user)

  if (!AuthInfo.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {AuthInfo.user}!{" "}
      <button
        onClick={() => {
            SignInOut.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
export default AuthStatus
  