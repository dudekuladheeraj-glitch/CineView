import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProviders } from '../Common/data/stores/providers';
export const renderWithProviders = (ui) => render(_jsx(MemoryRouter, { children: _jsx(AppProviders, { children: ui }) }));
