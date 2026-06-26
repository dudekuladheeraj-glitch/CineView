import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { AppButton, AppInput } from '../../../../Common';
import { Container, CredentialsHint, ErrorText, PasswordError, PasswordInput, PasswordInputRow, PasswordLabel, PasswordWrapper, ToggleButton, } from './StyledComponents';
export const LoginForm = ({ username, password, usernameError, passwordError, authError, onUsernameChange, onPasswordChange, onSubmit, }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };
    return (_jsxs(Container, { onSubmit: handleSubmit, children: [_jsx(AppInput, { label: "Username", value: username, onChange: onUsernameChange, error: usernameError, placeholder: "Enter username", autoComplete: "username" }), _jsxs(PasswordWrapper, { children: [_jsx(PasswordLabel, { htmlFor: "password", children: "Password" }), _jsxs(PasswordInputRow, { children: [_jsx(PasswordInput, { id: "password", type: showPassword ? 'text' : 'password', value: password, onChange: (e) => onPasswordChange(e.target.value), "$hasError": Boolean(passwordError), placeholder: "Enter password", autoComplete: "current-password" }), _jsx(ToggleButton, { type: "button", onClick: () => setShowPassword((prev) => !prev), "aria-label": showPassword ? 'Hide password' : 'Show password', children: showPassword ? '🙈' : '👁' })] }), passwordError && _jsx(PasswordError, { children: passwordError })] }), _jsx(AppButton, { type: "submit", fullWidth: true, children: "Login" }), authError && _jsx(ErrorText, { children: authError }), _jsxs(CredentialsHint, { children: ["Demo Credentials", _jsx("br", {}), "Username: ", _jsx("strong", { children: "cineview" }), _jsx("br", {}), "Password: ", _jsx("strong", { children: "CineView@123" })] })] }));
};
