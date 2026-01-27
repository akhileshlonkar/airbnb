# Airbnb Clone – Full Stack Web Application

This is a full-stack Airbnb-like web application that allows users to browse property
listings, view detailed information, and manage accommodations. The project demonstrates
CRUD operations, server-side rendering, and cloud database integration.

---

## Features
- User authentication (Sign up / Login)
- Browse all available property listings
- View detailed property information
- Add new listings
- Edit and delete existing listings
- Image support for properties
- Responsive UI using Bootstrap
- Cloud-based database using MongoDB Atlas

---

## Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap
- EJS (Embedded JavaScript Templates)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas (Cloud Database)

### Tools & Platforms
- Git & GitHub
- Git Bash
- Render (Deployment)

---

## Project Structure

├── init/              # Initial setup / seed data
├── models/            # Mongoose schemas
├── public/            # Static assets (CSS, JS, images)
├── uploads/           # Uploaded images/files
├── views/             # EJS templates
├── node_modules/      # Dependencies
├── .env               # Environment variables
├── .gitignore         # Git ignored files
├── cloudconfig.js     # Cloudinary / image config
├── index.js           # Main server entry point
├── package.json       # Project metadata & scripts
├── package-lock.json  # Dependency lock file
└── README.md          # Project documentation

---

## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/airbnb-clone.git
Install dependencies

npm install
Set up environment variables
Create a .env file and add:

MONGODB_URI=your_mongodb_atlas_connection_string
Start the server

npm start
Open in browser

http://localhost:3000
Database
MongoDB Atlas is used for storing application data.

Collections include:

Users

Listings

Property details

Deployment
The application is deployed on Render

Source code is version-controlled using GitHub

Future Enhancements
Booking and reservation system

Payment gateway integration

User reviews and ratings

Advanced search and filtering

Admin dashboard
