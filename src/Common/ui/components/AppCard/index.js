import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardBody, CardSubtitle, CardTitle, CardWrapper, Header } from './StyledComponents';
export const AppCard = ({ title, subtitle, children }) => {
    return (_jsxs(CardWrapper, { children: [title || subtitle ? (_jsxs(Header, { children: [title ? _jsx(CardTitle, { children: title }) : null, subtitle ? _jsx(CardSubtitle, { children: subtitle }) : null] })) : null, _jsx(CardBody, { children: children })] }));
};
