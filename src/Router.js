import React from 'react'
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router
} from 'react-router-dom'
// import UserContext from './UserContext'
import Header from './Header'

import Authenticator from './Authenticator'
import Home from './Home'
import MessageList from './MessageList'
import Message from './Message'
import Profile from './Profile'
import SignUpConfirmation from './SignUpConfirmation'
import ForgotPasswordConfirmation from './ForgotPasswordConfirmation'
import ProfileSearch from './ProfileSearch'
import Boshu from './Boshu'

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to='/auth' />;
}

function useAuth() {
  return true;
}

const Routeres = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path='/auth' element={<Authenticator />} />
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
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  </Router>
)

export default Routeres
