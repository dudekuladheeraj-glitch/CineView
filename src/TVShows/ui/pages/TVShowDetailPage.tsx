import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'

import { AsyncState, ErrorBoundary, NotFoundPage, PageContainer } from '../../../Common'
import { SeasonList } from '../components/SeasonList'
import { TVShowDetailHeader } from '../components/TVShowDetailHeader'
import { useTVShowDetailController } from '../controllers/useTVShowDetailController'

const TVShowDetailPageComponent = () => {
  const { tvShow, seasons, pageStatus, pageError, parsedTvId } = useTVShowDetailController()

  if (pageStatus === 'notFound') {
    return <NotFoundPage />
  }

  if (pageStatus === 'loading' || pageStatus === 'idle') {
    return (
      <PageContainer>
        <AsyncState status="loading" loadingText="Loading TV show..." />
      </PageContainer>
    )
  }

  if (pageStatus === 'error' || !tvShow) {
    return (
      <PageContainer>
        <AsyncState status="error" error={pageError ?? 'Failed to load TV show'} />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <ErrorBoundary fallbackTitle="Unable to load TV show details">
        <TVShowDetailHeader tvShow={tvShow} />
      </ErrorBoundary>

      <ErrorBoundary fallbackTitle="Unable to load seasons">
        <SeasonList tvId={parsedTvId} seasons={seasons} />
      </ErrorBoundary>

      <Outlet />
    </PageContainer>
  )
}

export const TVShowDetailPage = observer(TVShowDetailPageComponent)