import { useTranslation } from 'react-i18next'

import type { SeasonSummary } from '../../../../Common/core/types/Tmdb.types'
import { List, SeasonLink, Section, Title } from './StyledComponents'

interface Props {
  tvId: number
  seasons: SeasonSummary[]
}

export const SeasonList = ({ tvId, seasons }: Props) => {
  const { t } = useTranslation('tvShows')
  const visibleSeasons = seasons.filter((season) => season.season_number > 0)

  if (visibleSeasons.length === 0) {
    return null
  }

  return (
    <Section aria-label={t('seasons.ariaLabel')}>
      <Title>{t('seasons.title')}</Title>
      <List>
        {visibleSeasons.map((season) => (
          <SeasonLink
            key={season.id}
            to={`/tv/${tvId}/season/${season.season_number}`}
            end={false}
          >
            {season.name}
          </SeasonLink>
        ))}
      </List>
    </Section>
  )
}