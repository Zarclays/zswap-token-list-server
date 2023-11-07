module.exports = {
  apps: [
    {
      name: 'zSwap-token-list-server',
      script: './src/index.js',
      watch: false,
      force: true,
      env: {
        PORT: 5112,
        NODE_ENV: 'production',
        MY_ENV_VAR: 'MyVarValue',
      },
    },
  ],
};