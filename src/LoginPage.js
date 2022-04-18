// import React from 'react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
import { AuthContext } from './index';
import { SignIn } from './SignIn';

// export function useAuth() {
//   return useContext(AuthContext);
// }

export function useAuth() {
  return useContext(AuthContext);
}

export function LoginPage() {
  let AuthInfo = useAuth();
  let navigate = useNavigate();
  // let location = useLocation();
  // let auth = useAuth();

  // const SignIn = (newUser, callback) => {
  //   // let signin = (newUser: string, callback: VoidFunction) => {
  //   AuthInfo.user = newUser;
  //   console.log(AuthInfo.user)
  //   // isAuthenticated = true;
  //   setTimeout(callback, 100); // fake async
  // }
  
  let from = "/protected";
  // let from = location.state?.from?.pathname || "/protected";
  function handleSubmit(event) {
    // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    // let username = formData.get("username") as string;
    SignIn(username, () => navigate(from));
    // SignIn(username, () => {
    //   // Send them back to the page they tried to visit when they were
    //   // redirected to the login page. Use { replace: true } so we don't create
    //   // another entry in the history stack for the login page.  This means that
    //   // when they get to the protected page and click the back button, they
    //   // won't end up back on the login page, which is also really nice for the
    //   // user experience.
    //   navigate(from, { replace: true });
    // });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
