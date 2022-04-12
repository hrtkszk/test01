import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import SignInOut from './SignInOut';

// export function useAuth() {
//   return useContext(AuthContext);
// }

export function AuthStatus() {
  let { AuthInfo } = useContext(AuthContext);
//   let auth = useAuth();
  let navigate = useNavigate();

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
