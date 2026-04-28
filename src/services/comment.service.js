const commentRepo = require('../repositories/comment.repository')
const taskRepo = require('../repositories/task.repository')
const projectRepo = require('../repositories/project.repository')

exports.createComment = async (userId, content, taskId) => {
  const task = await taskRepo.getTaskById(taskId)

  if (!task) {
    throw new Error("Task not found")
  }

  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return commentRepo.createComment({
    content,
    taskId,
    userId
  })
}

exports.getComments = async (userId, taskId) => {
  const task = await taskRepo.getTaskById(taskId)

  if (!task) {
    throw new Error("Task not found")
  }

  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return commentRepo.getCommentsByTask(taskId)
}

exports.getCommentById = async (id, userId) => {
  const comment = await commentRepo.getCommentById(id)

  if (!comment) {
    throw new Error("Comment not found")
  }

  const task = await taskRepo.getTaskById(comment.taskId)
  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return comment
}

exports.updateComment = async (id, userId, data) => {
  const comment = await commentRepo.getCommentById(id)

  if (!comment) {
    throw new Error("Comment not found")
  }

  const task = await taskRepo.getTaskById(comment.taskId)
  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return commentRepo.updateComment(id, data)
}

exports.deleteComment = async (id, userId) => {
  const comment = await commentRepo.getCommentById(id)

  if (!comment) {
    throw new Error("Comment not found")
  }

  const task = await taskRepo.getTaskById(comment.taskId)
  const project = await projectRepo.getProjectById(task.projectId)

  if (project.userId !== userId) {
    throw new Error("Forbidden")
  }

  return commentRepo.deleteComment(id)
}