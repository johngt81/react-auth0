import { useState } from 'react'
import { AuthContext } from './authContext'

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        }
        );
    }

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    }

    let value = {
        user,
        signin,
        signout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, fakeAuthProvider };

