const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createProject = (data) => {
  return prisma.project.create({ data })
}

exports.getProjectsByUser = (userId) => {
  return prisma.project.findMany({
    where: { userId }
  })
}

exports.getProjectById = (id) => {
  return prisma.project.findUnique({
    where: { id }
  })
}

exports.updateProject = (id, data) => {
  return prisma.project.update({
    where: { id },
    data
  })
}

exports.deleteProject = (id) => {
  return prisma.project.delete({
    where: { id }
  })
}