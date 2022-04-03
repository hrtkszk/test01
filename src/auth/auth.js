/**
 * This represents some generic auth provider API, like Firebase.
 */
 const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
    // signin(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback) {
    // signout(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };
  
  export { fakeAuthProvider };
  