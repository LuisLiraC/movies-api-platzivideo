const express = require('express')
const app = express()
const { config } = require('./config/index')
const moviesApi = require('./routes/movies.js')
const notFoundHandler = require('./utils/middleware/notFoundHandler')
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')

// Body parser
app.use(express.json())

// routes
moviesApi(app)

// Catch 404
app.use(notFoundHandler)


// Errors middlewares
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)


app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`)
})