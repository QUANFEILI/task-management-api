const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.createUser = (data) => {
  return prisma.user.create({
    data,
    select: {
      id: true,
      username: true,
      email: true
    }
  })
}

exports.findUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email }
  })
}