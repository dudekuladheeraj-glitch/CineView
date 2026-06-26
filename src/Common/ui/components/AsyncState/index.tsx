import { ReactNode } from 'react'

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
  loadingText = 'Loading...',
  emptyText = 'No results found',
  errorText,
  onRetry,
  children,
}: Props) => {
  // if (status === 'idle' || status === 'loading') {
  //   return (
  //     <StateWrapper aria-busy="true" aria-live="polite">
  //       <LoadingSpinner aria-hidden="true" />
  //       <StateText>{loadingText}</StateText>
  //     </StateWrapper>
  //   )
  // }
  if (status === 'loading') {
    return (
      <StateWrapper aria-busy="true" aria-live="polite">
        <LoadingSpinner aria-hidden="true" />
        <StateText>{loadingText}</StateText>
      </StateWrapper>
    )
  }
  if (status === 'idle') {
    if (emptyText) {
      return (
        <StateWrapper>
          <StateText>{emptyText}</StateText>
        </StateWrapper>
      )
    }
    return null
  }



  if (status === 'error') {
    return (
      <StateWrapper role="alert">
        <StateText>{errorText ?? error ?? 'Failed to load content'}</StateText>
        {onRetry ? (
          <RetryButton type="button" onClick={onRetry}>
            Retry
          </RetryButton>
        ) : null}
      </StateWrapper>
    )
  }

  if (isEmpty) {
    return (
      <StateWrapper>
        <StateText>{emptyText}</StateText>
      </StateWrapper>
    )
  }

  return <>{children}</>
}
