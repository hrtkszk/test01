// import React, { useContext, useState } from 'react'
// import { css } from 'glamor'
// // import { Auth } from 'aws-amplify'
// // import UserContext from './UserContext'
// import { loginContext } from '../index'
// import {
//   useNavigate
// } from 'react-router-dom'

// const [userName, setUserName] = useState("");
// const [passWord, setPassWord] = useState("");
// const { loginInfo } = useContext(loginContext);
// const [AuthStat, setAuthStat] = useState(loginInfo.isAuth);
// let navigate = useNavigate();

// const SignIn = () => {
//   // state = {
//   //   username: '',
//   //   password: '',
//   //   showConfirmation: false,
//   //   user: {},
//   //   authCode: ''
//   // }
//   // static contextType = UserContext
//   // const onChange = (key, value) => {
//   //   this.setState({
//   //     [key]: value
//   //   })
//   // }

//     // const { history } = this.props
//     // const { updateCurrentUser } = this.context
//     // Auth.signIn(this.state.username, this.state.password)
//     //   .then(user => {
//     //     if (!user.signInUserSession) {
//     //       this.setState({ user, showConfirmation: true })
//     //     } else {
//     //       updateCurrentUser(user)
//     //       //history.push('/profile')
//     //     }
//     //     window.location.href = "/myprofile"
//     //   })
//     //   .catch(err => {
//     //     console.log('error signing in...: ', err)
//     //     this.props.updateErrorMessage(err.message)
//     //   })

//   // confirmSignIn = () => {
//     // const { history } = this.props
//     // Auth.confirmSignIn(this.state.user, this.state.authCode, this.state.user.challengeName)
//     //   .then(user => {
//     //     //history.push('/')
//     //     window.location.href = "/myprofile"
//     //   })
//     //   .catch(err => console.log('error confirming signing in...: ', err))
//   // }


//   return (
//     <div {...css(styles.container)}>
//       {/* {
//         !this.state.showConfirmation && (
//           <> */}
//           <h1>ログイン</h1>
//           <div {...css(styles.formContainer)}>
            
//             <input
//               onChange={evt => setUserName(evt.target.value)}
//               {...css(styles.input)}
//               placeholder='ユーザー名'
              
//             />
//             <input
//               type='password'
//               onChange={evt => setPassWord(evt.target.value)}
//               {...css(styles.input)}
//               placeholder='パスワード'
//             />
//             <div {...css(styles.button)} onClick={signIn}>
//               <p {...css(styles.buttonText)}>ログイン</p>
//             </div>
//           </div>
//           {/* </>
//         )
//       } */}
//       {/* {
//         this.state.showConfirmation && (
//           <div {...css(styles.formContainer)}>
//             <h2 {...css(styles.signInHeader)}>Sign In</h2>
//             <input
//               onChange={evt => this.onChange('authCode', evt.target.value)}
//               {...css(styles.input)}
//               placeholder='認証コード'
//             />
//             <div {...css(styles.button)} onClick={this.confirmSignIn.bind(this)}>
//               <p {...css(styles.buttonText)}>ログイン</p>
//             </div>
//           </div>
//         )
//       } */}
//     </div>
//   )
// }

// function signIn() {

//   if (userName === "test" && passWord === "1234") {
//     loginInfo.isAuth = true
//     setAuthStat(loginInfo.isAuth)
//     console.log(AuthStat)
//     console.log(loginInfo)
//     navigate("/message")
//   } else {
//     console.log(AuthStat)
//     console.log(loginInfo)
//   }
// }

// const styles = {
//   signInHeader: {
//     textAlign: 'left',
//     margin: '0px 0px 20px'
//   },
//   button: {
//     padding: '10px 60px',
//     backgroundColor: '#ffb102',
//     marginTop: 10,
//     marginBottom: 10,
//     cursor: 'pointer',
//     borderRadius: '30px',
//     ':hover': {
//       backgroundColor: '#ffbb22'
//     }
//   },
//   buttonText: {
//     margin: 0,
//     color: 'white'
//   },
//   input: {
//     height: 40,
//     marginBottom: '10px',
//     border: 'none',
//     outline: 'none',
//     borderBottom: '2px solid #ffb102',
//     fontSize: '16px',
//     '::placeholder': {
//       color: 'rgba(0, 0, 0, .3)'
//     }
//   },
//   container: {
//     flex: 1,
//     paddingTop: '15px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   formContainer: {
//     padding: 20,
//     width: 400,
//     display: 'flex',
//     flexDirection: 'column',
//     boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
//     borderRadius: 20
//   }
// }

// export default SignIn
import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";

export default function App() {
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

const Layout = () => {
  return (
    <div>
      {console.log("in Layout")}
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

// interface AuthContextType {
//   user: any;
//   signin: (user: string, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

// let AuthContext = React.createContext<AuthContextType>(null!);
let AuthContext = React.createContext()

function AuthProvider({ children }) {
// function AuthProvider({ children }: { children: React.ReactNode }) {
  // let [user, setUser] = React.useState<any>(null);
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
  // let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
  // let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  console.log("at AuthStatus")
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

function RequireAuth({ children }) {
// function RequireAuth({ children }: { children: JSX.Element }) {
  // let auth = useAuth();
  // let location = useLocation();

  // if (!auth.user) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    // let username = formData.get("username") as string;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
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

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
