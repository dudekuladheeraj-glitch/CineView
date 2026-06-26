import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { useLoginController } from '../controllers/useLoginController';
import { Brand, CardContainer, Description, PageContainer, Title, } from './StyledComponents';
const LoginPageComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const from = state?.from?.pathname ?? '/';
    const { username, password, usernameError, passwordError, authError, setUsername, setPassword, submitLogin, } = useLoginController();
    const handleSubmit = () => {
        const success = submitLogin();
        if (success) {
            navigate(from, { replace: true });
        }
    };
    return (_jsx(PageContainer, { children: _jsxs(CardContainer, { children: [_jsx(Brand, { children: "CineView" }), _jsx(Title, { children: "Welcome Back" }), _jsx(Description, { children: "Track movies, discover TV shows, build watchlists and explore everything you love about movies and TV shows." }), _jsx(LoginForm, { username: username, password: password, usernameError: usernameError, passwordError: passwordError, authError: authError, onUsernameChange: setUsername, onPasswordChange: setPassword, onSubmit: handleSubmit })] }) }));
};
export const LoginPage = observer(LoginPageComponent);
