# 🥕 Agrofix - Bulk Vegetable & Fruit Order Platform

Agrofix is a full-stack web application that allows buyers to place bulk orders for fresh vegetables and fruits, while providing an admin dashboard to manage inventory and track orders efficiently.

🚀 **Live Demo**: (https://agrofix-client.vercel.app/)

## 📌 Features

### 🛍️ Buyer Features
- Browse fresh vegetable and fruit products
- Place bulk orders with quantity selection
- Track order status using Order ID

### 🧑‍💼 Admin Features
- Secure admin login
- View and manage all orders (Pending, Processing, Delivered)
- Add, edit, and delete products from the catalog

## 🧱 Tech Stack

- **Frontend**: React.js, Styled Components, Axios  
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL (hosted on Neon or Railway)  
- **ORM**: Prisma  
- **Hosting**: Vercel (Frontend) + Railway/Render (Backend)

## 🛠️ Local Setup Instructions

1. **Clone the Repo**  
   git clone https://github.com/your-username/agrofix-client.git  
   cd agrofix-client

2. **Install Dependencies**  
   npm install

3. **Create `.env` File**  
   Inside the root of the `client` folder, add:

   REACT_APP_API_URL=https://your-backend-url.onrender.com

4. **Run Locally**  
   npm start

## 🔐 Admin Credentials

Username: admin  
Password: admin123

> These credentials are hardcoded for demo/demo evaluation purposes.

## 📂 Folder Structure

client/  
├── src/  
│   ├── components/  
│   ├── pages/  
│   ├── ProductList.js  
│   ├── OrderForm.js  
│   └── ...  
├── public/  
│   └── index.html  
├── package.json  
└── README.md

## ✨ Screenshots
![Screenshot 2025-04-20 033130](https://github.com/user-attachments/assets/f33c6c66-41bc-4ff4-ab87-886e6bf16986)

![Screenshot 2025-04-20 033147](https://github.com/user-attachments/assets/17a0d76a-2646-4ede-b5cc-3dbe6b99e63c)

![Screenshot 2025-04-20 033202](https://github.com/user-attachments/assets/d9f3ef0f-b43c-4037-b63c-ce402a8a8232)

![Screenshot 2025-04-20 033216](https://github.com/user-attachments/assets/4bcf3893-edd5-4599-a1ce-9ba50975a73c)

![Screenshot 2025-04-20 033227](https://github.com/user-attachments/assets/c4e7b183-4076-4475-abf2-b6b0314dd72d)

![Screenshot 2025-04-20 033245](https://github.com/user-attachments/assets/88cfc3de-4243-4316-902c-4a4be49027de)

![Screenshot 2025-04-20 033254](https://github.com/user-attachments/assets/c8c9e4de-e23c-458a-ab0d-3c735996f16b)

![Screenshot 2025-04-20 033310](https://github.com/user-attachments/assets/a3fb03d7-a647-4dec-94b4-5fd66c7a52f8)

## 💬 Feedback

If you have any suggestions or feedback, feel free to raise an issue or contact me on LinkedIn(https://www.linkedin.com/in/karthikeya-reddy-bommireddy/).

## 📄 License

This project is for educational and internship evaluation purposes.
