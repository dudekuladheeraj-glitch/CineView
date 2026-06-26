import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { AppProviders } from './Common/data/stores/providers'
import { MoviesProvider } from './Movies/data/stores/providers'
import { SearchProvider } from './Search/data/stores/providers'
import { TVShowsProvider } from './TVShows/data/stores/providers'

export const App = () => {
  return (
    <AppProviders>
      <SearchProvider>
        <TVShowsProvider>
          <MoviesProvider>
            <RouterProvider router={router} />
          </MoviesProvider>
        </TVShowsProvider>
      </SearchProvider>
    </AppProviders>
  )
}