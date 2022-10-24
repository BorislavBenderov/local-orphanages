import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { auth } = useContext(AuthContext);

    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link to="/">Orphelp</Link>
            </h1>
            <nav>
                <Link to="/">Dashboard</Link>
                {auth.email
                    ? <div id="user">
                        <Link to="/myposts">My Posts</Link>
                        <Link to="/create">Create Post</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>}
            </nav>
        </header>

    );
}