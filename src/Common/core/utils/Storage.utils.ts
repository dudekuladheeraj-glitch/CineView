export const readStorage = <T>(key: string): T | null => {
  try {
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : null
  } catch {
    return null
  }
}

export const writeStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeStorage = (key: string) => {
  localStorage.removeItem(key)
}
