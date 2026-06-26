import { observer } from 'mobx-react-lite'

import { ErrorBoundary } from '../../../Common'
import { EpisodeList } from '../components/EpisodeList'
import { useSeasonDetailController } from '../controllers/useSeasonDetailController'

const SeasonDetailPageComponent = () => {
  const { episodes, season, status, error } = useSeasonDetailController()

  return (
    <ErrorBoundary fallbackTitle="Unable to load episodes">
      <EpisodeList
        seasonTitle={season?.name ?? 'Episodes'}
        episodes={episodes}
        status={status}
        error={error}
      />
    </ErrorBoundary>
  )
}

export const SeasonDetailPage = observer(SeasonDetailPageComponent)