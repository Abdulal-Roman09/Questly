# Project Name

A modern React-based web application built with powerful tools and technologies for a smooth, scalable, and user-friendly experience.

---

## Technologies Used

- React 19
- React Router v7 for seamless navigation
- Tailwind CSS 4 with DaisyUI and Tailwind Vite plugin for fast styling and UI components
- Firebase for authentication and backend services
- Lottie React for animated UI elements
- React Icons for beautiful iconography
- React Slick & Slick Carousel for responsive sliders and carousels
- SweetAlert2 for interactive alert modals
- UUID for unique IDs
- dotenv for environment variables management

---
## Setup & Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- A Firebase project for Authentication and backend services

### Steps to Setup Locally

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm i
npm run dev 

```
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
