# Instagram Mini Clone

This is a full-stack Instagram-style mini application built using the MERN stack.
The project includes user authentication, posts, likes, comments, follow system,
and a basic feed similar to Instagram.

---

## Demo Users (for testing)

You can use the following users to test the application:

1. Email: shreya@test.com  
   Password: 54321  
2. Email: user@test.com  
   Password: 11111  
3. Email: adarsh@test.com  
   Password: 12345  

Each user has existing posts and can interact with other users.

---
## Tech Stack Used

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Fetch API
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Multer (for image uploads)

---

## Main Features

### Authentication
- User signup and login
- Password hashing using bcrypt
- JWT based authentication

### Posts
- Create post with image and caption
- View posts in feed

### Likes
- Like and unlike posts
- Like count updates dynamically

### Comments
- Add comments on posts

### Follow System
- Follow and unfollow users
- Follower count visible on profile

### Feed
- Home feed showing posts
- Dynamic updates without page refresh

### Profile
- View user profile
- See own posts in grid format

---

## How to Run the Project Locally

### 1. Backend Setup
cd backend
npm install
npm start
Backend runs on:
http://localhost:3000
Make sure MongoDB is running locally.

### **2. Frontend Setup**
cd frontend
npm install
npm run dev
Frontend runs on:
http://localhost:5173
Signup Page:
http://localhost:5173/signUp

### **Project Structure**

instaClone/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── uploads/
│   └── app.js
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── Helper.js
│   └── App.jsx
│
└── README.md
### **Notes**
The UI is designed mobile-first.
MongoDB automatically creates the database on first insert.
Images are stored locally using Multer.
This project focuses on backend logic, database relations, and API integration.

**Mobile View** 
1.Inspect Website 
2.Click -Toggle Device ToolBar
3.Fix Dimensions-320*642
