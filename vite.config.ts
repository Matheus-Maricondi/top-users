import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'remoteUsers',
      filename: 'remoteEntry.js',   // garante que fica na raiz
      exposes: {
        './UsersModule': './src/Users.tsx', // componente que será exposto
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: true,
    assetsDir: ''
  },
  preview: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  server: {
    port: 5001, // cada remote roda em uma porta diferente
    cors: true,   // habilita CORS para o host consumir
  }
})