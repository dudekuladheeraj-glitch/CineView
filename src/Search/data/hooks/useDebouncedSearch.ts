import { useEffect, useState } from 'react'

import { SEARCH_DEBOUNCE_MS } from '../../core/constants/Search.constants'

export const useDebouncedValue = <T>(value: T, delay = SEARCH_DEBOUNCE_MS): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue
}