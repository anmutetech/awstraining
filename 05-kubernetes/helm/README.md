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

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for installation instructions.

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

## Using the Standalone Kubernetes Manifests (Without Helm)

The `application.yaml` and `service.yaml` files in this directory can be used as standalone Kubernetes manifests, independent of any Helm chart. This provides a simpler deployment option when you do not need Helm's templating, values overrides, or release management features.

This approach is useful when:

- You want a quick, one-command deployment without installing Helm.
- You are learning Kubernetes fundamentals before moving on to Helm.
- You need a minimal, static deployment that does not require environment-specific configuration.

To deploy using only the raw manifests:

```bash
kubectl apply -f application.yaml
kubectl apply -f service.yaml
```

To tear down:

```bash
kubectl delete -f service.yaml
kubectl delete -f application.yaml
```

The manifests deploy a Ghost 2.6 blog engine (Alpine-based) with one replica on port 2368, fronted by a NodePort Service that maps port 80 to the container and exposes it on NodePort 30007. You can modify these files directly if you need to change replicas, image versions, or port mappings.

## Project Structure

```
helm/
├── README.md
├── Chart.yaml              # Helm chart metadata
├── values.yaml             # Default Helm values
├── values-staging.yaml     # Staging environment overrides
├── values-production.yaml  # Production environment overrides
├── deployment.yaml         # Helm-managed Deployment template
├── application.yaml        # Standalone K8s Deployment manifest (Ghost 2.6, 1 replica, port 2368)
└── service.yaml            # Standalone K8s NodePort Service (port 80 -> 2368, nodePort 30007)
```
