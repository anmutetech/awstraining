# Terraform Modules Lab

This module teaches you how to structure Terraform code using reusable modules. You will deploy a complete web application infrastructure on AWS consisting of a VPC with public subnets, EC2 instances running a Node.js app, an Application Load Balancer, and an S3 bucket for static assets.

## What This Module Covers

- Structuring Terraform projects with reusable modules
- Creating a networking module (VPC, subnets, internet gateway, route tables, security groups)
- Creating a compute module (EC2 instances with user data bootstrapping)
- Creating a storage module (S3 bucket with versioning and encryption)
- Creating a load balancer module (ALB, target groups, listeners, health checks)
- Using module outputs to pass data between modules
- Using `terraform.tfvars` for environment-specific configuration
- Automating deployments with a helper script

## Prerequisites

- AWS account with permissions for VPC, EC2, S3, ELB, and IAM resources
- AWS CLI configured with valid credentials
- Terraform (>= 1.0)
- An AWS EC2 key pair (update `terraform.tfvars` with your key pair name)

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

### 1. Configure Variables

1. Open `terraform.tfvars` and update the following values:
   - `key_pair_name` -- replace `your-key-pair-name` with your actual AWS key pair
   - `aws_region` -- change if you prefer a different region (default: `us-west-2`)
   - `environment` -- set to `dev`, `staging`, or `prod`

### 2. Deploy with the Helper Script

1. Make the deploy script executable:
   ```
   chmod +x modules/scripts/deploy.sh
   ```

2. Run the deployment:
   ```
   ./modules/scripts/deploy.sh deploy
   ```
   This will check prerequisites, initialize Terraform, validate the configuration, show a plan for review, and apply after confirmation.

3. After deployment, note the outputs:
   - Application URL (load balancer DNS)
   - S3 bucket name
   - EC2 instance public IPs

### 3. Deploy Manually (Alternative)

1. Initialize Terraform:
   ```
   terraform init
   ```

2. Review the execution plan:
   ```
   terraform plan
   ```

3. Apply the configuration:
   ```
   terraform apply
   ```

4. View outputs:
   ```
   terraform output
   ```

### 4. Verify the Deployment

1. Open the load balancer URL in a browser. The TaskMaster application should display instance metadata and a welcome page.

2. Test the health endpoint:
   ```
   curl http://<load-balancer-dns>/health
   ```

3. Refresh the page multiple times to see the load balancer distribute requests across instances.

### 5. Explore the Modules

Take time to read through each module to understand how they work:

- **networking** -- Creates the VPC, subnets, internet gateway, route tables, and two security groups (one for the ALB allowing HTTP on port 80, one for app instances allowing traffic on port 3000 from the ALB and SSH).
- **compute** -- Launches one EC2 instance per subnet using the latest Ubuntu 22.04 AMI. Bootstraps each instance with a Node.js Express app via `user_data.sh`.
- **storage** -- Creates an S3 bucket with versioning enabled, AES256 server-side encryption, and public access blocked.
- **load-balancer** -- Creates an internet-facing ALB, a target group on port 3000 with `/health` health checks, and an HTTP listener on port 80.

### Cleanup

Destroy all resources when finished:
```
terraform destroy
```

Or use the script:
```
./modules/scripts/deploy.sh destroy
```

## Project Structure

```
terraform-modules-lab/
├── main.tf                # Root module: provider config, wires all child modules
├── variables.tf           # Root input variables (region, VPC CIDR, instance type, etc.)
├── outputs.tf             # Root outputs (VPC ID, instance IPs, ALB URL, S3 bucket)
├── terraform.tfvars       # Environment-specific variable values
└── modules/
    ├── networking/
    │   ├── main.tf        # VPC, subnets, IGW, route tables, security groups
    │   ├── variables.tf   # Networking module inputs
    │   └── outputs.tf     # VPC ID, subnet IDs, security group IDs
    ├── compute/
    │   ├── main.tf        # EC2 instances with Ubuntu AMI lookup
    │   ├── variables.tf   # Compute module inputs
    │   ├── outputs.tf     # Instance IDs, public/private IPs
    │   └── user_data.sh   # Bootstrap script: installs Node.js, deploys Express app
    ├── storage/
    │   ├── main.tf        # S3 bucket with versioning, encryption, public access block
    │   ├── variables.tf   # Storage module inputs
    │   └── output.tf      # Bucket name, ARN, URL
    ├── load-balancer/
    │   ├── main.tf        # ALB, target group, target attachments, HTTP listener
    │   ├── variables.tf   # Load balancer module inputs
    │   └── outputs.tf     # ALB DNS name, ARN, target group ARN
    └── scripts/
        └── deploy.sh      # Automated deployment script (deploy, plan, destroy, validate)
```
