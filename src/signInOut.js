// import { fakeAuthProvider } from "./auth/auth";

export function signInOut(setUser) {
    // let signin = (newUser, callback) => {
    //     // let signin = (newUser: string, callback: VoidFunction) => {
    //     return fakeAuthProvider.signin(() => {
    //         setUser(newUser);
    //         callback();
    //     });
    // };
    let signin = (newUser, callback) => {
        // let signin = (newUser: string, callback: VoidFunction) => {
        setUser(newUser);
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
        setUser(null);
        // isAuthenticated = false;
        setTimeout(callback, 100);
    };
    return { signin, signout };
}
