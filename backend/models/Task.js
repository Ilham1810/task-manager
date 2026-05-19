const { DataTypes } = require('sequelize')

const sequelize = require('../config/db')

const User = require('./User')

const Task = sequelize.define('Task', {

  title: {
    type: DataTypes.STRING
  },

  description: {
    type: DataTypes.TEXT
  },

  status: {
    type: DataTypes.ENUM(
      'todo',
      'in-progress',
      'done'
    ),
    defaultValue: 'todo'
  },

  due_date: {
    type: DataTypes.DATE
  }

})

User.hasMany(Task)

Task.belongsTo(User)

module.exports = Task