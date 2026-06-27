import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import type { AsyncStatus } from '../../../core/types/Common.types'
import { LoadingSpinner, RetryButton, StateText, StateWrapper } from './StyledComponents'

interface Props {
  status: AsyncStatus
  error?: string | null
  isEmpty?: boolean
  loadingText?: string
  emptyText?: string
  errorText?: string
  onRetry?: () => void
  children?: ReactNode
}

export const AsyncState = ({
  status,
  error,
  isEmpty = false,
  loadingText,
  emptyText,
  errorText,
  onRetry,
  children,
}: Props) => {
  const { t } = useTranslation('common')

  const resolvedLoadingText = loadingText ?? t('async.loading')
  const resolvedEmptyText = emptyText ?? t('async.empty')
  const resolvedErrorText = errorText ?? error ?? t('async.error')

  if (status === 'loading') {
    return (
      <StateWrapper aria-busy="true" aria-live="polite">
        <LoadingSpinner aria-hidden="true" />
        <StateText>{resolvedLoadingText}</StateText>
      </StateWrapper>
    )
  }

  if (status === 'idle') {
    if (resolvedEmptyText) {
      return (
        <StateWrapper>
          <StateText>{resolvedEmptyText}</StateText>
        </StateWrapper>
      )
    }
    return null
  }

  if (status === 'error') {
    return (
      <StateWrapper role="alert">
        <StateText>{resolvedErrorText}</StateText>
        {onRetry ? (
          <RetryButton type="button" onClick={onRetry}>
            {t('async.retry')}
          </RetryButton>
        ) : null}
      </StateWrapper>
    )
  }

  if (isEmpty) {
    return (
      <StateWrapper>
        <StateText>{resolvedEmptyText}</StateText>
      </StateWrapper>
    )
  }

  return <>{children}</>
}