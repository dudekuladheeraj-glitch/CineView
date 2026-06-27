import { useTranslation } from 'react-i18next'
import { PagePlaceholder } from '../../../Common/ui/components/PagePlaceholder'

export const ListsPage = () => {
  const { t } = useTranslation('collection')
  return <PagePlaceholder title={t('lists.title')} description={t('lists.description')} />
}