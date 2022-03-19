import React from 'react'
import {
  Routes,
  Route,
  // Navigate,
  BrowserRouter
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
import NoMatch from './NoMatch'

function PrivateRoute({ children }) {
  // const auth = useAuth();
  // return auth ?  children  : <Navigate to='/auth' />;
  return children;
}

// function useAuth() {
//   return true;
// }

const App = () => (
  <BrowserRouter>
    <div className="App">

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
      <Header />
      </div>
  </BrowserRouter>
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



