const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  await prisma.comment.deleteMany()
  await prisma.task.deleteMany()
  await prisma.project.deleteMany()
  await prisma.user.deleteMany()

  const adminPassword = await bcrypt.hash("Pass123", 10)
  const userPassword = await bcrypt.hash("Pass123", 10)

  const admin = await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@test.com",
      password: adminPassword,
      role: "admin"
    }
  })

  const user = await prisma.user.create({
    data: {
      username: "user",
      email: "user@test.com",
      password: userPassword,
      role: "user"
    }
  })

  const project = await prisma.project.create({
    data: {
      name: "Admin Project",
      description: "Owned by admin",
      userId: admin.id
    }
  })

  const task = await prisma.task.create({
    data: {
      title: "Admin Task",
      description: "Task under admin project",
      projectId: project.id
    }
  })

  await prisma.comment.create({
    data: {
      content: "Admin Comment",
      taskId: task.id,
      userId: admin.id
    }
  })

  console.log("Seed data created with Admin & User")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })