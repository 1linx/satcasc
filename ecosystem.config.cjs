// PM2 config for running the production build on an Ubuntu box.
//
// First time (and after every git pull):
//   npm ci && npm run build
//   pm2 start ecosystem.config.cjs
//   pm2 save && pm2 startup   # survive reboots
//
// Serves the static /dist folder via `vite preview` on port 8070.
module.exports = {
  apps: [
    {
      name: 'tablet-interface',
      cwd: __dirname,
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host 0.0.0.0 --port 8070 --strictPort',
      interpreter: 'node',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'production',
        PORT: 8070,
      },
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}
