import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { ErrorBoundary } from '../../../Common'
import { EpisodeList } from '../components/EpisodeList'
import { useSeasonDetailController } from '../controllers/useSeasonDetailController'

const SeasonDetailPageComponent = () => {
  const { t } = useTranslation('tvShows')
  const { episodes, season, status, error } = useSeasonDetailController()

  return (
    <ErrorBoundary fallbackTitle={t('errors.episodes')}>
      <EpisodeList
        seasonTitle={season?.name ?? t('episodes.fallbackTitle')}
        episodes={episodes}
        status={status}
        error={error}
      />
    </ErrorBoundary>
  )
}

export const SeasonDetailPage = observer(SeasonDetailPageComponent)