import React, { useContext }  from 'react'
import {
  Routes,
  Route,
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
// import { loginContext } from './index'

// import { AuthProvider } from './AuthContext'
import { ProtectedPage } from './ProtectedPage'
import { LoginPage } from './LoginPage'
import AuthStatus from './AuthStatus'
import { RequireAuth } from './RequireAuth'

// function useAuth() {
//   return true;
// }

const App = () => {
  // const { loginInfo } = useContext(loginContext);

  const PrivateRoute = ({ children }) => {
    // const auth = useAuth();
    // console.log(loginInfo)
    return children;
    // return loginInfo.isAuth ?  children  : <Navigate to='/auth' />;
    // return children;
  }

  return (
    <BrowserRouter>
      <div className="App">
        {/* <AuthProvider> */}
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
        {/* </AuthProvider> */}
      </div>
    </BrowserRouter>
  )
}

export default App;




