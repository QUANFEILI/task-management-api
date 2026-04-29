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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               taskId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Comment created
 */
router.post('/', authMiddleware, controller.createComment)

/**
 * @swagger
 * /api/comments:
 *   get:
 *     summary: Get all comments by taskId
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: taskId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Task ID
 *     responses:
 *       200:
 *         description: List of comments
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
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comment found
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
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comment updated
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
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comment deleted
 */
router.delete('/:id', authMiddleware, controller.deleteComment)

module.exports = router