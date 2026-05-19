require('dotenv').config()

const express = require('express')

const cors = require('cors')

const morgan = require('morgan')

const sequelize = require('./config/db')

require('./models/User')
require('./models/Task')
require('./models/ActivityLog')

const authRoutes = require('./routes/authRoutes')

const taskRoutes = require('./routes/taskRoutes')

const app = express()

app.use(cors())

app.use(express.json())

app.use(morgan('dev'))

app.use('/api/auth', authRoutes)

app.use('/api/tasks', taskRoutes)

sequelize.sync()

module.exports = app