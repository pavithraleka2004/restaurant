import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  base: '/restaurant/', // ← Add this. Replace with your actual GitHub repo name
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})