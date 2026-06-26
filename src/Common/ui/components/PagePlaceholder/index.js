import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Wrapper, Title, Description } from './StyledComponents';
export const PagePlaceholder = ({ title, description }) => {
    return (_jsxs(Wrapper, { children: [_jsx(Title, { children: title }), description ? _jsx(Description, { children: description }) : null] }));
};
