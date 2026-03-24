# AWS DevOps Training

A hands-on training repository covering core AWS, DevOps, and cloud-native technologies through practical examples and projects.

## Repository Structure

### Shell Scripting & Linux

- **Bash_Shell_Scripting/** — Bash fundamentals (variables, loops, conditionals, positional parameters) and AWS automation scripts for EC2 instance management, monitoring, and backups.
- **Linux/** — Basic Linux learning materials and exercises.
- **apache-HA.sh** — Script to install and configure Apache HTTP server for high availability.
- **jenkins-userdata.sh** — EC2 user data script to bootstrap Jenkins with Java 17 on Ubuntu/Debian.

### Containerization

- **learning_docker/** — Full-stack Node.js/Express application demonstrating Docker fundamentals, including tests and documentation.
- **learning-docker-compose/** — Multi-container setup with Nginx, MySQL, and Redis using Docker Compose.

### Kubernetes & Helm

- **learning_kubernetes/** — Kubernetes manifests, EKS cluster provisioning with Terraform, and Helm chart examples with a Flask application.
- **happy-helming/** — Kubernetes service and application manifests for Helm-based deployments.

### Infrastructure as Code

- **terraform/** — Terraform configurations for provisioning Apache web servers, EC2 instances, security groups, and EKS clusters on AWS.

### CI/CD

- **Jenkins/** — Jenkins pipeline configuration using Docker-based build agents.
- **springbootapp/** — Spring Boot web application with multiple CI/CD pipelines (Jenkinsfile, Azure Pipelines) and Kubernetes deployment manifests for EKS and AKS.

### Serverless & AWS Services

- **serverless/** — AWS Lambda functions for EC2 start/stop automation, Secrets Manager integration, and trust policy configuration.
- **iam_lab/** — Step-by-step IAM lab walkthrough covering users, groups, policies, and roles.

### Monitoring & Code Quality

- **python-prometheus/** — Flask application exposing Prometheus metrics on Kubernetes with RBAC configuration.
- **sonarqube/** — Docker Compose setup for SonarQube with PostgreSQL for code quality analysis.

### Applications

- **awspipeline/** — Simple Flask REST API with Docker containerization.
- **springbootapp/** — Spring Boot application with AngularJS frontend, deployable to EKS and AKS from ECR/ACR.

## Technologies Covered

AWS (EC2, EKS, AKS, IAM, Lambda, Secrets Manager) · Docker · Docker Compose · Kubernetes · Helm · Terraform · Jenkins · Azure Pipelines · Prometheus · SonarQube · Spring Boot · Flask · Node.js · Bash
