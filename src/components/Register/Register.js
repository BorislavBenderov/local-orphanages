import * as authService from '../../services/authService';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const { onLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);

        const email = formdata.get('email');
        const password = formdata.get('password');
        const repeatPassword = formdata.get('repeatPassword');

        if (password !== repeatPassword) {
            return;
        }

        authService.register(email, password)
        .then(userdata => {
            onLogin(userdata);
            navigate('/');
        })

    }

    return (
        <section id="register-page" className="auth">
            <form id="register" onSubmit={onSubmit}>
                <h1 className="title">Register</h1>
                <article className="input-group">
                    <label htmlFor="register-email">Email: </label>
                    <input type="email" id="register-email" name="email" />
                </article>
                <article className="input-group">
                    <label htmlFor="register-password">Password: </label>
                    <input type="password" id="register-password" name="password" />
                </article>
                <article className="input-group">
                    <label htmlFor="repeat-password">Repeat Password: </label>
                    <input type="password" id="repeat-password" name="repeatPassword" />
                </article>
                <input type="submit" className="btn submit-btn" defaultValue="Register" />
            </form>
        </section>

    );
}