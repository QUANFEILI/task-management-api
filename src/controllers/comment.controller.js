const service = require('../services/comment.service')

exports.createComment = async (req, res) => {
  try {
    const comment = await service.createComment(
      req.userId,
      req.body.content,
      req.body.taskId
    )
    res.status(201).json(comment)
  } catch (error) {
    if (error.message === "Task not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(400).json({ error: error.message })
  }
}

exports.getComments = async (req, res) => {
  try {
    const taskId = parseInt(req.query.taskId)

    if (isNaN(taskId)) {
      return res.status(400).json({ error: "Invalid taskId" })
    }

    const comments = await service.getComments(
      req.userId,
      taskId
    )

    res.json(comments)
  } catch (error) {
    if (error.message === "Task not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

exports.getCommentById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid comment id" })
    }

    const comment = await service.getCommentById(
      id,
      req.userId
    )

    res.json(comment)
  } catch (error) {
    if (error.message === "Comment not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

exports.updateComment = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid comment id" })
    }

    const comment = await service.updateComment(
      id,
      req.userId,
      req.body
    )

    res.json(comment)
  } catch (error) {
    if (error.message === "Comment not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}

exports.deleteComment = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid comment id" })
    }

    const comment = await service.deleteComment(
      id,
      req.userId
    )

    res.json(comment)
  } catch (error) {
    if (error.message === "Comment not found") {
      return res.status(404).json({ error: error.message })
    }
    if (error.message === "Forbidden") {
      return res.status(403).json({ error: error.message })
    }
    res.status(500).json({ error: error.message })
  }
}