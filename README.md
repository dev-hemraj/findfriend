# FindFriend 👥

**FindFriend** is a modern social/dating-style web app built using React and Vite. It showcases a list of user model cards that can be filtered by name, age, location, and status (Online, Offline, Busy). This project is designed for learning and fun purposes, with plans to implement more advanced features like category filters, ratings, and user onboarding.

---

## 🚀 Features

- Browse cards with model photo, name, age, country, and status
- Show total models + currently online count
- Filter users by:
  - Name
  - Age
  - Location
  - Status (Live, Busy, Offline)
- Display categories:
  - New Models (based on join date)
  - Top Models (rating or featured - future plan)

---

## 🧱 Tech Stack

- **React** (with Vite)
- **SCSS** for styling
- **Bootstrap** for layout/grid system
- **Modular components** for clean structure

---

## 🗂️ Folder Structure

findfriend/ ├── public/ ├── src/ │ ├── assets/ # Images and static media │ ├── components/ # Reusable components (ModelCard, Header, FilterBar, etc.) │ ├── data/ # JSON or JS files with mock model data │ ├── pages/ # Optional: Home, Profile, etc. │ ├── styles/ # SCSS files │ │ ├── main.scss │ │ ├── \_variables.scss │ │ ├── \_mixins.scss │ │ └── \_modelCard.scss │ ├── App.jsx # Main App component │ └── main.jsx # Root entry point ├── index.html ├── vite.config.js ├── package.json ├── .gitignore

---

## 🧹 Initial Setup Instructions

1. **Clean Vite default files**  
   Remove the following:

   - `vite.svg` from `/public`
   - Default content from `App.jsx`, `App.css`, `index.css`

2. **Create folder structure**

   - `src/components`
   - `src/data`
   - `src/styles`

3. **Install dependencies**

   ```bash
   npm install
   ```

   ## 📌 To-Do (Upcoming Features)

   Rating system for top models

   Date-based sorting for “New Models”

   Real-time status updates

   Modal for detailed profile

   Responsive mobile layout

## 📸 UI Preview (Coming soon)

## 📄 License

This project is open-source and free to use for educational and personal development purposes.
