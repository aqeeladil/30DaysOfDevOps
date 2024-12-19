# Introduction to Microservices

## 1. Monolithic Architecture and Its Challenges

- A monolithic application is built as a single unit where all components, such as user authentication, shopping cart, product catalog, etc., reside in a single codebase.
- Deployment, scaling, and updates are handled as one unit.

**Challenges of Monolithic Architecture:**
- Team Coordination: Teams working on different components must coordinate to avoid affecting each other’s work.
- Limited Scalability: Scaling individual components (e.g., shopping cart) requires scaling the entire application. Leads to higher infrastructure costs.
- Dependency Conflicts: Different features may require incompatible versions of the same dependency.
- Slow Release Cycles: Any change requires testing, building, and deploying the entire application.

## 2. Microservices Architecture

- Microservices break down an application into smaller, independent services, each responsible for a specific business functionality.
- Examples: Separate services for products, shopping cart, user accounts, and payments.

**Key Characteristics**
- Business-Oriented: Services are based on business functionalities, not technical functionalities.
- Self-Contained: Each service is independent, deployable, and scalable on its own.
- Loose Coupling: Changes to one service do not affect others.

## 3. Communication Between Microservices

**Synchronous Communication**
- Services communicate via API calls (e.g., HTTP requests).
- Example: User account service sending an HTTP request to the payment service.

**Asynchronous Communication**
- Uses message brokers like RabbitMQ to mediate communication.
- Example: Services exchange messages through the broker.

**Service Mesh**
- A dedicated communication layer (e.g., Istio) manages service-to-service communication.

## 4. Advantages of Microservices

- Independent deployment and scalability.
- Flexible technology stack: Different services can use different programming languages and tools.
- Faster release cycles as changes to one service do not require testing and deploying others.

## 5. Challenges of Microservices

- Complex Communication: Requires handling failures, downtime, and retries.
- Monitoring and Troubleshooting: Identifying and addressing issues across multiple services can be challenging.
- Increased Complexity: Configuration, deployment, and management are more complex compared to monolithic applications.

## 6. Managing Microservices Code: Monorepo vs. Polyrepo

### Monorepo
- Single repository for all microservices.
- Code for each service is stored in separate folders within the repository.

**Advantages**
- Easier to clone, manage, and share common files (e.g., Kubernetes manifests).
- Simplifies collaboration and code reuse.
**Disadvantages**
- Higher risk of tightly coupled logic.
- Performance issues with large repositories.
- Single CI/CD pipeline requires additional logic to manage changes for individual services.
- Breaking the main branch affects all services.

### Polyrepo
- Separate repositories for each microservice.

**Advantages**
- Complete isolation of services ensures independence.
- Individual CI/CD pipelines for each service simplify deployments.
**Disadvantages**
- Managing multiple repositories can be tedious.
- Sharing common files across repositories is challenging.
- Searching or implementing changes across services can be complex.

## 7. Choosing Between Monorepo and Polyrepo

**Use Monorepo**
- For small projects with a few services.
- When ease of management and sharing code is a priority.

**Use Polyrepo**
- For large projects with independent teams managing services.
- When complete isolation and smaller codebases are essential.

## 8. CI/CD Pipelines for Microservices

- Modern applications with microservices (e.g., Netflix, Amazon, Google) deploy multiple times daily.
- CI/CD pipelines need to handle frequent releases, independent deployments, and testing.

## 9. Tools for Microservices

**HashiCorp Tools**
- Terraform: Infrastructure provisioning.
- Vault: Secret management.
- Consul: Service mesh for secure communication.

**Other Tools**
- Kubernetes: Ideal for managing large-scale microservices applications.





