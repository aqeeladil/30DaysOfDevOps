# Shell Scripting Guide

## Operating System
- The **Operating System (OS)** acts as an intermediary between software applications (e.g., Python, Jenkins, Chrome) and hardware components (CPU, RAM, I/O devices).
- **Linux** is open-source, secure, and fast.
- The **Kernel** is the core of the OS, responsible for:
  - Device management
  - Memory management
  - Process management
  - Handling system calls

## Useful Linux Commands
```bash
ls        # List files
ls -la    # List all files with details
ls -ltr   # List sorted by modification time
cp        # Copy files
mv        # Move/rename files
vim       # Open Vim editor
pwd       # Print working directory
cd        # Change directory
mkdir     # Create a new directory
rm -rf    # Remove files/directories forcefully
cat file  # Display file contents
vi file   # Open file in Vi editor
touch file # Create an empty file
echo 'Hello World' >> file # Append text to file
bash --version # Check Bash version
date      # Display date and time
top       # Display active processes
free -g   # Display memory usage in GB
nproc     # Show number of processors
lscpu     # Display CPU architecture info
htop      # Interactive process viewer
cat /proc/cpuinfo # Show CPU details
df -h     # Show disk space usage
history   # Show command history
clear (ctrl + L) # Clear terminal
man <command> # Display command manual
```

### Process Management
```bash
ps -ef   # List all running processes
ps -ef | grep "python"  # Filter processes containing 'python'
ps -ef | grep "python" | awk '{print $2}'  # Extract process IDs
kill -9 <pid>  # Force kill process by ID
```

### File Search and Download
```bash
find / -name requirements.txt  # Find a file in the system
curl google.com  # Fetch website content
wget google.com  # Download a file
```

### Wget vs Curl
- **wget** downloads files and allows offline processing.
- **curl** fetches data directly from an API or web server.

### Linux Signals
- `trap` captures signals like `Ctrl + C` and executes custom actions.
```bash
trap "echo 'Don't use Ctrl+C'" SIGINT
trap "rm -rf *" SIGINT  # Caution: Deletes everything if Ctrl+C is pressed
```

### Shebang (`#!`) in Shell Scripts
- `#!/bin/bash` (Preferred)
- `#!/bin/sh` (Might refer to `dash` on some systems, not `bash`)

### File Permissions
```bash
chmod +x script.sh  # Make script executable
chmod 777 script.sh  # Full permissions for everyone
```

## Loops and Conditions

```bash
# If-Else Condition

a=2
b=3

if [ "$a" -gt "$b" ]; then
    echo "a is greater"
else
    echo "b is greater"
fi
```

```bash
# For Loop

for i in {1..100}; do
    echo "$i"
done
```

## Debugging a Shell Script
```bash
set -x  # Enable debugging
set -e  # Exit on error
set -o pipefail  # Exit if a command in a pipeline fails
```

## Job Scheduling with Crontab
```bash
crontab -e  # Edit crontab
*/5 * * * * /path/to/script.sh >> /path/to/output.txt  # Run script every 5 minutes
crontab -l  # List scheduled jobs
```

## Example Scripts
### 1. Check System Health
```bash
#!/bin/bash
# Check memory, disk space, and CPU count
set -x
set -e
set -o pipefail
df -h
free -g
nproc
```

### 2. Numbers Divisible by 3 & 5 but Not 15
```bash
#!/bin/bash
for i in {1..100}; do
    if (( i % 3 == 0 || i % 5 == 0 )) && (( i % 15 != 0 )); then
        echo "$i"
    fi
done
```

### 3. Count 'S' in "Mississippi"
```bash
#!/bin/bash
word="mississippi"
echo "$word" | grep -o "s" | wc -l
```

---

