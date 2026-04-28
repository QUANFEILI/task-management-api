const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createTask = (data) => {
  return prisma.task.create({ data })
}

exports.getTasksByProject = (projectId) => {
  return prisma.task.findMany({
    where: { projectId }
  })
}

exports.getTaskById = (id) => {
  return prisma.task.findUnique({
    where: { id }
  })
}

exports.updateTask = (id, data) => {
  return prisma.task.update({
    where: { id },
    data
  })
}

exports.deleteTask = (id) => {
  return prisma.task.delete({
    where: { id }
  })
}