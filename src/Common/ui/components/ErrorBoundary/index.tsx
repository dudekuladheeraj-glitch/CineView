import { Component, ErrorInfo, ReactNode } from 'react'

import {
  FallbackMessage,
  FallbackTitle,
  FallbackWrapper,
  RetryButton,
} from './StyledComponents'

interface Props {
  children: ReactNode
  fallbackTitle?: string
  onRetry?: () => void
}

interface State {
  hasError: boolean
  errorMessage: string
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    errorMessage: '',
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: '' })
    this.props.onRetry?.()
  }

  render() {
    if (this.state.hasError) {
      return (
        <FallbackWrapper role="alert">
          <FallbackTitle>{this.props.fallbackTitle ?? 'Something went wrong'}</FallbackTitle>
          <FallbackMessage>{this.state.errorMessage}</FallbackMessage>
          {this.props.onRetry ? (
            <RetryButton type="button" onClick={this.handleRetry}>
              Try again
            </RetryButton>
          ) : null}
        </FallbackWrapper>
      )
    }

    return this.props.children
  }
}
