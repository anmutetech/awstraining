# Phase 2 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: Multi-Stage Dockerfile

Create a multi-stage Dockerfile for the pizza app (in `pizza-app/`) that reduces the final image size by at least 50% compared to a standard single-stage build. The application must still function correctly after optimization.

### Acceptance Criteria

- The Dockerfile uses at least two stages (a build stage and a production stage).
- The final image size is at least 50% smaller than a single-stage build using `python:3.x`.
- The application starts and serves requests correctly from the optimized image.
- Only production dependencies are included in the final image (no build tools, caches, or unnecessary files).
- You can verify the size reduction by comparing `docker images` output for both versions.

### Hints

- Consider using `python:3.x-slim` or `python:3.x-alpine` as the base for your production stage.
- Use a `.dockerignore` file to exclude unnecessary files from the build context.

---

## Challenge 2: Docker Compose Full Stack

Write a `docker-compose.yml` file that runs the pizza app with a Redis cache for session storage and an Nginx reverse proxy in front of the application. All three services should communicate over a custom Docker network.

### Acceptance Criteria

- The compose file defines three services: `app` (pizza app), `redis`, and `nginx`.
- All services are connected to a custom bridge network.
- Nginx listens on port 80 and proxies requests to the pizza app.
- Redis is accessible to the app but not exposed to the host.
- The pizza app does not expose its port directly to the host (only Nginx does).
- Running `docker-compose up` starts all three services and the app is accessible at `http://localhost`.
- A custom `nginx.conf` is provided (via a bind mount or embedded in the compose file) with the reverse proxy configuration.

### Hints

- Use the `depends_on` directive to control service startup order.
- For the Nginx configuration, you need a `proxy_pass` directive pointing to the app service by its compose service name.
