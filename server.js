const express = require('express')
const { readdirSync } = require('fs')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const port = 4000
const connectDB = require('./config/db')
connectDB()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({ limit: '10mb' }))

readdirSync('./route').map((r) => app.use('/api', require('./route/' + r)))

app.listen(port, () => console.log(`Server running on port ${port}!`))
