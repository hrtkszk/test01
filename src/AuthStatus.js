import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export function useAuth() {
  return React.useContext(AuthContext);
}
export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
