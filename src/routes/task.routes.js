const express = require('express')
const router = express.Router()
const controller = require('../controllers/task.controller')
const authMiddleware = require('../middleware/auth')

router.post('/', authMiddleware, controller.createTask)
router.get('/', authMiddleware, controller.getTasks)
router.get('/:id', authMiddleware, controller.getTaskById)
router.put('/:id', authMiddleware, controller.updateTask)
router.delete('/:id', authMiddleware, controller.deleteTask)

module.exports = router