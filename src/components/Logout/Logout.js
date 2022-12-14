import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export const Logout = () => {
    const navigate = useNavigate();
    const { auth, onLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(auth.accessToken)
        .then(() => {
            onLogout();
            navigate('/');
        })
        .catch(() => {
            navigate('/');
        })
    });

    return null;
}