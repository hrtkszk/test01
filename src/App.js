import React, { createContext } from 'react'
import {
  Routes,
  Route,
  // Navigate,
  BrowserRouter
} from 'react-router-dom'
// import UserContext from './UserContext'

import Header from './Header'

import Authenticator from './auth/Authenticator'
import SignUpConfirmation from './auth/SignUpConfirmation'
import ForgotPasswordConfirmation from './auth/ForgotPasswordConfirmation'

import Home from './page/Home'
import MessageList from './page/MessageList'
import Message from './page/Message'
import Profile from './page/Profile'
import ProfileSearch from './page/ProfileSearch'
import Boshu from './page/Boshu'
import NoMatch from './page/NoMatch'

function PrivateRoute({ children }) {
  // const auth = useAuth();
  // return auth ?  children  : <Navigate to='/auth' />;
  return children;
}

// function useAuth() {
//   return true;
// }

const fruits = ['Apple', 'Orange', 'Banana'];
export const FruitContext = createContext();

const App = () => (
  <FruitContext.Provider value={{ fruits }}>
  <BrowserRouter>
    <div className="App">
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
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  </BrowserRouter>
  </FruitContext.Provider>
)

export default App;


// import './App.css';
// import React from 'react';
// import Router from './Router'
// class App extends React.Component {
//   render() {
//     return (
//         <div className="App">
//           <Router />
//         </div>
//     );
//   }
// }
// export default App;



// import './App.css';
// import React from 'react';
//import ButtonSend from './ButtonSend';
// import Router from './Router'
// import UserContext from './UserContext'

// class App extends React.Component {
  // state = {
  //   currentUser: {},
  //   isLoaded: false
  // }
  // componentDidMount() {
  //   this.updateCurrentUser()
  // }
  // updateCurrentUser = async (user) => {
  //   if (user) {
  //     this.setState({ currentUser: user })
  //     return
  //   }
  //   try {
  //     //const user = await getCurrentUserSession()
  //     this.setState({ currentUser: user, isLoaded: true })
  //   } catch (err) {
  //     this.setState({ currentUser: null, isLoaded: true })
  //   }
  // }
  // render() {
  //   return (
      // <UserContext.Provider value={{
      //   user: this.state.currentUser,
      //   updateCurrentUser: this.updateCurrentUser,
      //   isLoaded: this.state.isLoaded
      // }}>
        // <div className="App">
        //   <Router />
        // </div>
      // </UserContext.Provider>
//     );
//   }
// }

// export default App;



