// interface AuthContextType {
//     user: any;
//     signin: (user: String, callback: VoidFunction) => void;
//     signout: (callback: VoidFunction) => void;
// }

import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from './auth'

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>
    }

    return (
        <p>
            Welcome {auth.user}
            <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}>
                Sign out
            </button>
        </p>
    )
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
