import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../core/constants/Routes.constants';
import { SearchWrapper, SearchIcon, SearchInput } from './StyledComponents';
export const AppSearch = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && value.trim()) {
            navigate(ROUTES.search);
            setValue('');
        }
    };
    return (_jsxs(SearchWrapper, { children: [_jsx(SearchIcon, { children: "\uD83D\uDD0D" }), _jsx(SearchInput, { type: "search", placeholder: "Search movies & shows...", value: value, onChange: (e) => setValue(e.target.value), onKeyDown: handleKeyDown, "aria-label": "Search" })] }));
};
