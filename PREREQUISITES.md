# Prerequisites

This page covers the tools required across the training modules. Install only what you need for the module you're working on.

## AWS CLI

Skip if already installed.

```bash
# macOS
brew install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
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

Verify:

```bash
python3 --version
pip3 --version
```

## Ansible

Required for the Ansible module.

```bash
# macOS
brew install ansible

# Linux
pip3 install ansible
```

Verify:

```bash
ansible --version
```

## Jenkins

See `jenkins-userdata.sh` in the root of this repository for automated Jenkins installation on Ubuntu/Debian EC2 instances.
