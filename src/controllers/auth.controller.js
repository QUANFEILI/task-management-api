const service = require('../services/auth.service')

exports.signup = async (req, res) => {
  try {
    const user = await service.signup(
      req.body.username,
      req.body.email,
      req.body.password
    )
    res.status(201).json(user)
  } catch (error) {
    if (error.message === "User already exists") {
      return res.status(409).json({ error: error.message })
    }
    res.status(400).json({ error: error.message })
  }
}

exports.login = async (req, res) => {
  try {
    const token = await service.login(
      req.body.email,
      req.body.password
    )

    res.json({ token })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
}