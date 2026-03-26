# AWS DevOps Training

A hands-on training repository covering core AWS, DevOps, and cloud-native technologies through practical examples and projects.

**New here?** Start with the [Learning Path](./LEARNING_PATH.md) for a guided order through all modules.

**Need to install tools?** See the [Prerequisites](./PREREQUISITES.md) guide.

## Repository Structure

### 01 — Linux and Bash

| Module | Description |
|--------|-------------|
| [linux-basics](./01-linux-and-bash/linux-basics/) | Basic file operations, text editing, permissions |
| [bash-scripting](./01-linux-and-bash/bash-scripting/) | Variables, conditionals, loops, and AWS automation scripts |

### 02 — Docker

| Module | Description |
|--------|-------------|
| [docker-fundamentals](./02-docker/docker-fundamentals/) | Docker images, containers, volumes, networking with Node.js |
| [docker-compose](./02-docker/docker-compose/) | Multi-container apps with Nginx, MySQL, Redis |
| [pizza-app](./02-docker/pizza-app/) | Flask web app containerized with Docker |

### 03 — Cloud and IAM

| Module | Description |
|--------|-------------|
| [iam-lab](./03-cloud-and-iam/iam-lab/) | IAM users, groups, policies, and roles |
| [serverless](./03-cloud-and-iam/serverless/) | AWS Lambda for EC2 automation, Secrets Manager, trust policies |

### 04 — Terraform

| Module | Description |
|--------|-------------|
| [terraform-basics](./04-terraform/terraform-basics/) | Provision EC2, VPC, security groups on AWS |
| [terraform-modules](./04-terraform/terraform-modules/) | Reusable modules for networking, compute, storage, load balancing |
| [terraform-three-tier](./04-terraform/terraform-three-tier/) | Complete 3-tier architecture with ALB, ASG, bastion host |

### 05 — Kubernetes

| Module | Description |
|--------|-------------|
| [k8s-fundamentals](./05-kubernetes/k8s-fundamentals/) | EKS provisioning with Terraform, nginx deployments, Helm basics |
| [k8s-lab](./05-kubernetes/k8s-lab/) | Deployments, services, ConfigMaps, Secrets, Prometheus, Grafana, Fluent Bit |
| [helm](./05-kubernetes/helm/) | Helm charts with environment-specific values (dev, staging, production) |

### 06 — Applications

| Module | Description |
|--------|-------------|
| [flask-api](./06-applications/flask-api/) | Flask REST API with Docker containerization |
| [calculator-app](./06-applications/calculator-app/) | Node.js calculator microservice |
| [fintech-node-app](./06-applications/fintech-node-app/) | Node.js API with health checks and balance endpoint |
| [fintech-loan-app](./06-applications/fintech-loan-app/) | Fintech app on K8s with HPA, Ingress, and Prometheus metrics |
| [springboot-app](./06-applications/springboot-app/) | Spring Boot with Jenkins, Azure Pipelines, EKS and AKS deployment |

### 07 — CI/CD

| Module | Description |
|--------|-------------|
| [jenkins](./07-cicd/jenkins/) | Declarative Jenkins pipelines with Docker agents |
| [ansible](./07-cicd/ansible/) | Automate application deployment with Ansible playbooks |

### 08 — Monitoring

| Module | Description |
|--------|-------------|
| [prometheus](./08-monitoring/prometheus/) | Flask app exposing Prometheus metrics on Kubernetes with RBAC |
| [sonarqube](./08-monitoring/sonarqube/) | Code quality analysis with SonarQube and Docker Compose |

## Advanced Labs (Standalone Repositories)

These labs build on the skills from the modules above and are hosted in their own repositories.

| Lab | Repository | Description |
|-----|------------|-------------|
| Cloud Migration Infrastructure | [anmutetech/cloud-migration-infra](https://github.com/anmutetech/cloud-migration-infra) | Provision EKS with Terraform, deploy Prometheus via Helm, GitHub Actions CI/CD |
| Legacy App Modernization | [anmutetech/legacy-app-modernization](https://github.com/anmutetech/legacy-app-modernization) | Modernize an e-commerce app with Docker, K8s, CI/CD, and Prometheus |
| Container Security Scanning | [anmutetech/container-security-lab](https://github.com/anmutetech/container-security-lab) | Scan Docker images with Trivy, gate deployments on vulnerability results |
| GitOps with ArgoCD | [anmutetech/gitops-argocd-lab](https://github.com/anmutetech/gitops-argocd-lab) | Deploy apps via GitOps, auto-sync, self-healing, and rollbacks |
| Logging and Observability | [anmutetech/logging-observability-lab](https://github.com/anmutetech/logging-observability-lab) | Centralized logging with Promtail, Loki, and Grafana (PLG stack) |
| MLOps Pipeline | [anmutetech/mlops-pipeline-lab](https://github.com/anmutetech/mlops-pipeline-lab) | Train and serve an ML model with FastAPI, deploy to EKS, monitor with Prometheus |
| Healthcare CI/CD | [anmutetech/healthcare-cicd-lab](https://github.com/anmutetech/healthcare-cicd-lab) | Build a CI/CD pipeline for a healthcare patient appointment API with GitHub Actions |
| Healthcare DevSecOps | [anmutetech/healthcare-devsecops-lab](https://github.com/anmutetech/healthcare-devsecops-lab) | Embed 6 security gates (CodeQL, Trivy, Gitleaks, OPA, Syft, npm audit) into a CI/CD pipeline |

## Technologies Covered

AWS (EC2, EKS, IAM, Lambda, Secrets Manager, S3) · Docker · Docker Compose · Kubernetes · Helm · Terraform · Ansible · Jenkins · Azure Pipelines · GitHub Actions · Prometheus · Grafana · Loki · Fluent Bit · ArgoCD · Trivy · CodeQL · Gitleaks · OPA/Conftest · Syft · SonarQube · FastAPI · Spring Boot · Flask · Node.js · Nginx · Bash
