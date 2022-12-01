require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const httpStatus = require('http-status')

const router = require('./routes')

const errorHandler = require('./middlewares/errorHandler')
const ApiError = require('./utils/ApiError')

const port = process.env.PORT
const app = express()
app.locals.moment = require('moment')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(router)

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, `Cannot find this ${req.originalUrl} on this app....`))
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on ${Date(Date.now)}`)
  console.log(`Server listening on PORT: ${port}`)
})
