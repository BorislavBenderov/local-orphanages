import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
    const { onLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        
        const email = formdata.get('email');
        const password = formdata.get('password');

        authService.login(email,password)
        .then(userdata => {
            onLogin(userdata);
            navigate('/');
        })

    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <h1 className="title">Login</h1>
                <article className="input-group">
                    <label htmlFor="login-email">Email: </label>
                    <input type="email" id="login-email" name="email" />
                </article>
                <article className="input-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" />
                </article>
                <input type="submit" className="btn submit-btn" defaultValue="Log In" />
            </form>
        </section>

    );
}