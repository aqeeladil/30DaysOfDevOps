# Deployiing a Web Application on AWS EC2 Using Apache Server"

1. **Setup EC2 Instance**
- Launch an EC2 Instance:
- Configure security group to allow HTTP (port 80) and SSH (port 22).
- Access the Instance
```bash
ssh -i "your-key.pem" ubuntu@<EC2_PUBLIC_IP>
```

2. **Install Apache Web Server**
```bash
sudo apt update
sudo apt install git apache2 -y
```

3. **Deploy Your Application**
```bash
git clone https://github.com/user/my-project.git
cd my_project

# Apache serves content from the /var/www/html directory
sudo cp -r . /var/www/html/
sudo chmod -R 755 /var/www/html/

# Start and Enable Apache
sudo systemctl enable apache2
sudo systemctl start apache2
```

4. **Verify Deployment**
Open your browser at ```http://<EC2_PUBLIC_IP>```


