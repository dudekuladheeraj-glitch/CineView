import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SelectField, SelectLabel, SelectWrapper } from './StyledComponents';
export const AppSelect = ({ label, value, options, onChange, id, ...restProps }) => {
    const selectId = id ?? restProps.name ?? label ?? undefined;
    const handleChange = (event) => {
        onChange(event.target.value);
    };
    return (_jsxs(SelectWrapper, { children: [label ? _jsx(SelectLabel, { htmlFor: selectId, children: label }) : null, _jsx(SelectField, { id: selectId, value: value, onChange: handleChange, ...restProps, children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] }));
};
