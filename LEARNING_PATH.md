# Learning Path

A recommended order for working through the training modules. Each phase builds on the previous one. Complete the modules within each phase in the order listed.

---

## Phase 1: Linux and Bash

Get comfortable with Linux, shell scripting, and version control.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 1 | [Linux Basics](./01-linux-and-bash/linux-basics/) | Beginner | Basic file operations, text editing, permissions |
| 2 | [Bash Scripting](./01-linux-and-bash/bash-scripting/) | Beginner | Variables, conditionals, loops, positional parameters, AWS automation |

---

## Phase 2: Containerization

Learn to build, run, and manage containers.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 3 | [Docker Fundamentals](./02-docker/docker-fundamentals/) | Beginner | Docker images, containers, volumes, networking |
| 4 | [Docker Compose](./02-docker/docker-compose/) | Beginner | Multi-container apps with Nginx, MySQL, Redis |
| 5 | [Pizza App](./02-docker/pizza-app/) | Beginner | Containerize a Flask web application from scratch |

---

## Phase 3: Cloud and IAM

Understand AWS services, identity management, and serverless computing.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 6 | [IAM Lab](./03-cloud-and-iam/iam-lab/) | Beginner | Users, groups, policies, roles |
| 7 | [Serverless](./03-cloud-and-iam/serverless/) | Intermediate | AWS Lambda for EC2 automation, Secrets Manager, trust policies |

---

## Phase 4: Terraform

Provision and manage cloud infrastructure as code.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 8 | [Terraform Basics](./04-terraform/terraform-basics/) | Intermediate | Provision EC2, VPC, security groups on AWS |
| 9 | [Terraform Modules](./04-terraform/terraform-modules/) | Intermediate | Reusable modules for networking, compute, storage, load balancing |
| 10 | [Terraform Three-Tier](./04-terraform/terraform-three-tier/) | Advanced | Complete 3-tier architecture with ALB, ASG, bastion host |

---

## Phase 5: Kubernetes

Deploy and manage applications on Kubernetes.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 11 | [K8s Fundamentals](./05-kubernetes/k8s-fundamentals/) | Intermediate | EKS provisioning, Helm basics, nginx deployments |
| 12 | [K8s Lab](./05-kubernetes/k8s-lab/) | Intermediate | Deployments, services, ConfigMaps, Secrets, monitoring, logging |
| 13 | [Helm](./05-kubernetes/helm/) | Intermediate | Helm charts with environment-specific values (dev, staging, production) |

---

## Phase 6: Applications

Build and deploy real applications.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 14 | [Flask API](./06-applications/flask-api/) | Beginner | Build and containerize a Flask REST API |
| 15 | [Calculator App](./06-applications/calculator-app/) | Beginner | Node.js microservice with Docker |
| 16 | [Fintech Node App](./06-applications/fintech-node-app/) | Beginner | Node.js API with health checks |
| 17 | [Fintech Loan App](./06-applications/fintech-loan-app/) | Intermediate | Deploy to K8s with HPA, Ingress, and Prometheus metrics |
| 18 | [Spring Boot App](./06-applications/springboot-app/) | Advanced | Full CI/CD with Jenkins, Azure Pipelines, EKS and AKS deployment |

---

## Phase 7: CI/CD and Configuration Management

Automate builds, deployments, and infrastructure configuration.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 19 | [Jenkins](./07-cicd/jenkins/) | Intermediate | Declarative pipelines with Docker agents |
| 20 | [Ansible](./07-cicd/ansible/) | Intermediate | Automate application deployment with playbooks |

---

## Phase 8: Monitoring and Code Quality

Set up observability and quality gates.

| # | Module | Level | What You'll Learn |
|---|--------|-------|-------------------|
| 21 | [Prometheus](./08-monitoring/prometheus/) | Intermediate | Expose custom Prometheus metrics from a Flask app on K8s |
| 22 | [SonarQube](./08-monitoring/sonarqube/) | Beginner | Code quality analysis with SonarQube and PostgreSQL |

---

## Advanced Labs (Standalone Repositories)

These labs are hosted in their own repositories and build on the skills from the phases above. Complete them in order.

| # | Lab | Level | Repository | What You'll Learn |
|---|-----|-------|------------|-------------------|
| 23 | Cloud Migration Infrastructure | Advanced | [anmutetech/cloud-migration-infra](https://github.com/anmutetech/cloud-migration-infra) | Provision EKS with Terraform, deploy Prometheus via Helm, GitHub Actions CI/CD |
| 24 | Legacy App Modernization | Advanced | [anmutetech/legacy-app-modernization](https://github.com/anmutetech/legacy-app-modernization) | Modernize an e-commerce app with Docker, K8s, CI/CD, and Prometheus |
| 25 | Container Security Scanning | Advanced | [anmutetech/container-security-lab](https://github.com/anmutetech/container-security-lab) | Scan Docker images with Trivy, gate deployments on vulnerability results |
| 26 | GitOps with ArgoCD | Advanced | [anmutetech/gitops-argocd-lab](https://github.com/anmutetech/gitops-argocd-lab) | Deploy apps via GitOps, auto-sync, self-healing, and rollbacks |
| 27 | Logging and Observability | Advanced | [anmutetech/logging-observability-lab](https://github.com/anmutetech/logging-observability-lab) | Centralized logging with Promtail, Loki, and Grafana (PLG stack) |
| 28 | MLOps Pipeline | Advanced | [anmutetech/mlops-pipeline-lab](https://github.com/anmutetech/mlops-pipeline-lab) | Train and serve an ML model with FastAPI, deploy to EKS, monitor with Prometheus |
