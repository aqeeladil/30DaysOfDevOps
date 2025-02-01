# Introduction to Microservices

## 1. Monolithic Architecture and Its Challenges

A **monolithic application** is built as a single unit where all components (e.g., user authentication, shopping cart, product catalog) reside in a single codebase. Deployment, scaling, and updates are handled as one unit.

### **Challenges of Monolithic Architecture**
- **Team Coordination**: Teams working on different components must coordinate to avoid conflicts.
- **Limited Scalability**: Scaling a specific component (e.g., shopping cart) requires scaling the entire application, leading to higher infrastructure costs.
- **Dependency Conflicts**: Different features may require incompatible versions of the same dependency.
- **Slow Release Cycles**: Any change requires testing, building, and deploying the entire application.

## 2. Microservices Architecture

**Microservices** break down an application into smaller, independent services, each responsible for a specific business functionality.

### **Key Characteristics**
- **Business-Oriented**: Services are designed around business functionalities rather than technical layers.
- **Self-Contained**: Each service is independent, deployable, and scalable on its own.
- **Loose Coupling**: Changes to one service do not impact others.

## 3. Communication Between Microservices

### **Synchronous Communication**
- Services communicate via API calls (e.g., HTTP requests, gRPC).
- Example: The user account service sends an HTTP request to the payment service.

### **Asynchronous Communication**
- Uses message brokers like RabbitMQ, Apache Kafka, or AWS SNS/SQS for event-driven communication.
- Example: Services exchange messages through a broker, ensuring decoupling and reliability.

### **Service Mesh**
- A dedicated communication layer (e.g., Istio, Linkerd) manages service-to-service communication, security, and observability.

## 4. Advantages of Microservices

- **Independent Deployment & Scalability**: Each service can be deployed and scaled independently.
- **Technology Flexibility**: Different services can use different programming languages, frameworks, and tools.
- **Faster Release Cycles**: Changes to one service do not require testing and deploying the entire application.
- **Fault Isolation**: Failure in one service does not bring down the entire system.

## 5. Challenges of Microservices

- **Complex Communication**: Requires handling failures, timeouts, and retries.
- **Monitoring & Troubleshooting**: Identifying issues across multiple services can be challenging.
- **Increased Complexity**: Configuration, deployment, and management require robust DevOps practices.

## 6. Managing Microservices Code: Monorepo vs. Polyrepo

### **Monorepo**
A **single repository** contains all microservices, each in separate folders.

**Advantages**
- Easier to manage shared configurations (e.g., Kubernetes manifests, CI/CD pipelines).
- Simplifies collaboration and code reuse.

**Disadvantages**
- Higher risk of tightly coupled logic.
- Performance issues with large repositories.
- Complex CI/CD pipelines to handle service-specific deployments.
- Breaking changes in the main branch can affect all services.

### **Polyrepo**
Each microservice has its own repository.

**Advantages**
- Complete isolation ensures independent development and deployment.
- Individual CI/CD pipelines simplify deployments and testing.

**Disadvantages**
- Managing multiple repositories can be tedious.
- Sharing common files across repositories is challenging.
- Searching or implementing changes across services requires additional coordination.

### Choosing Between Monorepo and Polyrepo

- **Use Monorepo** for **small projects** with a few microservices where ease of management and sharing code is a priority.
- **Use Polyrepo** for **large projects** with independent teams managing services, where isolation and scalability are essential.

## 7. CI/CD Pipelines for Microservices

- Modern applications (e.g., Netflix, Amazon, Google) deploy multiple times daily.
- CI/CD pipelines must handle **frequent releases, independent deployments, and automated testing**.
- Key stages in microservices CI/CD:
  1. **Code Build & Test**: Linting, unit tests, integration tests.
  2. **Containerization**: Docker images built for each microservice.
  3. **Orchestration & Deployment**: Managed via Kubernetes, Helm, or ArgoCD.
  4. **Monitoring & Logging**: Integrated with Prometheus, Grafana, and ELK Stack.

## 8. Tools for Microservices

### **Infrastructure & Orchestration**
- **Kubernetes**: Manages containerized microservices at scale.
- **Helm**: Package management for Kubernetes.

### **Communication & Security**
- **Istio/Linkerd**: Service mesh for managing service-to-service traffic.
- **Vault**: Securely stores and manages secrets.

### **Messaging & Event Processing**
- **RabbitMQ/Kafka**: Message brokers for asynchronous communication.

### **Observability & Monitoring**
- **Prometheus & Grafana**: Real-time metrics and dashboards.
- **ELK Stack**: Centralized logging and analysis.

---

