const Task = require('../models/Task')

const ActivityLog = require('../models/ActivityLog')

exports.getTasks = async (req, res) => {

  const tasks = await Task.findAll({
    where: {
      UserId: req.user.id
    }
  })

  res.json(tasks)

}

exports.createTask = async (req, res) => {

  const {
    title,
    description,
    status,
    due_date
  } = req.body

  const task = await Task.create({
    title,
    description,
    status,
    due_date,
    UserId: req.user.id
  })

  await ActivityLog.create({
    action: `Create Task ${title}`
  })

  res.json(task)

}

exports.updateTask = async (req, res) => {

  const { id } = req.params

  await Task.update(
    req.body,
    {
      where: { id }
    }
  )

  res.json({
    message: 'Task Updated'
  })

}

exports.deleteTask = async (req, res) => {

  const { id } = req.params

  await Task.destroy({
    where: { id }
  })

  res.json({
    message: 'Task Deleted'
  })

}