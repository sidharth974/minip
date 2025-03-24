# 🚀 Secure vs Insecure Website Showdown! 🔥

This **mini-project** is a **face-off** between a **secure site** (rock-solid HTTPS with SSL) and an **insecure site** (risky HTTP without encryption). 🛡️🔓 It’s time to see the **real** difference between the two! 💀 vs. 🏆

---
## 🌟 Features
✅ **Secure Site** - HTTPS with an SSL certificate 🏅
❌ **Insecure Site** - Plain old HTTP, no encryption 😱
⚡ **Live Demo of Risks** - Witness how hackers can snoop on unprotected sites! 👀

---
## 🔧 Setup Instructions

### 🛠️ Prerequisites
- Node.js / Python (your web server’s best friend!)
- **mkcert** (for generating SSL certificates like a boss 🏗️)
- A local web server (Express.js, Flask, or Apache – pick your fighter! 💪)

### 🚀 Steps to Run
#### 1️⃣ Install mkcert
```sh
brew install mkcert   # macOS 🍏
choco install mkcert  # Windows 🖥️
sudo apt install mkcert # Linux 🐧
```

#### 2️⃣ Create Your Own Local Certificate Authority (CA) 🏦
```sh
mkcert -install
```

#### 3️⃣ Generate SSL Certificates Like a Pro 🎓
```sh
mkcert localhost 127.0.0.1
```
You’ll get `localhost.pem` and `localhost-key.pem` for **top-tier security** 🔐.

#### 4️⃣ Set Up the Secure & Insecure Sites
- **Secure Site** - Runs on HTTPS with SSL 🛡️
- **Insecure Site** - Runs on HTTP, no protection 🚨

#### 5️⃣ Fire Up the Servers! 🔥
Run both sites and compare – **see the magic unfold!** ✨

---
## 📸 Screenshots (Show, Don’t Just Tell!)
👀 **Screenshot 1**: Secure site in action – HTTPS lock icon, valid SSL, all good! ✅🔒
![Screenshot From 2025-03-17 20-32-21](https://github.com/user-attachments/assets/9e3563c2-95ce-49eb-b5a6-c0948cdddf0b)


⚠️ **Screenshot 2**: Insecure site horror – scary browser warnings & NO encryption! 🚨🔓
![Screenshot From 2025-03-17 20-32-36](https://github.com/user-attachments/assets/7f2d2822-be5c-4a80-bd68-db25b2b37dda)


---
## 📜 License
This project is licensed under the **MIT License** – because sharing is caring! 💙

