const service = require('../services/project.service')

exports.createProject = async (req, res) => {
  try {
    const project = await service.createProject(
      req.userId,
      req.body.name,
      req.body.description
    )
    res.status(201).json(project)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.getProjects = async (req, res) => {
  try {
    const projects = await service.getProjects(req.userId)
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getProjectById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid project id" })
    }

    const project = await service.getProjectById(
      id,
      req.userId
    )

    res.json(project)
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

exports.updateProject = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid project id" })
    }

    const project = await service.updateProject(
      id,
      req.userId,
      req.body
    )

    res.json(project)
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

exports.deleteProject = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid project id" })
    }

    const project = await service.deleteProject(
      id,
      req.userId
    )

    res.json(project)
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