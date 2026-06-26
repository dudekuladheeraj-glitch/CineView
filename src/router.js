import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './Common/core/constants/Routes.constants';
import { ProtectedRoute } from './Common/ui/routes/ProtectedRoute';
import { PublicRoute } from './Common/ui/routes/PublicRoute';
import { ProtectedLayout } from './Common/ui/layouts/ProtectedLayout';
import { NotFoundPage } from './Common/ui/pages/NotFoundPage';
import { LoginPage } from './Auth';
import { HomePage, MovieDetailPage } from './Movies';
import { TVShowDetailPage, SeasonDetailPage } from './TVShows';
import { SearchPage } from './Search';
import { WatchlistPage, ListsPage, ListDetailPage } from './Collection';
import { SettingsPage } from './Preferences';
export const router = createBrowserRouter([
    {
        path: ROUTES.login,
        element: (_jsx(PublicRoute, { children: _jsx(LoginPage, {}) })),
    },
    {
        path: ROUTES.home,
        element: (_jsx(ProtectedRoute, { children: _jsx(ProtectedLayout, {}) })),
        children: [
            { index: true, element: _jsx(HomePage, {}) },
            { path: ROUTES.search.slice(1), element: _jsx(SearchPage, {}) },
            { path: 'movies/:movieId', element: _jsx(MovieDetailPage, {}) },
            { path: 'tv/:tvId', element: _jsx(TVShowDetailPage, {}) },
            { path: 'tv/:tvId/season/:seasonNumber', element: _jsx(SeasonDetailPage, {}) },
            { path: 'watchlist', element: _jsx(WatchlistPage, {}) },
            { path: 'lists', element: _jsx(ListsPage, {}) },
            { path: 'lists/:listId', element: _jsx(ListDetailPage, {}) },
            { path: 'settings', element: _jsx(SettingsPage, {}) },
        ],
    },
    {
        path: '*',
        element: _jsx(NotFoundPage, {}),
    },
]);
