import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'rk-enterprises'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
