import { useState } from 'react'
import { AuthContext } from './authContext'
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

function AuthProvider({ children }) {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        user
    } = useAuth0();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        if (isAuthenticated && user) {
            setAuthUser(user.name);
        } else {
            setAuthUser(null);
        }

    }, [isAuthenticated, user]);

    let signin = () => {
        loginWithRedirect();
    }

    let signout = async (callback) => {
        await logout({ returnTo: window.location.origin });
        callback();
    }

    let value = {
        user: authUser,
        signin,
        signout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>);
}

export { AuthProvider };

