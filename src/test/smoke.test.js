import { jsx as _jsx } from "react/jsx-runtime";
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PagePlaceholder } from '../Common/ui/components/PagePlaceholder';
import { renderWithProviders } from './renderWithProviders';
describe('milestone 1 smoke test', () => {
    it('renders placeholder page', () => {
        renderWithProviders(_jsx(PagePlaceholder, { title: "Smoke Test", description: "Works" }));
        expect(screen.getByText('Smoke Test')).toBeInTheDocument();
    });
});
