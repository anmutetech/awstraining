# Fintech Loan Calculator -- Kubernetes Deployment

This module walks you through containerizing a Node.js loan calculator application and deploying it to Kubernetes with production-grade features including health checks, autoscaling, and ingress routing. The app includes Prometheus metrics instrumentation for monitoring.

## What This Module Covers

- Containerizing a Node.js Express application with Docker
- Creating a Kubernetes Namespace for resource isolation
- Writing Kubernetes Deployment manifests with resource limits, liveness probes, and readiness probes
- Exposing an application with a LoadBalancer Service
- Configuring Ingress for domain-based routing
- Setting up Horizontal Pod Autoscaler (HPA) for CPU-based autoscaling
- Prometheus metrics integration with prom-client

## Prerequisites

- Docker installed
- A running Kubernetes cluster (minikube, kind, or EKS)
- kubectl installed and configured
- A Docker Hub account (to push the container image)
- Node.js 18+ (for local development/testing)

See [../PREREQUISITES.md](../PREREQUISITES.md) for installation instructions.

## Step-by-Step Instructions

### 1. Explore the application

Review `app/server.js` to understand the endpoints:

- `GET /` -- serves the loan calculator UI
- `POST /calculate` -- computes monthly loan payments
- `GET /health` -- health check endpoint
- `GET /metrics` -- Prometheus metrics endpoint

### 2. Build and push the Docker image

```bash
cd app
docker build -t <your-dockerhub-username>/loan-app:1.0 .
docker push <your-dockerhub-username>/loan-app:1.0
```

### 3. Update the deployment manifest

Edit `k8s/deployment.yaml` and replace `your-dockerhub-username` with your actual Docker Hub username.

### 4. Create the namespace

```bash
kubectl apply -f k8s/namespace.yaml
```

### 5. Deploy the application

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Verify the pods are running:

```bash
kubectl get pods -n fintech
kubectl get svc -n fintech
```

### 6. Access the application

For a LoadBalancer service, get the external IP:

```bash
kubectl get svc loan-service -n fintech
```

For minikube, use:

```bash
minikube service loan-service -n fintech
```

### 7. Set up Ingress (optional)

```bash
kubectl apply -f k8s/ingress.yaml
```

Add `loan.local` to your `/etc/hosts` file pointing to the ingress controller IP.

### 8. Enable autoscaling

```bash
kubectl apply -f k8s/hpa.yaml
```

Verify the HPA:

```bash
kubectl get hpa -n fintech
```

The HPA will scale pods between 2 and 10 replicas based on CPU utilization (target: 50%).

### 9. Test the application

Open the application in your browser and submit a loan calculation. Verify the response includes the `servedBy` hostname, confirming which pod handled the request.

### 10. Clean up

```bash
kubectl delete -f k8s/hpa.yaml
kubectl delete -f k8s/ingress.yaml
kubectl delete -f k8s/service.yaml
kubectl delete -f k8s/deployment.yaml
kubectl delete -f k8s/namespace.yaml
```

## Project Structure

```
fintech-loan-k8s/
├── README.md
├── app/
│   ├── Dockerfile              # Multi-stage Node.js container build
│   ├── package.json            # Dependencies (express, prom-client)
│   ├── server.js               # Express server with loan calc + Prometheus metrics
│   └── public/
│       └── index.html          # Loan calculator frontend UI
└── k8s/
    ├── namespace.yaml          # "fintech" namespace
    ├── deployment.yaml         # 2 replicas, resource limits, health probes
    ├── service.yaml            # LoadBalancer service on port 80
    ├── ingress.yaml            # Ingress rule for loan.local
    └── hpa.yaml                # Horizontal Pod Autoscaler (CPU-based)
```
