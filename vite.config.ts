import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

import 'dotenv/config'


// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.WP_GRAPHQL_URL': JSON.stringify(process.env.WP_GRAPHQL_URL),
    'process.env.QL_query': JSON.stringify(process.env.QL_query),
  },
  plugins: [react()],
  ssr: {
    noExternal: ['@ant-design/react-slick', 'react-slick'],
  },
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ['jquery']
  },
})
