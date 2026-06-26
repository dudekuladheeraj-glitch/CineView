import { createBrowserRouter } from 'react-router-dom'
import { getRouterBasename } from './Common/core/utils/Env.utils'
import { ROUTES } from './Common/core/constants/Routes.constants'
import { ProtectedRoute } from './Common/ui/routes/ProtectedRoute'
import { PublicRoute } from './Common/ui/routes/PublicRoute'
import { ProtectedLayout } from './Common/ui/layouts/ProtectedLayout'
import { NotFoundPage } from './Common/ui/pages/NotFoundPage'
import { LoginPage } from './Auth'
import { HomePage, MovieDetailPage } from './Movies'
import { TVShowDetailPage, SeasonDetailPage } from './TVShows'
import { SearchPage } from './Search'
import { WatchlistPage, ListsPage, ListDetailPage } from './Collection'
import { SettingsPage } from './Preferences'

export const router = createBrowserRouter([
  {
    path: ROUTES.login,
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: ROUTES.home,
    element: (
      <ProtectedRoute>
        <ProtectedLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.search.slice(1), element: <SearchPage /> },
      { path: 'movies/:movieId', element: <MovieDetailPage /> },
      {
        path: 'tv/:tvId',
        element: <TVShowDetailPage />,
        children: [{ path: 'season/:seasonNumber', element: <SeasonDetailPage /> }],
      },
      { path: 'watchlist', element: <WatchlistPage /> },
      { path: 'lists', element: <ListsPage /> },
      { path: 'lists/:listId', element: <ListDetailPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
], {
  basename: getRouterBasename(),
})