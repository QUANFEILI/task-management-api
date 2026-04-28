const service = require('../services/task.service')

exports.createTask = async (req, res) => {
  try {
    const task = await service.createTask(
      req.userId,
      req.body.title,
      req.body.description,
      req.body.projectId
    )
    res.status(201).json(task)
  } catch (error) {
    if (error.message === "Project not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(400).json({ error: error.message })
  }
}

exports.getTasks = async (req, res) => {
  try {
    const projectId = parseInt(req.query.projectId)

    if (isNaN(projectId)) {
      return res.status(400).json({ error: "Invalid projectId" })
    }

    const tasks = await service.getTasks(
      req.userId,
      projectId
    )

    res.json(tasks)
  } catch (error) {
    if (error.message === "Project not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

exports.getTaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid task id" })
    }

    const task = await service.getTaskById(
      id,
      req.userId
    )

    res.json(task)
  } catch (error) {
    if (error.message === "Task not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

exports.updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid task id" })
    }

    const task = await service.updateTask(
      id,
      req.userId,
      req.body
    )

    res.json(task)
  } catch (error) {
    if (error.message === "Task not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

exports.deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid task id" })
    }

    const task = await service.deleteTask(
      id,
      req.userId
    )

    res.json(task)
  } catch (error) {
    if (error.message === "Task not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}