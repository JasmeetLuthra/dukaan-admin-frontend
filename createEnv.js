const fs = require('fs')
fs.appendFile('./.env', `API_URL=${process.env.API_URL}\n`, () => {})
fs.appendFile('./.env', `TOKEN_URL=${process.env.TOKEN_URL}\n`,() => {})
fs.appendFile('./.env', `DOMAIN=${process.env.DOMAIN}\n`,() => {})
fs.appendFile('./.env', `CALLBACK_URL=${process.env.CALLBACK_URL}\n`,() => {})
fs.appendFile('./.env', `CLIENT_ID=${process.env.CLIENT_ID}\n`,() => {})
fs.appendFile('./.env', `SENTRY_DSN=${process.env.SENTRY_DSN}\n`,() => {})
fs.appendFile('./.env', `ONEAUTH_URL=${process.env.ONEAUTH_URL}\n`,() => {})
fs.appendFile('./.env', `ONEAUTH_LOGIN_URL=${process.env.ONEAUTH_LOGIN_URL}\n`,() => {})
fs.appendFile('./.env', `ONEAUTH_LOGOUT_URL=${process.env.ONEAUTH_LOGOUT_URL}\n`,() => {})