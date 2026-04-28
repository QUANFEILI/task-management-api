const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createComment = (data) => {
  return prisma.comment.create({ data })
}

exports.getCommentsByTask = (taskId) => {
  return prisma.comment.findMany({
    where: { taskId }
  })
}

exports.getCommentById = (id) => {
  return prisma.comment.findUnique({
    where: { id }
  })
}

exports.updateComment = (id, data) => {
  return prisma.comment.update({
    where: { id },
    data
  })
}

exports.deleteComment = (id) => {
  return prisma.comment.delete({
    where: { id }
  })
}