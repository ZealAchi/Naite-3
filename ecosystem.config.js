module.exports = {
  apps : [{
    name: 'NAITE',
    script: 'server.js',
    instances: 'MAX',
    autorestart: true,
    exec_mode:"cluster",
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
