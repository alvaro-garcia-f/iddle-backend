process.stdout.write('\x1B[2J\x1B[0f')

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

// Connect to DB

mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.MONGO_DB,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
},
err => {
  if (err) { throw new Error(err) } else { console.info('💾 Connected to Mongo Database \n') }
})

const app = express()

app
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use('/api', require('./api/routes/router'))

app.listen(process.env.PORT || 2222, (err) => {
  if (err) { throw new Error(err) } else {
    console.info('>'.repeat(40))
    console.info('💻  Iddle Server Live')
    console.info(`📡  PORT: http://localhost:${process.env.PORT || 2222}`)
    console.info('>'.repeat(40) + '\n')
  }
})
