
import { useAuth } from './authstatus'
import { useLocation, Navigate } from 'react-router-dom'

export default function RequireAuth({ children }) {

    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
