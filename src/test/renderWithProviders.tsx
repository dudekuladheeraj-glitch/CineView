import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppProviders } from '../Common/data/stores/providers'

export const renderWithProviders = (ui: ReactElement) =>
  render(
    <MemoryRouter>
      <AppProviders>{ui}</AppProviders>
    </MemoryRouter>
  )
