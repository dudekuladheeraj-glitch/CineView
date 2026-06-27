import { useTranslation } from 'react-i18next'
import { PagePlaceholder } from '../../../Common/ui/components/PagePlaceholder'

export const WatchlistPage = () => {
  const { t } = useTranslation('collection')
  return <PagePlaceholder title={t('watchlist.title')} description={t('watchlist.description')} />
}