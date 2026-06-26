import { useState } from 'react';
import { useAuthStore } from '../../data/stores/providers';
export const useLoginController = () => {
    const authStore = useAuthStore();
    const [username, setUsername] = useState('cineview');
    const [password, setPassword] = useState('CineView@123');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [authError, setAuthError] = useState('');
    const submitLogin = () => {
        let isValid = true;
        setUsernameError('');
        setPasswordError('');
        setAuthError('');
        if (!username.trim()) {
            setUsernameError('Username is required');
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        }
        if (!isValid) {
            return false;
        }
        const success = authStore.login(username, password);
        if (!success) {
            setAuthError('Invalid username or password');
        }
        return success;
    };
    return {
        username,
        password,
        usernameError,
        passwordError,
        authError,
        setUsername,
        setPassword,
        submitLogin,
    };
};
