# AWS DevOps Training

A hands-on training repository covering core AWS, DevOps, and cloud-native technologies through practical examples and projects.

## Repository Structure

### Cloud Infrastructure & Migration

- **cloud-migration-infra/** — EKS cluster provisioning with Terraform, Prometheus monitoring via Helm, and a GitHub Actions CI/CD pipeline. Includes a step-by-step student setup guide.
- **terraform/** — Terraform configurations for provisioning Apache web servers, EC2 instances, security groups, and EKS clusters on AWS.
- **terraform-modules-lab/** — Reusable Terraform modules for networking (VPC, subnets), compute (EC2), storage (S3, EBS), and load balancing.
- **terraform-three-tier-lab/** — Complete three-tier web architecture (web, application, database layers) provisioned with Terraform.

### Containerization

- **learning_docker/** — Full-stack Node.js/Express application demonstrating Docker fundamentals, including tests and documentation.
- **learning-docker-compose/** — Multi-container setup with Nginx, MySQL, and Redis using Docker Compose.
- **mathcorp-calculator/** — Calculator microservice (Node.js/Express) containerized with Docker.

### Kubernetes & Helm

- **learning_kubernetes/** — Kubernetes manifests, EKS cluster provisioning with Terraform, and Helm chart examples with a Flask application.
- **k8s-lab/** — Kubernetes learning lab covering deployments, services, ConfigMaps, Secrets, Prometheus monitoring, Grafana dashboards, and Fluent Bit logging.
- **configmap & secrets/** — Kubernetes ConfigMap and Secret examples with a pod consuming both.
- **happy-helming/** — Kubernetes service and application manifests for Helm-based deployments.
- **Helm-lab/** — Helm chart for the mathcorp-calculator service with environment-specific values (staging, production).

### Applications

- **legacy-app-modrnization/** — Modernized e-commerce shopping cart app (Node.js/Express) with Docker, Kubernetes deployment, Prometheus metrics, and a GitHub Actions CI/CD pipeline.
- **fintech-loan-k8s/** — Fintech loan application deployed to Kubernetes with Prometheus metrics, HPA auto-scaling, and Ingress routing.
- **fintech-node-app/** — Simple fintech Node.js app with balance API and health check endpoints.
- **awspipeline/** — Simple Flask REST API with Docker containerization.
- **springbootapp/** — Spring Boot application with AngularJS frontend, deployable to EKS and AKS with multiple CI/CD pipelines (Jenkinsfile, Azure Pipelines).

### CI/CD & Configuration Management

- **Jenkins/** — Jenkins pipeline configuration using Docker-based build agents.
- **Ansible/** — Ansible playbook to deploy the Spring Petclinic Java application with Java 17, Maven, systemd, and Nginx reverse proxy.

### Serverless & AWS Services

- **serverless/** — AWS Lambda functions for EC2 start/stop automation, Secrets Manager integration, and trust policy configuration.
- **iam_lab/** — Step-by-step IAM lab walkthrough covering users, groups, policies, and roles.

### Monitoring & Code Quality

- **python-prometheus/** — Flask application exposing Prometheus metrics on Kubernetes with RBAC configuration.
- **sonarqube/** — Docker Compose setup for SonarQube with PostgreSQL for code quality analysis.

### Shell Scripting & Linux

- **Bash_Shell_Scripting/** — Bash fundamentals (variables, loops, conditionals, positional parameters) and AWS automation scripts for EC2 instance management, monitoring, and backups.
- **Linux/** — Basic Linux learning materials and exercises.

### Root-Level Files

- **app.py, index.html, order.html, confirmation.html, style.css** — Pizza Palace ordering app built with Flask (demo application for Docker labs).
- **Dockerfile** — Containerizes the Pizza Palace Flask app with Python 3.11.
- **requirements.txt** — Python dependencies for the Flask app.
- **install.docker** — Docker installation steps for Ubuntu.
- **run-container, pull-from-docker-hub** — Scripts to run and pull the pizza app container.
- **enable-ufw** — UFW firewall configuration commands.
- **apache-HA.sh** — Script to install and configure Apache HTTP server for high availability.
- **jenkins-userdata.sh** — EC2 user data script to bootstrap Jenkins with Java 17 on Ubuntu/Debian.

## Technologies Covered

AWS (EC2, EKS, IAM, Lambda, Secrets Manager, S3) · Docker · Docker Compose · Kubernetes · Helm · Terraform · Ansible · Jenkins · Azure Pipelines · GitHub Actions · Prometheus · Grafana · Fluent Bit · SonarQube · Spring Boot · Flask · Node.js · Nginx · Bash
