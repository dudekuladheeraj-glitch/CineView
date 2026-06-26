import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const getViteBase = (basePath: string) => {
  if (!basePath || basePath === '/') return '/'
  return basePath.endsWith('/') ? basePath : `${basePath}/`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const base = getViteBase(env.VITE_BASE_PATH || '/')

  return {
    plugins: [react()],
    base,
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
  }
})
