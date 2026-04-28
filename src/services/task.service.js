const taskRepo = require('../repositories/task.repository')
const projectRepo = require('../repositories/project.repository')

exports.createTask = async (userId, title, description, projectId) => {
  const project = await projectRepo.getProjectById(projectId)

  if (!project) {
    throw new Error("Project not found")
  }

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return taskRepo.createTask({
    title,
    description,
    projectId
  })
}

exports.getTasks = async (userId, projectId) => {
  const project = await projectRepo.getProjectById(projectId)

  if (!project) {
    throw new Error("Project not found")
  }

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return taskRepo.getTasksByProject(projectId)
}

exports.getTaskById = async (id, userId) => {
  const task = await taskRepo.getTaskById(id)

  if (!task) {
    throw new Error("Task not found")
  }

  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return task
}

exports.updateTask = async (id, userId, data) => {
  const task = await taskRepo.getTaskById(id)

  if (!task) {
    throw new Error("Task not found")
  }

  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return taskRepo.updateTask(id, data)
}

exports.deleteTask = async (id, userId) => {
  const task = await taskRepo.getTaskById(id)

  if (!task) {
    throw new Error("Task not found")
  }

  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return taskRepo.deleteTask(id)
}