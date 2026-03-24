# Kubernetes Lab -- EKS, Deployments, Monitoring, and Observability

This module is a comprehensive Kubernetes lab covering cluster creation on AWS EKS, deploying applications, configuring ConfigMaps and Secrets, and setting up a full monitoring stack with Prometheus, Grafana, and Fluent Bit. It includes all prerequisite installation scripts and reference commands.

## What This Module Covers

- Installing prerequisites (AWS CLI, kubectl, Docker, eksctl, Helm, Terraform)
- Creating an EKS cluster with eksctl
- Deploying Nginx with resource limits and a LoadBalancer Service
- Managing application configuration with ConfigMaps and Secrets
- Installing Prometheus and Grafana for metrics monitoring
- Deploying a metrics demo application with Prometheus annotations
- Creating a ServiceMonitor for automated metric scraping
- Installing Fluent Bit for log aggregation

## Prerequisites

- An AWS account with permissions to create EKS clusters
- A Linux-based environment (Ubuntu recommended) or access to an EC2 instance
- Basic familiarity with Kubernetes concepts

See [../PREREQUISITES.md](../PREREQUISITES.md) for installation instructions.

## Reference Files

This lab includes several text files with commands and instructions. Review them in order:

| File | Description |
|------|-------------|
| `k8s-prerequisites` | Script to install AWS CLI, kubectl, Docker, eksctl, Helm, and Terraform |
| `create-eks-cluster` | Script to create an EKS cluster named `fin-loan-app` |
| `Prometheus and Grafana` | Commands to add Helm chart repositories for Prometheus and Grafana |
| `install prometheus` | Helm command to install the kube-prometheus-stack |
| `install fluent bit` | Helm command to install Fluent Bit for log collection |

## Step-by-Step Instructions

### 1. Install prerequisites

Run the commands in `k8s-prerequisites` to install all required tools on your machine. This installs:

- AWS CLI v2
- kubectl
- Docker
- eksctl
- Helm 3.15.4
- Terraform

```bash
bash k8s-prerequisites
```

### 2. Configure AWS credentials

```bash
aws configure
```

### 3. Create the EKS cluster

Run the commands in `create-eks-cluster`:

```bash
bash create-eks-cluster
```

This creates a cluster named `fin-loan-app` in `us-east-1` with 2 t3.medium worker nodes (auto-scaling between 2 and 4).

Verify connectivity:

```bash
kubectl get nodes
```

### 4. Deploy Nginx

```bash
kubectl apply -f nginx-deployment.yaml
kubectl apply -f nginx-service.yaml
```

Verify the deployment:

```bash
kubectl get pods -l app=nginx
kubectl get svc nginx-service
```

### 5. Create ConfigMaps and Secrets

```bash
kubectl apply -f app-config.yaml
kubectl apply -f app-secret.yaml
kubectl apply -f app-with-config.yaml
```

Verify the pods are running and have the correct configuration injected:

```bash
kubectl get pods -l app=config-app
kubectl logs -l app=config-app
```

### 6. Set up monitoring -- Add Helm repositories

Run the commands from `Prometheus and Grafana`:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

### 7. Create the monitoring namespace

```bash
kubectl create namespace monitoring
```

### 8. Install Prometheus and Grafana

Run the command from `install prometheus`:

```bash
helm install prometheus prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  --set grafana.adminPassword=admin123 \
  --set alertmanager.persistentVolume.enabled=false \
  --set server.persistentVolume.enabled=false
```

Verify the installation:

```bash
kubectl get pods -n monitoring
```

### 9. Access Grafana

Port-forward the Grafana service:

```bash
kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring
```

Open `http://localhost:3000` in your browser. Log in with username `admin` and password `admin123`.

### 10. Deploy the metrics demo application

```bash
kubectl apply -f metrics-app.yaml
kubectl apply -f servicemonitor.yaml
```

The ServiceMonitor tells Prometheus to scrape the `/metrics` endpoint from the metrics-demo pods every 30 seconds.

### 11. Install Fluent Bit

Run the command from `install fluent bit`:

```bash
helm repo add fluent https://fluent.github.io/helm-charts
helm install fluent-bit fluent/fluent-bit --namespace monitoring
```

Verify Fluent Bit is running:

```bash
kubectl get pods -n monitoring -l app.kubernetes.io/name=fluent-bit
```

### 12. Clean up

To avoid ongoing AWS charges, delete the cluster when done:

```bash
kubectl delete -f servicemonitor.yaml
kubectl delete -f metrics-app.yaml
kubectl delete -f app-with-config.yaml
kubectl delete -f app-secret.yaml
kubectl delete -f app-config.yaml
kubectl delete -f nginx-service.yaml
kubectl delete -f nginx-deployment.yaml
helm uninstall fluent-bit -n monitoring
helm uninstall prometheus -n monitoring
eksctl delete cluster --name fin-loan-app --region us-east-1
```

## Project Structure

```
k8s-lab/
├── README.md
├── k8s-prerequisites           # Install script: AWS CLI, kubectl, Docker, eksctl, Helm, Terraform
├── create-eks-cluster          # eksctl command to create the EKS cluster
├── Prometheus and Grafana      # Helm repo add commands for monitoring charts
├── install prometheus          # Helm install command for kube-prometheus-stack
├── install fluent bit          # Helm install command for Fluent Bit
├── nginx-deployment.yaml       # Nginx Deployment (3 replicas, resource limits)
├── nginx-service.yaml          # Nginx LoadBalancer Service
├── app-config.yaml             # ConfigMap (database URL, log level, feature flags)
├── app-secret.yaml             # Secret (base64-encoded password and API key)
├── app-with-config.yaml        # Deployment consuming ConfigMap and Secret
├── metrics-app.yaml            # Metrics demo Deployment and Service with Prometheus annotations
└── servicemonitor.yaml         # ServiceMonitor for Prometheus metric scraping
```
