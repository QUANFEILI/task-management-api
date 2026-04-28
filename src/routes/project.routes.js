const express = require('express')
const router = express.Router()
const controller = require('../controllers/project.controller')
const authMiddleware = require('../middleware/auth')

router.post('/', authMiddleware, controller.createProject)
router.get('/', authMiddleware, controller.getProjects)
router.get('/:id', authMiddleware, controller.getProjectById)
router.put('/:id', authMiddleware, controller.updateProject)
router.delete('/:id', authMiddleware, controller.deleteProject)

module.exports = router