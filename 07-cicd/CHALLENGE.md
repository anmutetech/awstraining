# Phase 7 Challenges

These challenges test your skills from this phase. No step-by-step instructions -- use what you've learned.

---

## Challenge 1: GitHub Actions for Terraform

Create a GitHub Actions workflow that runs `terraform plan` on pull requests and `terraform apply` on merges to the `main` branch. The workflow should be safe, requiring human approval before any infrastructure changes are applied.

### Acceptance Criteria

- A workflow file (`.github/workflows/terraform.yml`) triggers on pull requests and pushes to `main`.
- On pull requests: the workflow runs `terraform init` and `terraform plan`, and posts the plan output as a PR comment.
- On pushes to `main`: the workflow runs `terraform init` and `terraform apply -auto-approve`.
- AWS credentials are stored as GitHub repository secrets (not hardcoded).
- The workflow uses a specific Terraform version (pinned, not `latest`).
- The plan step fails the PR check if `terraform plan` exits with an error.
- The workflow uses a working directory that points to one of the Terraform projects in this repo.

### Hints

- Use the `hashicorp/setup-terraform` GitHub Action to install a specific Terraform version.
- Use `if: github.event_name == 'pull_request'` and `if: github.ref == 'refs/heads/main'` to conditionally run plan vs. apply steps.

---

## Challenge 2: Ansible Deployment Playbook

Write an Ansible playbook that deploys the calculator app to 3 EC2 instances behind an Application Load Balancer. The playbook should handle application installation, configuration, and health verification.

### Acceptance Criteria

- An inventory file defines 3 target EC2 instances (IP addresses or hostnames) in a group called `app_servers`.
- The playbook installs Node.js and required dependencies on all target hosts.
- The playbook copies the calculator app source code to each instance and installs npm dependencies.
- The application is started using a process manager (systemd service or PM2).
- A health check task verifies the application is responding on each host after deployment.
- The playbook is idempotent: running it a second time makes no changes if the app is already deployed and running.
- A separate task or role registers each instance with the ALB target group (or documents the manual step).

### Hints

- Use the `uri` module to perform HTTP health checks against each host after deployment.
- Use `become: yes` for tasks that require root privileges (package installation, systemd service management).
