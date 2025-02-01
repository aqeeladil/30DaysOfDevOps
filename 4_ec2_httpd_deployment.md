# Deployiing a Web Application on AWS EC2 Using Apache Server"

## 1. Setup EC2 Instance
- Launch an EC2 Instance:
- Configure security group to allow HTTP (port 80) and SSH (port 22).
- Access the Instance
    `ssh -i "your-key.pem" ubuntu@<EC2_PUBLIC_IP>`

## 2. Install Apache and Git
Update the package list and install Apache and Git:
```bash
sudo apt update
sudo apt install -y apache2 git
```
Ensure Apache is running:
```bash
sudo systemctl enable apache2
sudo systemctl start apache2
```

## 3. Deploy Your Application
1. **Clone your application repository:**
   ```bash
   git clone https://github.com/user/my-project.git
   cd my-project
   ```

2. **Copy files to Apache’s web directory:**
   ```bash
   sudo cp -r . /var/www/html/
   sudo chmod -R 755 /var/www/html/
   ```

3. **Restart Apache to apply changes:**
   ```bash
   sudo systemctl restart apache2
   ```

## 4. Verify Deployment
- Open a web browser and navigate to:
  ```
  http://<EC2_PUBLIC_IP>
  ```
- You should see your web application displayed.

## 5. (Optional) Enable Firewall
If using `ufw` (Uncomplicated Firewall), allow HTTP traffic:
```bash
sudo ufw allow 'Apache'
sudo ufw enable
```

## 6. Troubleshooting
- If the website does not load, check Apache’s status:
  ```bash
  sudo systemctl status apache2
  ```
- Check the Apache error logs:
  ```bash
  sudo tail -f /var/log/apache2/error.log
  ```
- Verify that the correct security group rules are in place for the EC2 instance.



