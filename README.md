# Project Name

A modern React-based web application built with powerful tools and technologies for a smooth, scalable, and user-friendly experience.

---

# 🛍️ Product Recommendation Site

**Product Recommendation Site** is a React-based web application that helps users explore and discover top travel-related products through personalized recommendations. It features a seamless user experience with authentication, interactive product listings, and user reviews.

---

## 🌐 Website Theme

- **Primary Theme Color:** Blue — symbolizing trust and reliability, fitting for a product recommendation platform.  
- **UI Library:** [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for modern, responsive styling.

---

## 🔧 Features

- 🛒 Browse a wide range of travel products with detailed descriptions  
- ⭐ User ratings and reviews for products  
- 🔐 User authentication with Firebase (Email/Password & Google sign-in)  
- ❤️ Add products to favorites or wishlist  
- 🔍 Powerful search and filter options to find the best products  
- 🔄 Responsive design optimized for mobile and desktop  

---

## 🔐 Authentication System (Firebase)

This site uses **Firebase Authentication** for secure user management and smooth sign-in experiences.

### Supported Methods

- **Email & Password**  
- **Google Sign-In (OAuth)**  

---

## 🛠️ Tech Stack

### 🧩 Frontend

- React  
- React Router DOM  
- Tailwind CSS & DaisyUI  
- Firebase Authentication  
- React Icons  
- SweetAlert2 for alert dialogs  

---

## 👥 User Access

- **Guests** can browse and search products.  
- **Logged-in users** can add products to favorites, write reviews, and manage their profile.

---

## 📁 Project Setup

```bash
# Install dependencies
npm install

# Run the project locally
npm run dev

## Environment Variables (.env)

This project uses a `.env` file to securely store sensitive information such as API keys, Firebase configuration, and other environment-specific variables.  
**Important:** Never commit your `.env` file to public repositories.

Typical variables you might include:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
## Key Features

### User Authentication
- Secure sign-up, login, and logout functionalities powered by Firebase Authentication.
- Persistent user sessions with seamless UI updates on authentication state changes.

### Post Management
- **Add Post:** Users can create new posts with rich text content.
- **Update Post:** Edit existing posts with an intuitive interface.
- **Delete Post:** Remove unwanted posts permanently with confirmation prompts.

### Comment System
- **Add Comment:** Users can add comments to posts, supporting threaded discussions.
- **Update Comment:** Edit comments for corrections or updates.
- **Delete Comment:** Remove comments when necessary.

### Interactive UI & UX
- Responsive design using Tailwind CSS and DaisyUI ensuring usability on all devices.
- Beautiful animations integrated via Lottie React to enhance user engagement.
- Custom alert dialogs and confirmations powered by SweetAlert2 for smooth interactions.

### Media & Sliders
- Responsive carousels and sliders implemented with React Slick and Slick Carousel to showcase images or featured posts attractively.

### Utility Features
- Unique ID generation for posts and comments using UUID to prevent conflicts.
- Environment configuration handled through dotenv for scalable deployment.
