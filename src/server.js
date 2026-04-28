const express = require('express')
const app = express()

app.use(express.json())


const authRoutes = require('./routes/auth.routes')

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const authMiddleware = require('./middleware/auth')

app.get('/test', authMiddleware, (req, res) => {
  res.json({
    message: "You are authenticated",
    userId: req.userId
  })
})

//PROJECTS
const projectRoutes = require('./routes/project.routes')
app.use('/api/projects', projectRoutes)

//TASKS
const taskRoutes = require('./routes/task.routes')
app.use('/api/tasks', taskRoutes)

//COMMENTS
const commentRoutes = require('./routes/comment.routes')
app.use('/api/comments', commentRoutes)