require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    CORS: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
    defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
    publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
    adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
    authJwtSecret: process.env.AUTH_JWT_SECRET
}

module.exports = { config }