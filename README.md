# 🎬Movie Collection App
A modern, responsive React application for browsing, managing, and discovering movies. Built with clean architecture, reusable components, and an intuitive UI.

## Features
- Add, view, and manage movie entries
- Search & filter movies by title, genre, or rating
- Responsive UI that works beautifully on desktop and mobile
- Reusable React components with clean state management
- Modern styling (CSS modules, Tailwind, or other—customizable)
- Support for local storage or API backend (depending on your setup)
- Fast, scalable, and easy to extend

## Tech Stack
- React (Hooks + functional components)
- JavaScript 
- CSS / Tailwind / Styled-components
- Create React App 
- React Router
## 📦 Installation
<pre>
  # Clone the repository
  git clone https://github.com/xavion-git/ReactMovie

  # Navigate into root the directory
  cd Reactmovie

  # Install dependencies
  npm install

  # Start the development server
  npm run dev
</pre>

## 📁 Project Sturcture 
<pre>
  frontend/
 ├── node_modules/
 ├── public/
 ├── src/
 │   ├── assets/
 │   │   └── react.svg
 │   │
 │   ├── components/
 │   │   ├── MovieCard.jsx
 │   │   └── NavBar.jsx
 │   │
 │   ├── contexts/
 │   │   └── MovieContext.jsx
 │   │
 │   ├── css/
 │   │   ├── App.css
 │   │   ├── Favorites.css
 │   │   ├── Home.css
 │   │   ├── index.css
 │   │   ├── MovieCard.css
 │   │   └── Navbar.css
 │   │
 │   ├── pages/
 │   │   ├── Favorites.jsx
 │   │   └── Home.jsx
 │   │
 │   ├── services/
 │   │   └── api.js
 │   │
 │   ├── App.jsx
 │   └── main.jsx
 │
 ├── .gitignore
 ├── eslint.config.js
 ├── index.html
 ├── package-lock.json
 ├── package.json
 ├── README.md
 └── vite.config.js
</pre>
