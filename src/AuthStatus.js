import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
import { signInOut } from './signInOut';

// export function useAuth() {
//   return useContext(AuthContext);
// }
let { AuthInfo } = useContext(AuthContext);
export function AuthStatus() {
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
            signInOut.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
