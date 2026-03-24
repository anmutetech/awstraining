# Kubernetes ConfigMaps and Secrets

This module teaches you how to manage application configuration and sensitive data in Kubernetes using ConfigMaps and Secrets. You will create a ConfigMap for non-sensitive configuration, a Secret for credentials, and a Deployment that consumes both as environment variables and mounted volumes.

## What This Module Covers

- Creating Kubernetes ConfigMaps to store application configuration (database URLs, log levels, feature flags)
- Creating Kubernetes Secrets to store sensitive data (passwords, API keys) using base64 encoding
- Injecting configuration into pods via environment variables (`valueFrom`)
- Mounting ConfigMaps and Secrets as volumes inside containers
- Understanding the difference between ConfigMaps and Secrets

## Prerequisites

- A running Kubernetes cluster (minikube, kind, or EKS)
- kubectl installed and configured
- Basic understanding of Kubernetes Deployments and Pods

See [../PREREQUISITES.md](../PREREQUISITES.md) for installation instructions.

## Step-by-Step Instructions

### 1. Review the manifest files

Read through each YAML file to understand the resources being created:

- `app-config.yaml` -- defines a ConfigMap with a database URL, log level, and feature flags
- `app-secret.yaml` -- defines a Secret with base64-encoded database password and API key
- `app-with-config.yaml` -- defines a Deployment that references both the ConfigMap and Secret

### 2. Create the ConfigMap

```bash
kubectl apply -f app-config.yaml
```

Verify it was created:

```bash
kubectl get configmap app-config
kubectl describe configmap app-config
```

### 3. Create the Secret

```bash
kubectl apply -f app-secret.yaml
```

Verify it was created:

```bash
kubectl get secret app-secrets
kubectl describe secret app-secrets
```

Note: `kubectl describe` will not show the actual secret values. To decode a value:

```bash
kubectl get secret app-secrets -o jsonpath='{.data.database_password}' | base64 --decode
```

### 4. Deploy the application

```bash
kubectl apply -f app-with-config.yaml
```

### 5. Verify the deployment

```bash
kubectl get pods -l app=config-app
```

### 6. Check that configuration is injected correctly

Pick a running pod and inspect its environment variables:

```bash
kubectl exec -it <pod-name> -- env | grep -E 'DATABASE_URL|LOG_LEVEL|DATABASE_PASSWORD'
```

Check the mounted ConfigMap volume:

```bash
kubectl exec -it <pod-name> -- cat /etc/config/database_url
kubectl exec -it <pod-name> -- cat /etc/config/log_level
```

Check the mounted Secret volume:

```bash
kubectl exec -it <pod-name> -- ls /etc/secrets
```

### 7. View application logs

The busybox container prints the configuration values every 30 seconds:

```bash
kubectl logs -l app=config-app
```

### 8. Clean up

```bash
kubectl delete -f app-with-config.yaml
kubectl delete -f app-secret.yaml
kubectl delete -f app-config.yaml
```

## Project Structure

```
configmap & secrets/
├── README.md
├── app-config.yaml          # ConfigMap with database URL, log level, feature flags
├── app-secret.yaml          # Secret with base64-encoded password and API key
└── app-with-config.yaml     # Deployment consuming both ConfigMap and Secret
```
