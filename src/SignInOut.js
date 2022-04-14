import { useContext } from 'react';
// import { AuthContext } from './AuthContext';
import { AuthContext } from './index';
// import { fakeAuthProvider } from "./auth/auth";

export function useAuth() {
    return useContext(AuthContext);
}
// export function signInOut(setUser) {
// export function signInOut() {

export function SignIn (newUser, callback) {
    let AuthInfo = useAuth();
    // let signin = (newUser: string, callback: VoidFunction) => {
    AuthInfo.user = newUser;
    console.log(AuthInfo.user)
    // isAuthenticated = true;
    setTimeout(callback, 100); // fake async
};
function SignOut (callback) {
    let AuthInfo = useAuth();
    // let signout = (callback: VoidFunction) => {
    AuthInfo.user = null;
    console.log(AuthInfo.user)
    // isAuthenticated = false;
    setTimeout(callback, 100);
}
export default SignOut

// const SignInOut = () => {
//     // const { AuthInfo } = useContext(AuthContext);
//     let AuthInfo = useAuth();
//     // let signin = (newUser, callback) => {
//     //     // let signin = (newUser: string, callback: VoidFunction) => {
//     //     return fakeAuthProvider.signin(() => {
//     //         setUser(newUser);
//     //         callback();
//     //     });
//     // };
//     // let signin = (newUser, callback) => {
//     const signin = (newUser, callback) => {
//         // let signin = (newUser: string, callback: VoidFunction) => {
//         AuthInfo.user = newUser;
//         console.log(AuthInfo.user)
//         // isAuthenticated = true;
//         setTimeout(callback, 100); // fake async
//     };

//     // let signout = (callback) => {
//     //     // let signout = (callback: VoidFunction) => {
//     //     return fakeAuthProvider.signout(() => {
//     //         setUser(null);
//     //         callback();
//     //     });
//     // };
//     const signout = (callback) => {
//         // let signout = (callback: VoidFunction) => {
//         AuthInfo.user = null;
//         console.log(AuthInfo.user)
//         // isAuthenticated = false;
//         setTimeout(callback, 100);
//     };
//     return {signin, signout}
// }

// export default SignInOut