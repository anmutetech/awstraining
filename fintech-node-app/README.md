# Fintech Node.js Application

This module provides a simple Node.js fintech application designed to be deployed using Ansible automation. It serves as a practical example for learning how to deploy and manage a Node.js web application on a server using configuration management tools.

## What This Module Covers

- Building a basic Node.js Express web application
- Serving static frontend assets from an Express server
- Creating REST API endpoints (balance check, health check)
- Understanding health check endpoints for DevOps monitoring
- Preparing an application for deployment via Ansible

## Prerequisites

- Node.js 18+ and npm
- Basic understanding of JavaScript and Express
- Ansible (for the deployment workflow)

See [../PREREQUISITES.md](../PREREQUISITES.md) for installation instructions.

## Step-by-Step Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Start the application

```bash
npm start
```

The server will start on port 3000 (or the port set in the `PORT` environment variable).

### 3. Test the application

Open your browser and navigate to `http://localhost:3000`. You should see the Fintech App dashboard.

### 4. Test the API endpoints

Check the health endpoint:

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{"status": "UP", "service": "fintech-app"}
```

Fetch a simulated account balance:

```bash
curl http://localhost:3000/api/balance
```

Expected response:

```json
{"status": "success", "balance": "<random-amount>"}
```

### 5. Deploy with Ansible

This application is designed to be deployed via Ansible playbooks. Use your Ansible configuration to:

1. Copy the application files to the target server
2. Run `npm install` on the target
3. Start the application using a process manager (e.g., pm2) or systemd

### 6. Verify the deployment

After deploying, confirm the health endpoint returns a 200 status from the target server:

```bash
curl http://<server-ip>:3000/health
```

## Project Structure

```
fintech-node-app/
├── README.md
├── app.js              # Express server with /health and /api/balance endpoints
├── package.json        # Project metadata and dependencies
└── public/
    └── index.html      # Frontend dashboard UI
```
