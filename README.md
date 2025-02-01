# DevOps Essentials

DevOps is a culture, practice, or way of working that enhances an organization's ability to deliver applications efficiently. It streamlines the Software Development Life Cycle (SDLC) by incorporating automation, quality assurance, continuous monitoring, and testing.

### Key Aspects of DevOps:
1. **Improved Delivery Time** – Faster deployment of applications.
2. **Automation of Tasks** – Reducing manual efforts through scripting and tooling.
3. **Maintaining Quality** – Automated processes lead to fewer human errors and better consistency.
4. **Continuous Monitoring (Observability)** – Ensuring system reliability and performance.
5. **Continuous Testing** – Early detection of bugs through automated testing.

### Why DevOps?
Before DevOps, application deployment required multiple teams, including:
- **System Administrators** – Setting up testing servers.
- **Testers** – Validating applications on staging environments.
- **Build & Release Engineers** – Managing production deployment.

This process was slow and required extensive manual intervention. DevOps automates this workflow, making software delivery faster and more efficient.

## Daily Activities of a DevOps Engineer
1. **Containerization** – Using Docker to package applications.
2. **CI/CD Implementation** – Automating workflows using GitHub Actions.
3. **Container Orchestration** – Managing containers with Kubernetes.
4. **Configuration Management** – Using Ansible for automation.
5. **Infrastructure Automation** – Provisioning resources with Terraform.

## Core Phases of SDLC
The goal of SDLC is to deliver a high-quality product efficiently. It consists of the following phases:

1. **Plan** – Gathering requirements from customers, product owners, and business analysts.
2. **Define** – Documenting requirements in a Software Requirements Specification Document (SRSD).
3. **Design**
   - **High-Level Design (HLD)** – Scalability, availability, architecture.
   - **Low-Level Design (LLD)** – Product specifications, responses, technical details.
4. **Build** – Developers write and push code to version control systems like Git.
5. **Test** – Quality Assurance (QA) engineers deploy and validate the application.
6. **Deploy** – Promoting the application to the production environment for end users.

**DevOps Focus Areas**
For a DevOps Engineer, the **Build, Test, and Deployment** phases are crucial, as they provide opportunities to introduce automation.

## Project Management Models in Software Development
1. **Waterfall** – A linear, sequential approach.
2. **Iterative** – Development cycles with repeated testing.
3. **Agile** – Modern industry standard, delivering features in short sprints.

## Virtualization and Hypervisors
- A **hypervisor** is software that allows multiple virtual machines (VMs) to run on a single physical server.
- Examples: VMware, Xen, Oracle VirtualBox.
- Cloud providers use hypervisors to allocate resources efficiently.

## Infrastructure Automation & Scripting
Automating VM provisioning ensures efficiency and consistency. Common tools include:

1. **AWS CLI** – Command-line interface for AWS services.
2. **AWS API** – Automating with Python (`boto3`) or shell scripts.
3. **AWS CloudFormation (CFT)** – Infrastructure-as-Code (IaC) using templates.
4. **AWS CDK** – Cloud Development Kit, a competitor to Terraform.
5. **Terraform** – A multi-cloud IaC tool supporting hybrid cloud environments.

## Authentication & Authorization in DevOps
To create secure infrastructure, access requests should be:
- **Valid** – Must be legitimate.
- **Authenticated** – User identity should be verified.
- **Authorized** – User must have proper permissions.

## Connecting to AWS EC2 via SSH
To access an EC2 instance remotely:
```sh
ssh -i /home/user/Downloads/mykey.pem ubuntu@<EC2-IP-Address>
chmod 600 /home/user/Downloads/mykey.pem  # Set correct permissions for key file
ssh -i /home/user/Downloads/mykey.pem ubuntu@<EC2-IP-Address>
```

## Setting Up an EC2 Instance with Django and PostgreSQL
After launching an EC2 instance, install necessary dependencies:
```sh
sudo apt update && sudo apt upgrade -y
sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl
sudo apt install python3-virtualenv
```

Set up a Python virtual environment and install required packages:
```sh
virtualenv venv
source venv/bin/activate
pip install django gunicorn psycopg2-binary stripe django-environ
```

