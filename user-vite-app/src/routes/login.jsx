import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../components/authContext'

export default function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
    let from = location.state.from.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();


        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    }
    return (<div>
        <p>Must log in to view the page at {from}</p>
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input name="username" type="text" />
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
    );
}