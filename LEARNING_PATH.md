# Learning Path

A recommended order for working through the training modules. Each phase builds on the previous one. Complete the modules within each phase in the order listed.

---

## Phase 1: Foundations

Get comfortable with Linux, shell scripting, and version control.

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 1 | [Linux](./Linux/) | Basic file operations, text editing, permissions |
| 2 | [Bash Shell Scripting](./Bash_Shell_Scripting/) | Variables, conditionals, loops, positional parameters |

---

## Phase 2: Containerization

Learn to build, run, and manage containers.

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 3 | [Learning Docker](./learning_docker/) | Docker fundamentals, images, volumes, networking |
| 4 | [Learning Docker Compose](./learning-docker-compose/) | Multi-container apps with Nginx, MySQL, Redis |
| 5 | [MathCorp Calculator](./mathcorp-calculator/) | Containerize a Node.js microservice from scratch |
| 6 | [AWS Pipeline](./awspipeline/) | Containerize a Flask REST API |

---

## Phase 3: Cloud Fundamentals

Understand AWS services and infrastructure as code.

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 7 | [IAM Lab](./iam_lab/) | Users, groups, policies, roles |
| 8 | [Terraform](./terraform/) | Provision EC2, VPC, security groups on AWS |
| 9 | [Terraform Modules Lab](./terraform-modules-lab/) | Reusable modules for networking, compute, storage, load balancing |
| 10 | [Terraform Three-Tier Lab](./terraform-three-tier-lab/) | Complete 3-tier architecture with ALB, ASG, bastion host |

---

## Phase 4: Kubernetes

Deploy and manage applications on Kubernetes.

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 11 | [Learning Kubernetes](./learning_kubernetes/) | EKS provisioning, Helm basics, nginx deployments |
| 12 | [K8s Lab](./k8s-lab/) | Deployments, services, ConfigMaps, Secrets, monitoring, logging |
| 13 | [ConfigMap and Secrets](./configmap%20%26%20secrets/) | Inject configuration and secrets into pods |
| 14 | [Happy Helming](./happy-helming/) | Deploy applications with Helm |
| 15 | [Helm Lab](./Helm-lab/) | Helm charts with environment-specific values (dev, staging, production) |

---

## Phase 5: Application Deployment and CI/CD

Build and deploy real applications with automated pipelines.

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 16 | [Fintech Node App](./fintech-node-app/) | Build a Node.js API with health checks |
| 17 | [Fintech Loan K8s](./fintech-loan-k8s/) | Deploy to K8s with HPA, Ingress, and Prometheus metrics |
| 18 | [Jenkins](./Jenkins/) | Declarative Jenkins pipelines with Docker agents |
| 19 | [Spring Boot App](./springbootapp/) | Full CI/CD with Jenkins, Azure Pipelines, deploy to EKS and AKS |

---

## Phase 6: Configuration Management and Serverless

Automate infrastructure and explore serverless computing.

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 20 | [Ansible](./Ansible/) | Automate application deployment with playbooks |
| 21 | [Serverless](./serverless/) | AWS Lambda for EC2 automation, Secrets Manager, trust policies |

---

## Phase 7: Monitoring and Code Quality

Set up observability and quality gates.

| # | Module | What You'll Learn |
|---|--------|-------------------|
| 22 | [Python Prometheus](./python-prometheus/) | Expose custom Prometheus metrics from a Flask app on K8s |
| 23 | [SonarQube](./sonarqube/) | Code quality analysis with SonarQube and PostgreSQL |

---

## Advanced Labs (Standalone Repositories)

These labs are hosted in their own repositories and build on the skills from the phases above. Complete them in order.

| # | Lab | Repository | What You'll Learn |
|---|-----|------------|-------------------|
| 24 | Cloud Migration Infrastructure | [anmutetech/cloud-migration-infra](https://github.com/anmutetech/cloud-migration-infra) | Provision EKS with Terraform, deploy Prometheus via Helm, GitHub Actions CI/CD |
| 25 | Legacy App Modernization | [anmutetech/legacy-app-modernization](https://github.com/anmutetech/legacy-app-modernization) | Modernize an e-commerce app with Docker, K8s, CI/CD, and Prometheus |
| 26 | Container Security Scanning | [anmutetech/container-security-lab](https://github.com/anmutetech/container-security-lab) | Scan Docker images with Trivy, gate deployments on vulnerability results |
| 27 | GitOps with ArgoCD | [anmutetech/gitops-argocd-lab](https://github.com/anmutetech/gitops-argocd-lab) | Deploy apps via GitOps, auto-sync, self-healing, rollbacks |
| 28 | Logging and Observability | [anmutetech/logging-observability-lab](https://github.com/anmutetech/logging-observability-lab) | Centralized logging with Promtail, Loki, and Grafana (PLG stack) |
| 29 | MLOps Pipeline | [anmutetech/mlops-pipeline-lab](https://github.com/anmutetech/mlops-pipeline-lab) | Train and serve an ML model with FastAPI, deploy to EKS, monitor with Prometheus |
