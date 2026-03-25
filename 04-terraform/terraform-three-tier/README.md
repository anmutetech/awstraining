# Terraform Three-Tier Architecture Lab

This module deploys a production-style three-tier architecture on AWS using Terraform. It provisions a complete infrastructure with a frontend web tier (public), a backend application tier (private), a bastion host for SSH access, load balancers, auto scaling groups, and NAT gateway -- all in a single `main.tf` file.

## What This Module Covers

- Designing a three-tier VPC architecture with public and private subnets across two availability zones
- Configuring internet gateway, NAT gateway, and route tables for public/private traffic flow
- Creating security groups for each tier (ALB, NLB, instances, bastion)
- Provisioning an internet-facing Application Load Balancer (ALB) for the frontend tier
- Provisioning an internal Network Load Balancer (NLB) for the backend tier
- Using launch templates and Auto Scaling Groups for high availability
- Configuring scaling policies for both frontend and backend tiers
- Bootstrapping frontend instances with Apache (httpd) via user data

## Architecture

```
                            +---------------------+
                            |      Internet       |
                            +----------+----------+
                                       |
                                       v
                          +------------------------+
                          |  Application Load      |
                          |  Balancer (ALB)        |
                          |  [Public - HTTP/HTTPS] |
                          +-----+------------+-----+
                                |            |
                    +-----------+--+  +------+---------+
                    | Web Tier     |  | Web Tier       |
                    | EC2 (AZ-1)  |  | EC2 (AZ-2)     |
                    | Auto Scaling |  | Auto Scaling   |
                    | Group        |  | Group          |
                    +------+-------+  +-------+--------+
                           |                  |
                           v                  v
                          +------------------------+
                          |  Network Load          |
                          |  Balancer (NLB)        |
                          |  [Private - TCP 3000]  |
                          +-----+------------+-----+
                                |            |
                    +-----------+--+  +------+---------+
                    | App Tier     |  | App Tier       |
                    | EC2 (AZ-1)  |  | EC2 (AZ-2)     |
                    | Auto Scaling |  | Auto Scaling   |
                    | Group        |  | Group          |
                    +--------------+  +----------------+

    +----------------+
    | Bastion Host   |-----> SSH access to private instances
    | (Public Subnet)|
    +----------------+

    Networking: VPC with 2 public + 2 private subnets
                Internet Gateway, NAT Gateway, Route Tables
```

## Prerequisites

- AWS account with permissions for VPC, EC2, ELB, Auto Scaling, NAT Gateway, and IAM resources
- AWS CLI configured with valid credentials
- Terraform (>= 1.0)
- An existing AWS EC2 key pair (update `keyname` in `variables.tf`)

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

### 1. Install Prerequisites on Your Workstation

The `terraform-prerequsites` script can be used to install AWS CLI v2 and Terraform on an Ubuntu machine if needed:
```
chmod +x terraform-prerequsites
./terraform-prerequsites
```

### 2. Configure Variables

1. Open `variables.tf` and update the `keyname` default value to match your AWS key pair name (default: `k8s`).

2. Review the other defaults:
   - `aws_region` -- `us-east-1`
   - `vpc_cidr` -- `10.1.0.0/16`
   - `instance_type` -- `t2.micro`
   - Public subnets: `10.1.1.0/24`, `10.1.2.0/24`
   - Private subnets: `10.1.3.0/24`, `10.1.4.0/24`

### 3. Deploy the Infrastructure

1. Initialize Terraform:
   ```
   terraform init
   ```

2. Preview the resources that will be created:
   ```
   terraform plan
   ```

3. Apply the configuration:
   ```
   terraform apply
   ```
   Type `yes` when prompted. This creates approximately 30 resources.

### 4. Verify the Deployment

1. Get the frontend ALB DNS name from the Terraform outputs:
   ```
   terraform output frontend_alb_dns_name
   ```

2. Open the ALB DNS name in a browser. You should see the "ShopNow Web Application" page displaying the instance hostname and deployment timestamp.

3. Refresh multiple times -- the hostname changes as the ALB distributes traffic across frontend instances in both availability zones.

4. To access backend instances, SSH into the bastion host first, then hop to private instances:
   ```
   ssh -i <your-key>.pem ec2-user@<bastion-public-ip>
   ```

### 5. Understand the Architecture

Review `main.tf` to understand each tier:

- **Networking** (lines 1-110): VPC, 2 public subnets, 2 private subnets, internet gateway, NAT gateway with Elastic IP, public and private route tables.
- **Security Groups** (lines 112-227): Four groups -- external ALB (HTTP/HTTPS from anywhere), internal NLB (TCP 3000), instances (HTTP/HTTPS/SSH), and bastion (SSH).
- **Load Balancers** (lines 229-307): Internet-facing ALB on port 80 for frontend; internal NLB on TCP 3000 for backend.
- **Launch Templates** (lines 309-361): Three templates -- frontend (with `scripts.sh` user data), backend, and bastion. All use Amazon Linux 2 AMI via SSM parameter.
- **Auto Scaling Groups** (lines 363-461): Frontend ASG (2 instances, public subnets), backend ASG (2 instances, private subnets), bastion ASG (1 instance, public subnet).
- **Scaling Policies** (lines 463-496): Step scaling policies (+1/-1 capacity) with 300-second cooldown for both frontend and backend.

### Cleanup

Destroy all resources when finished to avoid ongoing charges:
```
terraform destroy
```

Type `yes` when prompted.

## Project Structure

```
terraform-three-tier-lab/
├── main.tf                  # All infrastructure resources (~496 lines)
│                            #   - VPC, subnets, IGW, NAT, route tables
│                            #   - Security groups (ALB, NLB, instances, bastion)
│                            #   - ALB (frontend), NLB (backend)
│                            #   - Launch templates, ASGs, scaling policies
├── variables.tf             # Input variables (VPC CIDR, subnets, instance type, key pair, region)
├── outputs.tf               # Frontend ALB DNS, backend NLB DNS, bastion ASG name
├── scripts.sh               # User data: installs Apache, creates ShopNow HTML page
└── terraform-prerequsites   # Setup script: installs AWS CLI v2 and Terraform on Ubuntu
```
