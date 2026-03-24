# AWS DevOps Training

A hands-on training repository covering core AWS, DevOps, and cloud-native technologies through practical examples and projects.

**New here?** Start with the [Learning Path](./LEARNING_PATH.md) for a guided order through all modules.

**Need to install tools?** See the [Prerequisites](./PREREQUISITES.md) guide.

## Repository Structure

### Shell Scripting & Linux

- **[Bash_Shell_Scripting](./Bash_Shell_Scripting/)** — Variables, conditionals, loops, positional parameters, and AWS automation scripts.
- **[Linux](./Linux/)** — Basic Linux file operations and exercises.

### Containerization

- **[learning_docker](./learning_docker/)** — Docker fundamentals with a full-stack Node.js/Express application.
- **[learning-docker-compose](./learning-docker-compose/)** — Multi-container setup with Nginx, MySQL, and Redis.
- **[mathcorp-calculator](./mathcorp-calculator/)** — Calculator microservice (Node.js/Express) containerized with Docker.
- **[awspipeline](./awspipeline/)** — Flask REST API with Docker containerization.

### Cloud & Infrastructure as Code

- **[iam_lab](./iam_lab/)** — IAM users, groups, policies, and roles walkthrough.
- **[terraform](./terraform/)** — Provision EC2, VPC, security groups, and EKS clusters on AWS.
- **[terraform-modules-lab](./terraform-modules-lab/)** — Reusable Terraform modules for networking, compute, storage, and load balancing.
- **[terraform-three-tier-lab](./terraform-three-tier-lab/)** — Complete three-tier architecture with ALB, ASG, and bastion host.

### Kubernetes & Helm

- **[learning_kubernetes](./learning_kubernetes/)** — EKS provisioning with Terraform, nginx deployments, and Helm chart examples.
- **[k8s-lab](./k8s-lab/)** — Deployments, services, ConfigMaps, Secrets, Prometheus, Grafana, and Fluent Bit.
- **[configmap & secrets](./configmap%20%26%20secrets/)** — Inject configuration and secrets into Kubernetes pods.
- **[happy-helming](./happy-helming/)** — Deploy applications to Kubernetes with Helm.
- **[Helm-lab](./Helm-lab/)** — Helm charts with environment-specific values (dev, staging, production).

### Applications & CI/CD

- **[fintech-node-app](./fintech-node-app/)** — Node.js API with health checks and balance endpoint.
- **[fintech-loan-k8s](./fintech-loan-k8s/)** — Fintech app deployed to K8s with HPA, Ingress, and Prometheus metrics.
- **[Jenkins](./Jenkins/)** — Declarative Jenkins pipelines with Docker agents.
- **[springbootapp](./springbootapp/)** — Spring Boot app with Jenkins, Azure Pipelines, and EKS/AKS deployment.

### Configuration Management & Serverless

- **[Ansible](./Ansible/)** — Automate application deployment with Ansible playbooks.
- **[serverless](./serverless/)** — AWS Lambda functions for EC2 automation, Secrets Manager, and trust policies.

### Monitoring & Code Quality

- **[python-prometheus](./python-prometheus/)** — Flask app exposing Prometheus metrics on Kubernetes with RBAC.
- **[sonarqube](./sonarqube/)** — SonarQube code quality analysis with Docker Compose.

### Root-Level Demo App

- **app.py, index.html, order.html, confirmation.html, style.css** — Pizza Palace ordering app (Flask demo for Docker labs).
- **Dockerfile** — Containerizes the Pizza Palace app with Python 3.11.
- **install.docker, run-container, pull-from-docker-hub** — Docker setup and container management scripts.
- **apache-HA.sh** — Apache HTTP server high availability configuration.
- **jenkins-userdata.sh** — EC2 user data script to bootstrap Jenkins.

## Advanced Labs (Standalone Repositories)

These labs are hosted in their own repositories and build on the skills from the modules above.

| Lab | Repository | Description |
|-----|------------|-------------|
| Cloud Migration Infrastructure | [anmutetech/cloud-migration-infra](https://github.com/anmutetech/cloud-migration-infra) | Provision EKS with Terraform, deploy Prometheus via Helm, GitHub Actions CI/CD |
| Legacy App Modernization | [anmutetech/legacy-app-modernization](https://github.com/anmutetech/legacy-app-modernization) | Modernize an e-commerce app with Docker, K8s, CI/CD, and Prometheus |
| Container Security Scanning | [anmutetech/container-security-lab](https://github.com/anmutetech/container-security-lab) | Scan Docker images with Trivy, gate deployments on vulnerability results |
| GitOps with ArgoCD | [anmutetech/gitops-argocd-lab](https://github.com/anmutetech/gitops-argocd-lab) | Deploy apps via GitOps, auto-sync, self-healing, and rollbacks |
| Logging and Observability | [anmutetech/logging-observability-lab](https://github.com/anmutetech/logging-observability-lab) | Centralized logging with Promtail, Loki, and Grafana (PLG stack) |
| MLOps Pipeline | [anmutetech/mlops-pipeline-lab](https://github.com/anmutetech/mlops-pipeline-lab) | Train and serve an ML model with FastAPI, deploy to EKS, monitor with Prometheus |

## Technologies Covered

AWS (EC2, EKS, IAM, Lambda, Secrets Manager, S3) · Docker · Docker Compose · Kubernetes · Helm · Terraform · Ansible · Jenkins · Azure Pipelines · GitHub Actions · Prometheus · Grafana · Loki · Fluent Bit · ArgoCD · Trivy · SonarQube · FastAPI · Spring Boot · Flask · Node.js · Nginx · Bash
