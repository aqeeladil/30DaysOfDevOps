# Topic ___ DevOps, SDLC, Virtualization, Ec2


### What is DevOps (SDLC in an efficient manner)
1. Improving Delivery time
2. Proper Automation of tasks 
3. Maintaining Quality (with automation comes quality due to less manual intervention)
4. Continuous Monitoring (observability) (to maintain the quality) 
5. Continuous Testing

### DevOps is a culture/practice or a way of working. It adds efficiency to the organizations ability to deliver the application.
- Devops is the process of improving the application/script delivery (or making your delivery quicker) by ensuring that there is proper automation, ensuring that the quality is in place, that you have set up adequate monitoring, and you have continuous testing.

### Why DevOps?
- Sys Admin creates the testing server
- Tester tests the application on that server and push to the pre-production server(staging)
- Build&Release engineer than take it to prdouction.
- 10 years ago, before DevOps, multiple parties (sys admin, build&release engineer, server admin etc.) were working closely and carrying out manual effort to deliver the application from the developer laptop to the production server and ultimately to the customer.
- But it was a slow process. 
- Devops came to automate this manual delivery process and to make the delivery fast.

### Daily Activities
1. Containerization using Docker
2. For the CICD I use GitHub actions
3. Kubernetes for Container Orchestration. 
4. Configuration management using Ansible. 
5. Infrastructure Automation using Terraform


#####################################################################################


### Core Phases of SDLC (The end goal is to deliver a high-quality product)
- Design 
- Develop
- Test

### The SDLC is a process that is followed by the industry to design, develop and test a high-quality product.
1. Plan 
   - gather the requirements. 
   - input from customers.
   - Product Owner, Business Analyst.
2. Define
   - Documenting the requirements.
   - SRSD _Software Requirement Specification Document.
3. Design 
   - High-Level Design _i.e_Scalablility, Availability, etc.
   - Low-Level Design_i.e_Product Specifications, Responses, etc.
   - Architect, Team Lead.
4. Build
   - Developer writes code & push it to source code repository like Git.
5. Test
   - The application from the git repository is taken and deployed on a server by Quality Assurance Engineer for testing purposes.
6. Deploy
   - Application promoted to the production server for customer use


### For a DevOps Engineer, Building, Testing & Deployment phases are the most important ones. Here you can bring automation.



####################################################################################


### Project Management
There are different project management models of Software Development.
1. Waterfall
2. Iterative
3. Agile
   - These days Agile model is popular in the industry.
   - Delivering the product in short springs.



######################################################################################


### Hypervisor
- We install a hypervisor on a physical server.
- A hypervisor is software that can install a virtual machine on a physical server. Basically, the hypervisor logically separates the server into multiple partitions as needed.
- Examples of hypervisor includes Vmware, Xen, Oracle VB etc. These logical servers are independent of each other in terms of hardware, memory or CPU. 
- The same concept is followed by any cloud platform. Basically, all cloud platforms operate through hypervisors through which VMs are created. 
- Hypervisors help save the unutilized resources on our server.

### Cloud Platforms
1. Ec2 (a virtual machine service inside the Aws console)
2. VM (a virtual machine service inside the Azure portal)

### Scripting
- Here we can automate this process of creating VM's with the help of a script. And this script will run every time when there is a request to create a VM. Scripts can be written for different scenarios. 

### Scripts can be written through Infrastructure Automation tools like:

1. Aws CLI
2. Aws API 
   - boto3
   - automating through shell/python scripts
3. Aws CFT
   - Cloud formation template
   - a collection of templates for creating resources on aws
4. Aws CDK
   - Cloud Development Kit
   - competitor of terraform ___much better than terraform if your organization is solely focused on Aws.
5. Terraform
   - it can be used on multiple cloud platforms
   - Companies nowadays follow a hybrid approach in the utilization of cloud resources/services depending on their requirements

### Now, who can make such a request?
  - It should be Valid
  - Authentic (user should have access)
  - Authorized (user had the permission to access)

### To increase efficiency, you can use a terminal on your local machine to access Aws console.
  - MacOS (iTerm)
  - Windows (MobaXTerm, NoMachine, Putty) 

### How to connect to ec2 console from a remote server using ssh client
- ssh -i /home/user/Downloads/mykey.pem ubuntu@54.196.38.161
- chmod 600 /home/user/Downloads/mykey.pem 
- ssh -i /home/user/Downloads/mykey.pem ubuntu@54.196.38.161

### After creating an Ec2-instance (django, postgresql)
- sudo apt update && sudo apt upgrade -y
- sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl
- sudo apt install python3-virtualenv
- virtualenv venv
- source venv/bin/activate
- pip install django gunicorn psycopg2-binary stripe django-environ



### Aws CLI 
- msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi  (to install aws cli)
- aws --version   (to verify the installation)

- Use or create a new Access Key from Security Credentials section to access Aws CLI.
- read documentation for aws cli commands.


### Aws CFT (Cloud formation template)
- https://github.com/aws-cloudformation/aws-cloudformation-templates
- https://github.com/awslabs/aws-cloudformation-template-formatter



  

 



