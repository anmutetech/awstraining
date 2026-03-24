# Ansible -- Deploy Java Petclinic Application

This module demonstrates how to use Ansible to automate the deployment of a Java Spring Boot application (Petclinic) on Ubuntu web servers with Nginx as a reverse proxy.

## What This Module Covers

- Writing an Ansible playbook to provision and configure remote servers
- Defining an inventory file with host groups and SSH connection details
- Installing packages (Java 17, Maven, Git, Nginx) via the `apt` module
- Cloning a Git repository and building a Java application with Maven
- Creating a systemd service to run the application as a background process
- Configuring Nginx as a reverse proxy to forward traffic to the app

## Prerequisites

- Ansible installed on your control machine
- SSH access to one or more Ubuntu target servers
- SSH key pair configured for passwordless authentication
- Basic understanding of YAML syntax

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

1. **Review the inventory file** (`inventory.ini`). Update the `ansible_host`, `ansible_user`, and `ansible_ssh_private_key_file` values to match your target servers.

2. **Test connectivity** to your servers:
   ```bash
   ansible -i inventory.ini webservers -m ping
   ```

3. **Review the playbook** (`deploy_app.yml`). Note the key tasks:
   - Installs Java 17, Maven, Git, and Nginx
   - Clones the Spring Petclinic repository to `/opt/petclinic`
   - Builds the JAR with Maven
   - Creates a systemd service so the app starts automatically
   - Configures Nginx to proxy port 80 to the app on port 8080

4. **Run the playbook**:
   ```bash
   ansible-playbook -i inventory.ini deploy_app.yml
   ```

5. **Verify the deployment** by opening your server's IP address in a browser on port 80. You should see the Petclinic application.

## Project Structure

```
Ansible/
├── README.md
├── deploy_app.yml       # Ansible playbook to deploy the Petclinic app
└── inventory.ini        # Inventory file defining target hosts
```
