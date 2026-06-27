import { useTranslation } from 'react-i18next'
import { PagePlaceholder } from '../components/PagePlaceholder'

export const NotFoundPage = () => {
  const { t } = useTranslation('common')

  return (
    <PagePlaceholder title={t('notFound.title')} description={t('notFound.description')} />
  )
}