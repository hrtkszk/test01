import React, { useContext } from 'react';
import {
  // useLocation,
  Navigate
} from 'react-router-dom';
// import { AuthContext } from './AuthContext';
import { AuthContext } from './index';

export function useAuth() {
  return useContext(AuthContext);
}
export function RequireAuth({ children }) {
  // function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  // let location = useLocation();
  console.log("Auth Required");
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // return <Navigate to="/login" state={{ from: location }} replace={true} />;
    console.log("not auth");
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
