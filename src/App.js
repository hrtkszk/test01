import React, { useContext }  from 'react'
import {
  Routes,
  Route,
  useNavigate,
  // useLocation,
  Navigate,
  BrowserRouter
} from 'react-router-dom'
// import UserContext from './UserContext'

import Header from './Header'

import Authenticator from './auth/Authenticator'
import SignIn from './auth/SignIn'
import SignUpConfirmation from './auth/SignUpConfirmation'
import ForgotPasswordConfirmation from './auth/ForgotPasswordConfirmation'

import Home from './page/Home'
import MessageList from './page/MessageList'
import Message from './page/Message'
import Profile from './page/Profile'
import ProfileSearch from './page/ProfileSearch'
import Boshu from './page/Boshu'
import NoMatch from './page/NoMatch'
import { loginContext } from './index'

import { AuthProvider, AuthContext } from './AuthContext'

// function useAuth() {
//   return true;
// }

const App = () => {
  const { loginInfo } = useContext(loginContext);

  const PrivateRoute = ({ children }) => {
    // const auth = useAuth();
    console.log(loginInfo)
    return loginInfo.isAuth ?  children  : <Navigate to='/auth' />;
    // return children;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Header />
          <AuthStatus />
          <Routes>
            <Route path='/auth' element={<Authenticator />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/suc' element={<SignUpConfirmation />} />
            <Route path='/fpc' element={<ForgotPasswordConfirmation />} />
            <Route path='/' element={<Home />} />
            <Route path='/profilesearch'
              element={
                <PrivateRoute>
                  <ProfileSearch />
                </PrivateRoute>
              }
            />
            <Route path='/boshu'
              element={
                <PrivateRoute>
                  <Boshu />
                </PrivateRoute>
              }
            />
            <Route path='/messagelist'
              element={
                <PrivateRoute>
                  <MessageList />
                </PrivateRoute>
              }
            />
            <Route path='/message'
              element={
                <PrivateRoute>
                  <Message />
                </PrivateRoute>
              }
            />
            <Route path='/myprofile'
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NoMatch />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App;


function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
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
  let auth = useAuth();
  // let location = useLocation();
  console.log("Auth Required")
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // return <Navigate to="/login" state={{ from: location }} replace={true} />;
    console.log("not auth")
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  // let location = useLocation();
  let auth = useAuth();
  
  let from = "/protected";
  // let from = location.state?.from?.pathname || "/protected";

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

function ProtectedPage() {
  return <h3>Protected</h3>;
}