import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Declare process to avoid TS errors when checking this file
declare const process: any;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});