# MathCorp Calculator

A simple web-based calculator application built with Node.js and Express. This module teaches students how to containerize a Node.js application with Docker and understand basic web application architecture.

## What This Module Covers

- Building a Node.js/Express web application with REST API endpoints
- Serving static frontend assets (HTML, CSS, JavaScript) from Express
- Containerizing a Node.js application with Docker
- Understanding client-server communication using fetch/POST requests
- Implementing a health check endpoint for container orchestration readiness

## Prerequisites

- Node.js 18+
- npm
- Docker

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

### Option A: Run Locally

1. Install dependencies:
   ```
   npm install
   ```

2. Start the application:
   ```
   npm start
   ```

3. Open a browser and navigate to `http://localhost:3000`.

4. Enter two numbers, select an operation (Add or Multiply), and click Calculate.

5. Test the health endpoint:
   ```
   curl http://localhost:3000/health
   ```

### Option B: Run with Docker

1. Build the Docker image:
   ```
   docker build -t mathcorp-calculator .
   ```

2. Run the container:
   ```
   docker run -d -p 3000:3000 --name mathcorp mathcorp-calculator
   ```

3. Open a browser and navigate to `http://localhost:3000`.

4. Verify the health endpoint:
   ```
   curl http://localhost:3000/health
   ```

5. Stop and remove the container when finished:
   ```
   docker stop mathcorp
   docker rm mathcorp
   ```

## Project Structure

```
mathcorp-calculator/
├── server.js          # Express server with /calculate and /health endpoints
├── package.json       # Node.js dependencies (express, body-parser)
├── Dockerfile         # Multi-stage Docker build using node:18-alpine
├── public/
│   ├── script.js      # Frontend JavaScript (fetch API for calculations)
│   └── style.css      # Application styling
└── views/
    └── index.html     # Calculator UI with number inputs and operation selector
```
