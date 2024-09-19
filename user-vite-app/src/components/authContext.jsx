
import { createContext, useContext, useState } from 'react';
import { fakeAuthProvider } from './auth';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
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
