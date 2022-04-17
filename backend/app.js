const express = require('express')
const app = express()
const errorMiddleware = require('./middlewares/errors')

// Import all routes
const products = require('./routes/product')

app.use(express.json())

app.use('/api/v1', products)

// Middleware to handle errors
app.use(errorMiddleware)

module.exports = app
