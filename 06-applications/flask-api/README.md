# AWS Pipeline -- Dockerized Flask Application

This module demonstrates how to containerize a Python Flask web application using Docker. The app includes a simple homepage and a REST API for task management, suitable for deployment via an AWS CI/CD pipeline.

## What This Module Covers

- Writing a Flask application with routes and a REST API
- Creating a Dockerfile based on Alpine Linux
- Building and running a Docker container
- Exposing a containerized web application on port 80

## Prerequisites

- Docker installed and running
- Python 3 (for local testing without Docker, optional)
- Basic understanding of HTTP methods (GET, POST)

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

1. **Review the Flask application.** Open `app.py` and note the routes:
   - `GET /` -- returns a "Hello, World!" HTML heading
   - `GET /todo/api/v1.0/tasks` -- returns a JSON list of tasks
   - `POST /todo/api/v1.0/tasks` -- creates a new task (expects JSON with a `title` field)

2. **Review the Dockerfile.** Open `Dockerfile` and note:
   - Base image: `alpine:latest`
   - Installs `py3-pip` and `flask`
   - Copies `app.py` into `/home` in the container
   - Exposes port 80
   - Runs Flask on `0.0.0.0:80`

3. **Build the Docker image:**
   ```bash
   docker build -t awspipeline-flask .
   ```

4. **Run the container:**
   ```bash
   docker run -d -p 80:80 --name flask-app awspipeline-flask
   ```

5. **Test the application:**
   ```bash
   # Test the homepage
   curl http://localhost/

   # Get the task list
   curl http://localhost/todo/api/v1.0/tasks

   # Create a new task
   curl -X POST -H "Content-Type: application/json" \
     -d '{"title":"Deploy to AWS"}' \
     http://localhost/todo/api/v1.0/tasks
   ```

6. **Stop and clean up:**
   ```bash
   docker stop flask-app
   docker rm flask-app
   ```

## Project Structure

```
awspipeline/
├── README.md
├── Dockerfile    # Alpine-based Docker image running Flask
└── app.py        # Flask app with homepage and TODO REST API
```
