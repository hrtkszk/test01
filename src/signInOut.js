import { useContext } from 'react';
import { AuthContext } from './AuthContext';
// import { fakeAuthProvider } from "./auth/auth";


// export function signInOut(setUser) {
export function signInOut() {
    let { AuthInfo } = useContext(AuthContext);
    // let signin = (newUser, callback) => {
    //     // let signin = (newUser: string, callback: VoidFunction) => {
    //     return fakeAuthProvider.signin(() => {
    //         setUser(newUser);
    //         callback();
    //     });
    // };
    // let signin = (newUser, callback) => {
    let signin = (newUser, callback) => {
        // let signin = (newUser: string, callback: VoidFunction) => {
        AuthInfo.user = newUser;
        console.log(AuthInfo.user)
        // isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    };

    // let signout = (callback) => {
    //     // let signout = (callback: VoidFunction) => {
    //     return fakeAuthProvider.signout(() => {
    //         setUser(null);
    //         callback();
    //     });
    // };
    let signout = (callback) => {
        // let signout = (callback: VoidFunction) => {
        AuthInfo.user = null;
        console.log(AuthInfo.user)
        // isAuthenticated = false;
        setTimeout(callback, 100);
    };
    return { signin, signout };
}
