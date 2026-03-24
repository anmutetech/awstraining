# Learning Kubernetes

This module teaches you how to work with Kubernetes on AWS, covering three core areas: provisioning an EKS cluster with Terraform, deploying applications with kubectl manifests, and packaging applications with Helm charts.

## What This Module Covers

- Provisioning an AWS EKS cluster using Terraform modules (VPC, networking, node groups)
- Deploying an Nginx web server to Kubernetes using manifest files
- Building and deploying a multi-container Flask application with Nginx reverse proxy
- Creating Helm charts to templatize Kubernetes deployments
- Understanding ConfigMaps, Deployments, Services, and Ingress resources

## Prerequisites

- AWS account with permissions to create VPC, EKS, IAM roles, and EC2 resources
- AWS CLI configured with valid credentials
- Terraform (>= 1.0)
- kubectl
- Helm 3
- Docker
- An existing AWS EC2 key pair named in the Terraform config (default: `my-first-server`)

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

### Part 1: Provision an EKS Cluster with Terraform

1. Navigate to the EKS Terraform directory:
   ```
   cd EKS_Terraform
   ```

2. Review `provider.tf` to confirm the AWS region is set to your preference (default: `us-east-1`).

3. In `main.tf`, update the `key_pair` value in the `eks` module to match your AWS key pair name.

4. Initialize and apply Terraform:
   ```
   terraform init
   terraform plan
   terraform apply
   ```

5. Once complete, configure kubectl to use the new cluster:
   ```
   aws eks update-kubeconfig --name <cluster_name> --region us-east-1
   ```
   The cluster name is output by Terraform.

6. Verify connectivity:
   ```
   kubectl get nodes
   ```

### Part 2: Deploy Nginx with Kubernetes Manifests

1. Return to the `learning_kubernetes` root directory.

2. Apply the Nginx deployment (3 replicas):
   ```
   kubectl apply -f nginx-deployment.yaml
   ```

3. Expose the deployment with a LoadBalancer service:
   ```
   kubectl apply -f nginx-svc.yaml
   ```

4. Wait for the external IP to be assigned:
   ```
   kubectl get svc nginx-svc --watch
   ```

5. Open the external IP in a browser to confirm Nginx is serving traffic.

### Part 3: Deploy a Flask App with Kubernetes Manifests (learning-helm lab)

1. Navigate to the lab code directory:
   ```
   cd learning-helm/App/lab-code
   ```

2. Create the `anmute` namespace:
   ```
   kubectl create namespace anmute
   ```

3. Open `k8s/nginx.configmap.yaml` and complete `CODE1.0` by adding the Nginx reverse proxy configuration (refer to `../solution-code/k8s/nginx.configmap.yaml` if stuck).

4. Apply the ConfigMap:
   ```
   kubectl apply -f k8s/nginx.configmap.yaml
   ```

5. Open `k8s/deployment.yaml` and complete `CODE2.0`, `CODE2.1`, and `CODE2.2` to configure the Nginx and Flask containers and volume mount.

6. Apply the deployment:
   ```
   kubectl apply -f k8s/deployment.yaml
   ```

7. Verify the pods are running:
   ```
   kubectl get pods -n anmute
   ```

### Part 4: Package the App with Helm

1. Navigate to the Helm lab code:
   ```
   cd learning-helm/App/lab-code/app
   ```

2. Open `values.yaml` and complete `CODE3.0` by adding a `webapp.message` value.

3. Open `templates/deployment.yaml` and complete `CODE3.1` by setting the `APP_NAME` environment variable to `{{ .Values.webapp.message }}`.

4. Install the Helm chart:
   ```
   helm install cloudacademy-app .
   ```

5. Verify the deployment:
   ```
   kubectl get pods
   kubectl get svc
   ```

6. Test the application using the instructions shown after `helm install` (see NOTES.txt output).

### Cleanup

To destroy the EKS cluster and all associated AWS resources:
```
cd EKS_Terraform
terraform destroy
```

## Project Structure

```
learning_kubernetes/
├── nginx-deployment.yaml          # Nginx Deployment manifest (3 replicas)
├── nginx-svc.yaml                 # Nginx LoadBalancer Service manifest
├── EKS_Terraform/
│   ├── main.tf                    # Root module: wires VPC and EKS modules
│   ├── provider.tf                # AWS/Kubernetes/random providers, cluster auth
│   ├── outputs.tf                 # Cluster ID, endpoint, name outputs
│   ├── kubernetes.tf              # Commented-out Kubernetes provider deployment example
│   └── modules/
│       ├── eks/
│       │   ├── main.tf            # EKS cluster, node group, IAM roles, security group
│       │   ├── variables.tf       # EKS module input variables
│       │   └── outputs.tf         # Cluster endpoint, certificate, name outputs
│       └── vpc/
│           ├── main.tf            # VPC, subnets, internet gateway, route tables
│           ├── variables.tf       # VPC module input variables
│           └── outputs.tf         # Subnet IDs, VPC ID outputs
└── learning-helm/
    ├── App/
    │   ├── lab-code/              # Incomplete code for students to fill in
    │   │   ├── flaskapp/
    │   │   │   ├── main.py        # Flask "Hello World" app
    │   │   │   └── Dockerfile     # Python 3 Flask container
    │   │   ├── k8s/
    │   │   │   ├── deployment.yaml       # Skeleton deployment (CODE2.x placeholders)
    │   │   │   └── nginx.configmap.yaml  # Skeleton ConfigMap (CODE1.0 placeholder)
    │   │   └── app/               # Helm chart with CODE3.x placeholders
    │   │       ├── Chart.yaml
    │   │       ├── values.yaml
    │   │       └── templates/
    │   │           ├── deployment.yaml
    │   │           ├── service.yaml
    │   │           ├── ingress.yaml
    │   │           ├── serviceaccount.yaml
    │   │           ├── _helpers.tpl
    │   │           ├── NOTES.txt
    │   │           └── tests/
    │   │               └── test-connection.yaml
    │   └── solution-code/         # Completed reference code
    │       ├── flaskapp/
    │       │   ├── main.py
    │       │   └── Dockerfile
    │       ├── k8s/
    │       │   ├── deployment.yaml
    │       │   └── nginx.configmap.yaml
    │       └── app/               # Complete Helm chart
    │           ├── Chart.yaml
    │           ├── values.yaml
    │           └── templates/
    │               ├── deployment.yaml
    │               ├── service.yaml
    │               ├── ingress.yaml
    │               ├── serviceaccount.yaml
    │               ├── _helpers.tpl
    │               ├── NOTES.txt
    │               └── tests/
    │                   └── test-connection.yaml
    ├── code-1.0.4.zip
    └── code.tar
```
