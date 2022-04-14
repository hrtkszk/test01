// import React, { useState, createContext } from 'react';
import React, { createContext } from 'react';
// import { signInOut } from './signInOut';



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
export let AuthContext = createContext();
export function AuthProvider({ children }) {
  // function AuthProvider({ children }: { children: React.ReactNode }) {
  // let [user, setUser] = React.useState<any>(null);
//   let [user, setUser] = useState(null);

//   let { signin, signout } = signInOut(setUser);

//   let value = { user, signin, signout };
  let value = {'user':'test'};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

