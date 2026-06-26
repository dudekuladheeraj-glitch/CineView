import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorText, InputField, InputLabel, InputWrapper } from './StyledComponents';
export const AppInput = ({ label, value, error, onChange, id, ...restProps }) => {
    const inputId = id ?? restProps.name ?? label ?? undefined;
    const handleChange = (event) => {
        onChange(event.target.value);
    };
    return (_jsxs(InputWrapper, { children: [label ? _jsx(InputLabel, { htmlFor: inputId, children: label }) : null, _jsx(InputField, { id: inputId, value: value, onChange: handleChange, "$hasError": Boolean(error), ...restProps }), error ? _jsx(ErrorText, { children: error }) : null] }));
};
