const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const repo = require('../repositories/auth.repository')

exports.signup = async (username, email, password) => {
  const existing = await repo.findUserByEmail(email)

  if (existing) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  return repo.createUser({
    username,
    email,
    password: hashedPassword
  })
}

exports.login = async (email, password) => {
  const user = await repo.findUserByEmail(email)

  if (!user) {
    throw new Error("Invalid credentials")
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    throw new Error("Invalid credentials")
  }

  const token = jwt.sign(
    { userId: user.id },
    "secretkey"
  )

  return token
}