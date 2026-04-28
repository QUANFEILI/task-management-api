# Task Management API

## Overview

This project is a RESTful API for a Task Management System. It allows users to create and manage projects, tasks, and comments, while enforcing authentication and authorization using JSON Web Tokens (JWT).

The API is fully deployed and can be accessed online.

---

## Live API

Base URL:
https://task-management-api-1868.onrender.com

---

## Features

* User authentication (signup & login)
* JWT-based authorization
* Project management (CRUD)
* Task management within projects
* Comment system for tasks
* Ownership-based access control (403 Forbidden)
* Error handling (400, 401, 403, 404)
* Database seeding for testing

---

## Technologies Used

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL (Render)
* JWT (Authentication)
* bcrypt (Password hashing)

---

## Project Structure

```
src/
  controllers/
  services/
  repositories/
  routes/
  middleware/

prisma/
  schema.prisma
  seed.js
```

---

## Authentication

This API uses JWT for authentication.

After login, include the token in requests:

```
Authorization: Bearer YOUR_TOKEN
```

---

## Seed Data (Important for Testing)

The database is automatically seeded during deployment.

Preloaded data:

* Admin User
  email: [admin@test.com](mailto:admin@test.com)
  password: Pass123

* Regular User
  email: [user@test.com](mailto:user@test.com)
  password: Pass123

* Project ID: 1 (owned by admin)

* Task ID: 1

* Comment ID: 1

This ensures all endpoints can be tested immediately.

---

## Example Endpoints

### Login

POST /api/auth/login

```
{
  "email": "admin@test.com",
  "password": "Pass123"
}
```

---

### Get Projects (Protected)

GET /api/projects

Requires JWT token.

---

### Authorization Example

* Admin can access their own project → 200 OK
* Regular user accessing admin’s project → 403 Forbidden

---

## Error Handling

The API returns standard HTTP status codes:

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found

---

## Deployment

The API is deployed on Render.

Build process includes:

* Installing dependencies
* Running Prisma migrations
* Seeding database

---

## Testing

A detailed step-by-step Testing Plan is included in the submission.

---

## Author

Quanfei Li
