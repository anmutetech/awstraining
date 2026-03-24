# Happy Helming -- Kubernetes Blog Deployment

This module introduces deploying applications to Kubernetes using raw manifests, serving as a foundation for understanding Helm charts. You will deploy a Ghost blogging platform to Kubernetes using a Deployment and a NodePort Service.

## What This Module Covers

- Writing Kubernetes Deployment manifests
- Deploying a containerized application (Ghost blog engine)
- Exposing an application using a NodePort Service
- Understanding Kubernetes labels and selectors
- Working with container ports and service port mapping

## Prerequisites

- A running Kubernetes cluster (minikube, kind, or EKS)
- kubectl installed and configured
- Helm 3 installed (for subsequent Helm-based exercises)

See [../PREREQUISITES.md](../PREREQUISITES.md) for installation instructions.

## Step-by-Step Instructions

### 1. Review the manifests

Examine the two YAML files:

- `application.yaml` -- defines a Deployment running the Ghost 2.6 blog engine (Alpine-based image) on port 2368
- `service.yaml` -- defines a NodePort Service that maps port 80 to the container's port 2368, exposed on NodePort 30007

### 2. Deploy the Ghost blog application

```bash
kubectl apply -f application.yaml
```

Verify the deployment:

```bash
kubectl get deployments
kubectl get pods -l app=blog
```

### 3. Create the Service

```bash
kubectl apply -f service.yaml
```

Verify the service:

```bash
kubectl get svc blog
```

### 4. Access the blog

For minikube:

```bash
minikube service blog
```

For other clusters, access the application at `http://<node-ip>:30007`.

### 5. Explore the running application

Open the Ghost blog in your browser. You should see the default Ghost setup page.

### 6. Experiment with scaling

```bash
kubectl scale deployment blog --replicas=3
kubectl get pods -l app=blog
```

### 7. Clean up

```bash
kubectl delete -f service.yaml
kubectl delete -f application.yaml
```

## Project Structure

```
happy-helming/
├── README.md
├── application.yaml    # Deployment for Ghost 2.6 blog (1 replica, port 2368)
└── service.yaml        # NodePort Service (port 80 -> 2368, nodePort 30007)
```
