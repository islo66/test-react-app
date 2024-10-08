import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Proxy requests starting with /api to the backend server at localhost:5000
            '/api': {
                target: 'https://17f4-2a02-908-2540-80e0-6807-36b1-211b-4c31.ngrok-free.app', // Backend server URL
                changeOrigin: true,  // Needed for virtual hosted sites
            }
        }
    }
})
