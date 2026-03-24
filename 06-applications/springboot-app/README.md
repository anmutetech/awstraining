# Spring Boot App

A Spring Boot web application with an AngularJS frontend for managing customer records. This module demonstrates how to build, containerize, and deploy the application to Kubernetes clusters on both AWS EKS and Azure AKS using Jenkins and Azure Pipelines.

## What This Module Covers

- Building a Spring Boot application with Maven
- Containerizing a Java application with Docker
- Setting up CI/CD pipelines with Jenkins (ECR + EKS deployment)
- Setting up CI/CD pipelines with Azure Pipelines (ECR + AKS deployment)
- Writing Kubernetes Deployment and Service manifests for multiple cloud targets
- Deploying to AWS EKS from Amazon ECR
- Deploying to Azure AKS from Azure Container Registry (ACR)
- Deploying from Docker Hub

## Prerequisites

- Java 8 (JDK)
- Maven 3
- Docker
- AWS account with ECR and EKS access (for AWS deployments)
- Azure account with ACR and AKS access (for Azure deployments)
- kubectl configured for your target cluster
- Jenkins (for Jenkins pipeline deployments)

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

### 1. Build the Application

1. Build the JAR file with Maven:
   ```
   mvn clean package
   ```
   This produces `target/springbootApp.jar`.

2. Run locally to verify:
   ```
   java -jar target/springbootApp.jar
   ```
   The app starts on port 8085. Open `http://localhost:8085` to see the customer form.

### 2. Build the Docker Image

1. Build the Docker image:
   ```
   docker build -t springbootapp .
   ```

2. Run the container:
   ```
   docker run -d -p 8085:8085 --name springboot springbootapp
   ```

3. Verify at `http://localhost:8085`.

### 3. Deploy to AWS EKS

**Option A: Jenkins Pipeline (Jenkinsfile)**

1. Configure Jenkins with the AWS credentials plugin and Maven tool (`Maven3`).
2. Create a pipeline job pointing to the `Jenkinsfile`.
3. The pipeline will:
   - Check out the code
   - Build the JAR with Maven
   - Build and tag the Docker image
   - Push to Amazon ECR
   - Update kubeconfig and apply `eks-deploy-from-ecr.yaml` to EKS

**Option B: Manual Deployment**

1. Push your Docker image to ECR:
   ```
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
   docker tag springbootapp:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/mavenapp:latest
   docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/mavenapp:latest
   ```

2. Configure kubectl for your EKS cluster:
   ```
   aws eks update-kubeconfig --name <cluster-name> --region us-east-1
   ```

3. Deploy using one of the EKS manifests:
   ```
   kubectl apply -f eks-deploy-from-ecr.yaml
   ```

4. Get the LoadBalancer URL:
   ```
   kubectl get svc springboot-app
   ```

### 4. Deploy to Azure AKS

1. Push your Docker image to Azure Container Registry.
2. Configure kubectl for your AKS cluster:
   ```
   az aks get-credentials --resource-group <rg> --name <cluster>
   ```
3. Deploy using the AKS manifest:
   ```
   kubectl apply -f aks-deploy-from-acr.yaml
   ```

### 5. Deploy from Docker Hub

1. Push the image to Docker Hub.
2. Apply the Docker Hub manifest:
   ```
   kubectl apply -f springboot-docker-hub.yaml
   ```

### Cleanup

Delete all Kubernetes resources:
```
kubectl delete -f <manifest-file>.yaml
```

## Kubernetes Manifest Reference

| File | Source Registry | Target Platform |
|------|----------------|-----------------|
| `eks-deploy-k8s.yaml` | AWS ECR | EKS (4 replicas, LB on port 80) |
| `eks-deploy-from-ecr.yaml` | AWS ECR | EKS (4 replicas, LB on port 80) |
| `aks-deploy-from-acr.yaml` | Azure ACR | AKS (3 replicas, LB on port 80) |
| `jenkins-aks-deploy-from-acr.yaml` | Azure ACR | AKS via Jenkins (3 replicas) |
| `springboot-docker-hub.yaml` | Docker Hub | Any K8s (2 replicas, LB on port 8085) |
| `springboot-lb.yaml` | Docker Hub | Any K8s (2 replicas, LB on port 8085) |
| `manifests/deployment.yml` + `manifests/service.yml` | Azure ACR | AKS (1 replica, LB on port 80) |

## Project Structure

```
springbootapp/
├── pom.xml                        # Maven build config (Spring Boot 1.4.2)
├── Dockerfile                     # Java container from openjre base image
├── Jenkinsfile                    # Jenkins pipeline: build, push ECR, deploy EKS
├── Jenkinsfile-K8S                # Jenkins pipeline: build, push ECR, deploy via kubeconfig
├── azure-pipelines.yml            # Azure Pipelines: Maven build, Docker, push ECR
├── eks-deploy-k8s.yaml            # K8s manifest for EKS (ECR image)
├── eks-deploy-from-ecr.yaml       # K8s manifest for EKS (ECR image)
├── aks-deploy-from-acr.yaml       # K8s manifest for AKS (ACR image)
├── jenkins-aks-deploy-from-acr.yaml # K8s manifest for AKS via Jenkins
├── springboot-docker-hub.yaml     # K8s manifest using Docker Hub image
├── springboot-lb.yaml             # K8s manifest using Docker Hub image
├── manifests/
│   ├── deployment.yml             # AKS deployment manifest
│   └── service.yml                # AKS service manifest (LoadBalancer)
└── src/main/
    ├── java/com/tcs/angularjs/
    │   ├── MyAwesomeSpringBootAngularJsApp.java  # Main Spring Boot entry point
    │   ├── controller/
    │   │   ├── WebController.java         # Serves the index page
    │   │   └── RestWebController.java     # REST API: GET/POST customers
    │   └── model/
    │       └── Customer.java              # Customer model (firstname, lastname)
    └── resources/
        ├── application.properties         # Server port config (8085)
        ├── templates/
        │   └── index.html                 # AngularJS frontend with customer form
        └── static/js/
            └── controller.js              # AngularJS controllers for POST/GET
```
