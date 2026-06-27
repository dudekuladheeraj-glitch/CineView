import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'

import { AsyncState, ErrorBoundary, NotFoundPage, PageContainer } from '../../../Common'
import { SeasonList } from '../components/SeasonList'
import { TVShowDetailHeader } from '../components/TVShowDetailHeader'
import { useTVShowDetailController } from '../controllers/useTVShowDetailController'

const TVShowDetailPageComponent = () => {
  const { t } = useTranslation('tvShows')
  const { tvShow, seasons, pageStatus, pageError, parsedTvId } = useTVShowDetailController()

  if (pageStatus === 'notFound') {
    return <NotFoundPage />
  }

  if (pageStatus === 'loading') {
    return (
      <PageContainer>
        <AsyncState status="loading" loadingText={t('detail.loading')} />
      </PageContainer>
    )
  }

  if (pageStatus === 'error' || !tvShow) {
    return (
      <PageContainer>
        <AsyncState status="error" error={pageError ?? t('detail.loadFailed')} />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <ErrorBoundary fallbackTitle={t('errors.details')}>
        <TVShowDetailHeader tvShow={tvShow} />
      </ErrorBoundary>

      <ErrorBoundary fallbackTitle={t('errors.seasons')}>
        <SeasonList tvId={parsedTvId} seasons={seasons} />
      </ErrorBoundary>

      <Outlet />
    </PageContainer>
  )
}

export const TVShowDetailPage = observer(TVShowDetailPageComponent)