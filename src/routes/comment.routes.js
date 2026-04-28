const express = require('express')
const router = express.Router()
const controller = require('../controllers/comment.controller')
const authMiddleware = require('../middleware/auth')

router.post('/', authMiddleware, controller.createComment)
router.get('/', authMiddleware, controller.getComments)
router.get('/:id', authMiddleware, controller.getCommentById)
router.put('/:id', authMiddleware, controller.updateComment)
router.delete('/:id', authMiddleware, controller.deleteComment)

module.exports = router