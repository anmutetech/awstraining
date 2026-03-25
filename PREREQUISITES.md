# Prerequisites

This page covers the tools required across the training modules. Install only what you need for the module you're working on.

> **Windows users:** Most commands in this training use Bash. We recommend installing [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux) and running an Ubuntu distribution inside it. Once WSL is set up, you can follow the Linux instructions below. Alternatively, use the Windows-native install commands shown for each tool.
>
> To install WSL 2, open PowerShell as Administrator and run:
> ```powershell
> wsl --install
> ```
> Restart your machine when prompted, then launch Ubuntu from the Start menu.

## AWS CLI

Skip if already installed.

```bash
# macOS
brew install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Windows (PowerShell)
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

Configure your credentials:

```bash
aws configure
```

Enter your Access Key ID, Secret Access Key, default region (`us-east-1`), and output format (`json`).

Verify:

```bash
aws --version
```

## Docker

Skip if already installed.

```bash
# macOS
brew install --cask docker

# Linux
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# Windows
# Download and install Docker Desktop from https://www.docker.com/products/docker-desktop/
# Enable WSL 2 backend during installation when prompted.
# After installation, open Docker Desktop and ensure it is running.
```

Verify:

```bash
docker --version
```

## kubectl

Skip if already installed.

```bash
# macOS
brew install kubectl

# Linux
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```

```powershell
# Windows (PowerShell)
choco install kubernetes-cli
```

> **Windows note:** If you don't have Chocolatey, install it first from https://chocolatey.org/install. Alternatively, use `winget install Kubernetes.kubectl`.

Verify:

```bash
kubectl version --client
```

## Helm

Skip if already installed.

```bash
# macOS
brew install helm

# Linux
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

```powershell
# Windows (PowerShell)
choco install kubernetes-helm
```

Verify:

```bash
helm version
```

## Terraform

Skip if already installed.

```bash
# macOS
brew tap hashicorp/tap
brew install hashicorp/tap/terraform

# Linux
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
```

```powershell
# Windows (PowerShell)
choco install terraform
```

Verify:

```bash
terraform --version
```

## Node.js

Skip if already installed.

```bash
# macOS
brew install node

# Linux
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

```powershell
# Windows (PowerShell)
choco install nodejs-lts
```

> **Windows alternative:** Download the LTS installer from https://nodejs.org/ and run it.

Verify:

```bash
node --version
npm --version
```

## Java 17 and Maven

Required for the Spring Boot module.

```bash
# macOS
brew install openjdk@17 maven

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install -y openjdk-17-jdk maven
```

```powershell
# Windows (PowerShell)
choco install temurin17 maven
```

Verify:

```bash
java -version
mvn -version
```

## Python 3

Skip if already installed.

```bash
# macOS
brew install python@3.11

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install -y python3 python3-pip python3-venv
```

```powershell
# Windows (PowerShell)
choco install python --version=3.11
```

> **Windows alternative:** Download the installer from https://www.python.org/downloads/ and check "Add Python to PATH" during installation.

Verify:

```bash
python3 --version
pip3 --version
```

> **Windows note:** Use `python` and `pip` instead of `python3` and `pip3` on Windows.

## Ansible

Required for the Ansible module.

```bash
# macOS
brew install ansible

# Linux
pip3 install ansible
```

```powershell
# Windows (PowerShell via WSL)
# Ansible does not run natively on Windows.
# Use WSL 2 (Ubuntu) and run:
pip3 install ansible
```

Verify:

```bash
ansible --version
```

## Jenkins

See `jenkins-userdata.sh` in the root of this repository for automated Jenkins installation on Ubuntu/Debian EC2 instances.

For local development, Jenkins can be run via Docker on any platform:

```bash
docker run -d -p 8080:8080 -p 50000:50000 --name jenkins jenkins/jenkins:lts
```
