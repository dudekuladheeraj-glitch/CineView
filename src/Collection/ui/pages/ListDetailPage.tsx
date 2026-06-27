import { useTranslation } from 'react-i18next'
import { PagePlaceholder } from '../../../Common/ui/components/PagePlaceholder'

export const ListDetailPage = () => {
  const { t } = useTranslation('collection')
  return (
    <PagePlaceholder title={t('listDetail.title')} description={t('listDetail.description')} />
  )
}