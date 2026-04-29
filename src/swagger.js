const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management API',
      version: '1.0.0',
      description: 'API for managing projects, tasks, and comments',
    },


    tags: [
      { name: 'Auth', description: 'Authentication endpoints' },
      { name: 'Projects', description: 'Project management' },
      { name: 'Tasks', description: 'Task management' },
      { name: 'Comments', description: 'Comment management' },
    ],

    servers: [
      {
        url: '/',
        description: 'Current server',
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec