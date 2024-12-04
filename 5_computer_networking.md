# Networking Fundamentals

## IP Address

An IP address is a unique number assigned to a device within a network to identify it and enable communication. Just as houses have unique addresses, devices in a network need unique IP addresses to track and control access.

#### Types of IP Addressing

1. **IPv4**: IPv4 addresses consist of four bytes (32 bits) represented in the format `X.X.X.X` (e.g., `192.168.0.1`). Each byte (8 bits) ranges from `0–255`. 

IPv4 can theoretically provide 2³² (4.3 billion) unique addresses. However, some ranges are reserved for private use.

**Example:** Decimal to binary conversion.
```bash
172.32.16.1
172  |  32  |  16  | 1
128+0+32+0+8+4+0+0 | 0+0+132+0+0+0+0+0  | 0+0+0+16+0+0+0+0  | 0+0+0+0+0+0+1+0
10101100 | 00100000  | 00010000  | 00000010
```

**Why only up to 255?**
- Computers store data in binary.
- Each octet is 8 bits (1 byte): 2^8 - 1 = 255.

2. **IPv6:** A 128-bit address designed to solve the IPv4 address exhaustion problem. 
Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

#### Why Unique Addresses are Needed:

- To monitor specific device activities.
- To allow/block specific devices from accessing resources or websites.

_______________________________________________________________________________________________

## Subnets and Subnetting

A subnet is a smaller segment of a larger network. Subnetting divides a network into multiple parts to improve security, optimize resource usage (IP addresses are allocated only as needed) and isolate network traffic.

**Example Use Case:** In an office network, one subnet can handle finance-related activities with sensitive data. Another can be used for general employee access. If a device in the general subnet is compromised, the sensitive subnet remains secure.

**Types of Subnets:**
- Private Subnet: No internet access. Example: Internal company resources.
- Public Subnet: Can access the internet. Example: Web servers.

_______________________________________________________________________________________________

## CIDR (Classless Inter-Domain Routing) Notation

CIDR is a method to allocate IP addresses efficiently and define the size of a subnet.

IP Address/Prefix Length (e.g., `192.168.0.0/24`).

The prefix length (/24) indicates the number of bits reserved for the network. The remaining bits are for host devices. It means, the first 24 bits will remain static, and the remaining 8 bits will be available to the upcoming host traffic on the network.

Example:
```bash
/24 = 256 addresses (2^8).

/30 = 4 addresses (2^2).
```

**Calculating Addresses from CIDR:**
```bash
Number of IPs = 2 ^ (32 − prefix length)
 
/26 → 32 − 26 = 6, 2^6 =64 addresses.
```

**Use Case: 1**
```bash
A network has 65,000 IPs and needs two subnets:

# Finance Subnet: Requires 256 IPs.
IPs: 192.168.1.0 – 192.168.1.255.
CIDR: 192.168.1.0/24.

# General Subnet: Needs remaining IPs.
Remaining IPs.
```

Use Case: 2
```bash
# Restricting Private IPs

Use private IP ranges:
10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.

Avoid public ranges (e.g., 8.8.8.8 is Google’s public DNS).
```
______________________________________________________________________________________________

## Ports

A port is a communication endpoint for applications on a device. Different applications on the same device use different ports to avoid conflicts.

**Port Range**
- Well-Known Ports: 0–1023 (Reserved for standard services (e.g., HTTP on 80, HTTPS on 443)).
- Registered Ports: 1024–49151 (Used by third-party apps).
- Dynamic/Private Ports: 49152–65535 (Temporary ports for client-side apps).

**Common Ports:**
- HTTP: Port 80
- HTTPS: Port 443
- MySQL: Port 3306
- Custom Applications: Ports like 9000, 8080.

**Accessing Applications via IP and Port:**
- Public IP: 192.168.0.10
- Application Port: 8080
- Access URL: 192.168.0.10:8080

______________________________________________________________________________________________

## DNS Resolution:

The Domain Name System (DNS) maps human-readable domain names (e.g., `www.google.com`) to their corresponding IP addresses (e.g., `8.8.8.8`).

The browser/router checks the local cache for a record. If not found, it queries the Internet Service Provider (ISP)'s DNS server. This ensures the domain exists and is associated with an IP address. Without a successful DNS resolution, the request cannot proceed.

____________________________________________________________________________________________

## TCP Handshake:

A three-way handshake ensures a reliable connection between the client and the server.

- Client sends a "SYN" (synchronize) message. 
- Server responds with "SYN-ACK" (synchronize-acknowledge) to show readiness.
- Client replies with "ACK" (acknowledge).
- Once completed, the client and server are ready to exchange data.
- If the handshake fails, the connection cannot be established.

___________________________________________________________________________________________

## OSI Model

The OSI (Open Systems Interconnection) model is a conceptual framework used to understand how data is transferred over a network. It divides the process of communication between devices into seven layers, each with distinct responsibilities.

```bash
# Layer 7: Application Layer
- Handles user interaction and application protocols (e.g., HTTP, FTP).
- Example: When you type www.google.com in your browser, it initiates an HTTP/HTTPS request to the Google server.

# Layer 6: Presentation Layer
- Formats and encrypts data to ensure secure transmission.
- Example: If HTTPS is used, the data is encrypted at this layer to ensure security during transit.

# Layer 5: Session Layer
- Establishes and manages sessions between devices.
- Establishes, maintains, and terminates sessions between two systems.
- Ensures that sessions remain active, even if multiple requests are made over time.
- Example: Your browser maintains a session with the server to avoid repeated logins (e.g., for online banking or social media).

# Key Insight: Layers 7, 6, and 5 are handled by your browser.

# Layer 4: Transport Layer
- Ensures reliable data transfer by segmenting the data and selecting the appropriate protocol.
- Divides large data streams into smaller segments for transmission.
- Chooses between TCP or UDP.
- Ensures data integrity and handles retransmission in case of errors.
- TCP (Transmission Control Protocol): Reliable, connection-oriented. For example: Online payment transaction.
- UDP (User Datagram Protocol): Faster, less reliable, connectionless. For example: Live match transmission.
- Example: For an HTTP request, the transport layer uses TCP to ensure reliable delivery of data.

# Layer 3: Network Layer
- Handles logical addressing and routing through IP addresses.
- Adds source and destination IP addresses to data, converting it into packets.
- Example: Routers determine the best path for packets to reach their destination (e.g., from your home to Google servers).

# Layer 2: Data Link Layer
- Converts packets into frames for transmission over the physical medium.
- Adds MAC (Media Access Control) addresses to frames, allowing communication between devices on the same network.
- Manages error detection and correction for data sent over physical links.
- Example: Switches use MAC addresses to deliver frames within the local network.

# Layer 1: Physical Layer
- Transmits data as electrical signals, light pulses, or radio waves over the physical medium.
- Converts frames into signals suitable for transmission.
- Manages the physical connection between devices (e.g., cables, switches).
- Example: Data is transmitted over Ethernet cables as electrical signals or over optical fibers as light pulses.
```

**When data is received by the server (e.g., Google), it follows the OSI model in reverse:**
```bash
Layer 1: Data arrives as electrical signals via cables.
Layer 2: Signals are converted into frames.
Layer 3: Frames are converted into packets, and the IP address is read.
Layer 4: TCP ensures all data segments are received and reassembled.
Layer 5-7: The server decrypts the data, validates the session, and processes the HTTP request.
```

________________________________________________________________________________________

## OSI vs. TCP/IP Model

The TCP/IP model simplifies the OSI model by combining certain layers:
- **Application Layer:** Combines OSI Layers 5, 6, and 7.
- **Transport Layer:** Equivalent to OSI Layer 4.
- **Internet Layer:** Equivalent to OSI Layer 3.
- **Network Access Layer:** Combines OSI Layers 1 and 2.

While the TCP/IP model is widely used, understanding the OSI model provides deeper insights into data transmission.

____________________________________________________________________________________________



