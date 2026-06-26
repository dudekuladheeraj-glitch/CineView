import { jsx as _jsx } from "react/jsx-runtime";
import { StyledButton } from './StyledComponents';
export const AppButton = ({ children, variant = 'primary', fullWidth = false, ...restProps }) => {
    return (_jsx(StyledButton, { "$variant": variant, "$fullWidth": fullWidth, ...restProps, children: children }));
};
