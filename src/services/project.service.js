const repo = require('../repositories/project.repository')

exports.createProject = (userId, name, description) => {
  return repo.createProject({
    name,
    description,
    userId
  })
}

exports.getProjects = (userId) => {
  return repo.getProjectsByUser(userId)
}

exports.getProjectById = async (id, userId) => {
  const project = await repo.getProjectById(id)

  if (!project) {
    throw new Error("Project not found")
  }

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return project
}

exports.updateProject = async (id, userId, data) => {
  const project = await repo.getProjectById(id)

  if (!project) {
    throw new Error("Project not found")
  }

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return repo.updateProject(id, data)
}

exports.deleteProject = async (id, userId) => {
  const project = await repo.getProjectById(id)

  if (!project) {
    throw new Error("Project not found")
  }

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return repo.deleteProject(id)
}