# Helm Lab -- MathCorp Calculator Service

This module teaches Helm chart fundamentals using a sample "MathCorp Calculator" application. Students learn how to structure a Helm chart and use environment-specific value overrides for development, staging, and production deployments.

## What This Module Covers

- Helm chart structure: `Chart.yaml`, templates, and values files
- Kubernetes Deployment templates with Go templating syntax
- Environment-specific configuration using multiple values files
- Resource limits and requests per environment
- Autoscaling configuration with HPA (Horizontal Pod Autoscaler)
- Ingress configuration for external access
- Health checks with liveness and readiness probes

## Prerequisites

- Kubernetes cluster (minikube, kind, or a cloud-managed cluster)
- kubectl installed and configured
- Helm 3 installed
- Docker Hub account (to push/pull container images)

See [../PREREQUISITES.md](../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

1. **Review the chart metadata.** Open `Chart.yaml` to see the chart name (`mathcorp-calculator`), version, and app version.

2. **Study the default values.** Open `values.yaml` and note:
   - 2 replicas, image from `lincontech/mathcorp-calculator:v1.0.0`
   - ClusterIP service on port 80 targeting container port 3000
   - Autoscaling disabled, ingress disabled
   - Environment set to `development`, log level `info`

3. **Review the deployment template.** Open `deployment.yaml` and trace how template variables like `{{ .Values.replicaCount }}` and `{{ .Values.image.repository }}` are injected from the values file.

4. **Install the chart in development mode** (uses default values):
   ```bash
   helm install mathcorp-dev .
   ```

5. **Deploy to staging** using the staging overrides:
   ```bash
   helm install mathcorp-staging . -f values-staging.yaml
   ```
   This sets 3 replicas, enables ingress at `calculator-staging.mathcorp.com`, sets log level to `debug`, and enables advanced math features.

6. **Deploy to production** using the production overrides:
   ```bash
   helm install mathcorp-prod . -f values-production.yaml
   ```
   This sets 5 replicas (with autoscaling from 3 to 10), higher resource limits, ingress at `calculator.mathcorp.com`, and log level `warn`.

7. **Compare environments.** Use `helm get values` to inspect what was applied:
   ```bash
   helm get values mathcorp-dev
   helm get values mathcorp-staging
   helm get values mathcorp-prod
   ```

8. **Clean up** when done:
   ```bash
   helm uninstall mathcorp-dev
   helm uninstall mathcorp-staging
   helm uninstall mathcorp-prod
   ```

## Project Structure

```
Helm-lab/
├── README.md
├── Chart.yaml              # Chart metadata (name, version, maintainers)
├── deployment.yaml         # Kubernetes Deployment template with Go templating
├── values.yaml             # Default values (development environment)
├── values-staging.yaml     # Staging overrides (3 replicas, debug logging, ingress)
└── values-production.yaml  # Production overrides (5 replicas, autoscaling, ingress)
```
