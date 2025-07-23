# 🌾 Anil Atta Chakki - Official Website

Welcome to the official website of **Anil Atta Chakki**, a trusted and traditional flour mill serving quality since 2000. This website offers a clean, responsive, and animated user experience built with modern web technologies.

## 🔗 Live Site

[Visit Live Website](https://your-deployed-url.com)

---

## 🚀 Features

- 🏠 Beautiful and animated homepage
- 🛍️ Product listing with cart functionality
- 🧾 Checkout and customer details
- 📞 Contact form with integrated EmailJS
- 📍 Google Maps integration for location access
- 📱 Fully responsive (mobile, tablet, and desktop)
- 🌗 Light and dark theme support
- ✨ Smooth animations using Framer Motion

---

## 🛠 Tech Stack

- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Context API (Cart, Orders)
- **Email Service**: EmailJS
- **Routing**: React Router DOM
- **Animations**: Framer Motion

---

## 📁 Folder Structure (Frontend)

src/
│
├── assets/ # Images & media
├── components/ # Reusable UI components
├── contexts/ # Cart & Order providers
├── pages/ # Main page components (Home, About, Contact)
├── App.jsx # Root app
├── main.jsx # Entry point
└── routes.jsx # Routes config

yaml
Copy
Edit

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/anil-atta-chakki.git
cd anil-atta-chakki
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure EmailJS (for contact form)
Create an account at EmailJS

Set up a service, template, and get:

SERVICE_ID

TEMPLATE_ID

PUBLIC_KEY

Create a .env file and add:

ini
Copy
Edit
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
4. Run locally
bash
Copy
Edit
npm run dev