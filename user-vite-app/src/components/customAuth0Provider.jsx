import { Auth0Provider } from '@auth0/auth0-react'

export function CustomAuth0Provider({ children }) {
    return (
        <Auth0Provider
            domain=""
            clientId=""
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            {children}
        </Auth0Provider>
    );
}