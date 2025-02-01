# Networking Fundamentals

## IP Address

An IP address is a unique identifier assigned to a device within a network to enable communication. Just as houses have unique addresses, devices in a network require unique IP addresses for identification and data transfer.

### Types of IP Addressing

#### 1. IPv4
IPv4 addresses consist of four bytes (32 bits) represented in the format `X.X.X.X` (e.g., `192.168.0.1`). Each byte (8 bits) ranges from `0–255`.

IPv4 theoretically provides **2³² (4.3 billion)** unique addresses. However, some ranges are reserved for private use.

**Example:** Decimal to binary conversion.
```bash
172.32.16.1
172  |  32  |  16  |  1
128+0+32+0+8+4+0+0 | 0+0+132+0+0+0+0+0  | 0+0+0+16+0+0+0+0  | 0+0+0+0+0+0+1+0
10101100 | 00100000  | 00010000  | 00000001
```

**Why only up to 255?**
- Computers store data in binary.
- Each octet is 8 bits (1 byte): `2^8 - 1 = 255`.

#### 2. IPv6
IPv6 is a **128-bit** address designed to overcome IPv4 address exhaustion.
Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

### Importance of Unique IP Addresses
- Monitor device activities.
- Allow/block specific devices from accessing resources.

## Subnets and Subnetting

A **subnet** is a smaller segment of a larger network. **Subnetting** divides a network into multiple segments to enhance security, optimize resource allocation, and isolate network traffic.

**Example Use Case:**
- A company may use one subnet for finance (handling sensitive data) and another for general employees.
- If an attack occurs in one subnet, others remain protected.

### Types of Subnets
- **Private Subnet:** No direct internet access. Example: Internal company servers.
- **Public Subnet:** Can access the internet. Example: Web servers.

## CIDR (Classless Inter-Domain Routing) Notation

CIDR allocates IP addresses efficiently and defines subnet sizes.

**Format:** `IP Address/Prefix Length` (e.g., `192.168.0.0/24`).

- The prefix length (`/24`) indicates the number of bits reserved for the network.
- The remaining bits are available for host devices.

**Calculating IP Addresses from CIDR:**
```bash
Number of IPs = 2 ^ (32 - prefix length)


/24 = 256 addresses (2^8).

/26 = 64 addresses (2^6).

/30 = 4 addresses (2^2).
```

### Example Use Cases
**1. Allocating Subnets in a Large Network**
```bash
Finance Subnet: Requires 256 IPs.
IPs: 192.168.1.0 – 192.168.1.255.
CIDR: 192.168.1.0/24
```
**2. Restricting Private IPs**
Use private IP ranges:
- `10.0.0.0/8`
- `172.16.0.0/12`
- `192.168.0.0/16`

## Ports

A **port** is a communication endpoint for applications. Different applications use different ports to avoid conflicts.

### Port Ranges
- **Well-Known Ports (0–1023):** Reserved for standard services (e.g., HTTP: 80, HTTPS: 443).
- **Registered Ports (1024–49151):** Used by third-party apps.
- **Dynamic/Private Ports (49152–65535):** Temporary ports for client-side applications.

### Common Ports
| Service  | Port  |
|----------|-------|
| HTTP     | 80    |
| HTTPS    | 443   |
| MySQL    | 3306  |
| Custom Apps | 9000, 8080 |

### Accessing Applications via IP and Port
```bash
Public IP: 192.168.0.10
Application Port: 8080
Access URL: http://192.168.0.10:8080
```

## DNS Resolution

The **Domain Name System (DNS)** maps domain names to IP addresses.

### How DNS Works:
1. Browser/router checks local cache.
2. If not found, it queries the ISP’s DNS server.
3. The ISP’s DNS server retrieves the correct IP address.
4. The request proceeds if the domain is valid.

## TCP Handshake

A **three-way handshake** establishes a reliable connection between a client and a server.
1. **SYN**: Client requests a connection.
2. **SYN-ACK**: Server acknowledges.
3. **ACK**: Client confirms.

If any step fails, the connection cannot be established.

## OSI Model

The **OSI (Open Systems Interconnection) model** explains how data is transferred over a network through **seven layers**.

### OSI Layers Explained

| Layer | Name                | Function |
|-------|---------------------|----------|
| 7     | Application Layer   | User interaction, HTTP, FTP, SMTP |
| 6     | Presentation Layer  | Data encryption & formatting (e.g., SSL/TLS) |
| 5     | Session Layer       | Manages sessions between applications |
| 4     | Transport Layer     | Ensures data integrity (TCP/UDP) |
| 3     | Network Layer       | Logical addressing (IP) and routing |
| 2     | Data Link Layer     | MAC addressing, error detection |
| 1     | Physical Layer      | Physical transmission of data |

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

### OSI vs. TCP/IP Model

The **TCP/IP model** simplifies OSI:

| OSI Model            | TCP/IP Model       |
|----------------------|------------------|
| Application (7, 6, 5) | Application       |
| Transport (4)        | Transport         |
| Network (3)         | Internet          |
| Data Link + Physical (2, 1) | Network Access |

Understanding OSI helps in diagnosing network issues and securing data transmission.

---

