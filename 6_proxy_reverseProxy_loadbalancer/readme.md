# Proxies, Reverse Proxies, and Load Balancers:

## 1. What is a Proxy?

A forward proxy acts as an intermediary between your private network (e.g., laptop) and the public internet.

**Functions of a Proxy:**
- Security: Protects internal networks by filtering harmful traffic and blocking malicious websites.
- Caching: Stores commonly accessed data to reduce bandwidth usage (e.g., a shared YouTube tutorial cached for office employees).
- Monitoring: Logs user activity to ensure safe browsing within organizations.

**Example Scenario:**
- A company's IT administrator routes all employee internet traffic through a proxy to:
    - Block shady websites.
    - Scan downloaded files for malware.
    - Cache frequent requests to reduce redundancy.

## 2. What is a Reverse Proxy?

A reverse proxy sits in front of a server or group of servers and manages incoming client requests.

**Functions of a Reverse Proxy:**
- Load Balancing: Distributes traffic among servers to ensure even load distribution.
- Security: 
    - Protects internal servers by acting as the only exposed entry point.
    - Scans for threats and enforces SSL encryption.
- Caching: Speeds up responses by storing frequently accessed content.
- Routing Logic: Directs requests intelligently based on cookies, headers, or session data (e.g., ensuring a user's requests always go to the same server).

**Example Scenario:**
In Kubernetes clusters, an Ingress controller (reverse proxy) handles routing between microservices while ensuring security and efficient request handling.

## 3. Load Balancers vs. Reverse Proxies

**Cloud Load Balancers (e.g., AWS, Azure):**
- First line of defense.
- Distributes traffic to internal networks using simple algorithms (e.g., least connections).

**Reverse Proxies (e.g., Nginx):**
- Work within internal networks.
- Offer fine-grained routing logic based on request details (e.g., user session persistence).
- Handle SSL/TLS termination.

**Why Use Both?**
A layered approach enhances security and scalability:
- Cloud Load Balancers manage external traffic.
- Reverse Proxies handle internal routing and provide advanced functionalities like dynamic load balancing.


## 4. Building a Proxy & Load Balancing Setup

Create a simplified web infrastructure using:
- Forward Proxy: Secure and monitor outgoing traffic.
- Reverse Proxy: Route and balance incoming requests to backend servers.
- Load Balancer: Distribute traffic intelligently among multiple servers.

**Tools Used:**
- Node.js: For creating mock backend servers.
- Nginx: For setting up a reverse proxy and load balancer.
- Squid: For configuring a forward proxy.

### Step 1. Install and configure Squid Proxy Server
```bash
sudo apt update
sudo apt install squid

# Edit the Squid configuration file to allow outgoing requests to specific domains and log traffic for monitoring.
sudo nano /etc/squid/squid.conf

# Example configuration to block social media and allow all else:
acl block_sites dstdomain .facebook.com .instagram.com
http_access deny block_sites
http_access allow all

# Start Squid Service:
sudo systemctl restart squid

# Test Proxy: Configure a browser or curl command to route traffic through the proxy:
curl -x http://<proxy_ip>:3128 http://example.com
```

### Step 2. Use Nginx to configure a reverse proxy and load balancer for backend servers.
```bash
sudo apt install nginx

# Start backend servers:
node server1.js &
node server2.js &

# Configure Nginx as Reverse Proxy and Load Balancer:
# Update Nginx configuration to: distribute traffic between server1 and server2. And cache responses for faster delivery.
sudo nano /etc/nginx/sites-available/default
```
Add the following:
```conf
upstream backend_servers {
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;

    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache my_cache;
    }

    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m inactive=60m;
}
```
```bash
# Restart Nginx:
sudo systemctl restart nginx

# Test the Setup: Open a browser or use curl to access the reverse proxy:
curl http://<nginx_ip>

# Requests will be distributed between server1 and server2.
```