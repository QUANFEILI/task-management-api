const express = require('express')
const router = express.Router()
const controller = require('../controllers/comment.controller')
const authMiddleware = require('../middleware/auth')

/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Create comment
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 */
router.post('/', authMiddleware, controller.createComment)

/**
 * @swagger
 * /api/comments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 */
router.get('/', authMiddleware, controller.getComments)

/**
 * @swagger
 * /api/comments/{id}:
 *   get:
 *     summary: Get comment by ID
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 */
router.get('/:id', authMiddleware, controller.getCommentById)

/**
 * @swagger
 * /api/comments/{id}:
 *   put:
 *     summary: Update comment
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id', authMiddleware, controller.updateComment)

/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     summary: Delete comment
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', authMiddleware, controller.deleteComment)

module.exports = router