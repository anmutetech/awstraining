# Pizza Palace -- Docker Lab

A hands-on Docker lab built around a Flask-based pizza ordering application called **Tony's Pizza Palace**. You will run the app locally, containerize it with Docker, and optionally push/pull the image from DockerHub.

The app lets customers browse a pizza menu (Margherita, Pepperoni, Supreme, Veggie Deluxe, Hawaiian), choose a size (Small, Medium, Large), and place an order. Orders are stored in memory and can be viewed on a dedicated orders page. A `/health` endpoint is included for container health checks.

## Prerequisites

- Python 3.11+
- Docker installed and running
- (Optional) A DockerHub account for push/pull steps

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for detailed installation instructions.

## Step 1: Run Locally with Flask

Install the Python dependencies and start the development server:

```bash
pip install -r requirements.txt
python app.py
```

The app will start on port 3000 by default. Open `http://localhost:3000` in your browser to verify it works before containerizing.

## Step 2: Build the Docker Image

Build the Docker image using the provided Dockerfile:

```bash
docker build -t pizza-app .
```

The Dockerfile uses `python:3.11-slim` as the base image, installs dependencies, creates a non-root user for security, and configures a health check against the `/health` endpoint.

## Step 3: Run the Container

Start a container from the image you just built:

```bash
docker run -p 3000:3000 pizza-app
```

To run it in detached mode (background):

```bash
docker run -d --name pizza-container -p 3000:3000 pizza-app
```

## Step 4: Test the App

Open your browser and navigate to `http://localhost:3000`. You should see the Pizza Palace order form. Try the following:

1. Fill in your name and phone number.
2. Select a pizza and size from the dropdowns.
3. Submit the order and confirm you see the confirmation page.
4. Click "View All Orders" to see your order in the list.

## Step 5: Push to DockerHub / Pull from DockerHub

To share your image via DockerHub, tag and push it:

```bash
docker tag pizza-app <yourusername>/pizza-app:v1.0
docker push <yourusername>/pizza-app:v1.0
```

To pull and run the image on another machine (or to test pulling), use the helper scripts included in this project:

- `pull-from-docker-hub` -- pulls the image and runs a container from your DockerHub repository. Edit the script to replace `<yourusername>` with your DockerHub username.
- `run-container` -- runs a container from the locally built image in detached mode.

## Project Structure

```
pizza-app/
├── Dockerfile              # Multi-stage Docker build (python:3.11-slim)
├── app.py                  # Flask application with routes for ordering
├── requirements.txt        # Python dependencies (Flask, Werkzeug)
├── index.html              # Main order form template
├── order.html              # View all orders template
├── confirmation.html       # Order confirmation template
├── style.css               # Application styles
├── install.docker          # Docker installation instructions (Ubuntu)
├── pull-from-docker-hub    # Script to pull and run from DockerHub
├── run-container           # Script to run container locally
└── README.md               # This file
```
