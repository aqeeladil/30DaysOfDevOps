# Topic __ Containers, Docker


## Problem Statement :
- Developer: It works on my machine.
- Production Team: It is not working properly in the production environment.

## Docker Zero to Hero.
You can refer to theis repo for detailed explanation. -> https://github.com/iam-veeramalla/Docker-Zero-to-Hero


### Intro to Containers
- Containers are an advancement to virtual machines.
- Physical servers vs Vms vs Containers
- Container only take resources from a system that are required to deploy an app onto a server. 
- While hypervisors take OS-level resources from the system. This means VMs consume OS-level resources which is a costly option. While docker consumes fewer resources and is lighter in weight. 
- Most of times Vm's/Ec2 instances waste lot of resources. 
- Vm's have a complete operating system. so they are heavy in size and use more resources . Due to this they are more secure than containers. 
- A container is a base image/ package which is a combination of  application + application libraries + system libraries. 
- Containers don't have a complete OS. they run on host OS and use the resources from the host OS. But if a container is not running, it don't use resources from kernel (host os). 
- Although docker containers use system resources from host os (kernel), but each container is logically isolated from other conatiners.
- Containers are light weight & easy to ship/move. 
- To create a docker image for a python_flask app. I need resources like Ubuntu, apache, packages, dependencies, etc in that image.
- A docker image is a blueprint, with the help of which a docker container is made.



### Docker
- Docker allows you to have an absolutely sealed, air-tight container. And these containers are the absolute heart of docker.
- These containers wrap up your entire code and these are absolutely portable. This means where ever you put these containers it will work exactly the same as it works on your local machine.
- Docker also allows you to have social containers. This means you can publish these containers onto a social platform (Docker-Hub).
- It's a client-side application program. You can put in it whatever you want and move anywhere.
- It also acts like a service and can be deployed onto any server. This means you can take your container and deploy it on any server.
- It also acts as a social networking platform (Docker-Hub) where you can share your docker image.
- Docker is very much dependent on Docker engine (daemon) to execute docker files, build docker image & finally run a docker container.
- Docker Engine is a single point of failure. If it is down, all your docker containers will stop working.
- BUILDAH solves this problem of Docker Engine. In buildah tool you don't have to write docker files. You will simply add buildah commands in a shell script, and it will create a docker image for you.


### DockerHub:
- Dockerhub is a repository same as GitHub where docker images are shared and published. 

















