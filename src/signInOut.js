import { fakeAuthProvider } from "./auth/auth";

export function signInOut(setUser) {
    let signin = (newUser, callback) => {
        // let signin = (newUser: string, callback: VoidFunction) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        // let signout = (callback: VoidFunction) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };
    return { signin, signout };
}
