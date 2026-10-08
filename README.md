# Sumit Kumar — Personal Developer Portfolio

A premium, minimal, modern personal portfolio website built for **Sumit Kumar** (1st Year BCA Student & Aspiring Backend / Software Developer).

![Portfolio Preview Banner](public/favicon.svg)

## 🌟 Overview & Identity

- **Name:** Sumit Kumar
- **Current Education:** 1st Year BCA (Bachelor of Computer Applications) Student
- **Professional Direction:** Backend & Software Developer Aspirant
- **Exploration Area:** Java, Python, SQL, C (Currently Learning), and Web Development

---

## 🛠️ Stack & Technologies Used

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter & JetBrains Mono (Google Fonts)

---

## 📂 Project Architecture

```
MyPortfolio/
├── public/
│   └── favicon.svg           # Minimal SVG favicon
├── src/
│   ├── assets/               # Visual assets & icons
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx        # Sticky navigation drawer & desktop links
│   │   ├── Footer.jsx        # Clean minimal footer
│   │   └── ScrollToTop.jsx   # Floating back-to-top button
│   ├── data/
│   │   └── profileData.js    # 🎯 CENTRAL SOURCE OF TRUTH for all content!
│   ├── sections/             # Page sections
│   │   ├── HeroSection.jsx   # Editorial hero with name & CTAs
│   │   ├── AboutSection.jsx  # Student identity & background
│   │   ├── SkillsSection.jsx # Strictly verified skills list (Zero fake metrics)
│   │   ├── FocusSection.jsx  # Active learning journey & BCA curriculum
│   │   ├── ProjectsSection.jsx # Projects in Progress & abstract visual cards
│   │   └── ContactSection.jsx  # Interactive email & contact CTAs
│   ├── App.jsx               # Main container with active scroll tracking
│   ├── index.css             # Tailwind imports & custom scrollbar
│   └── main.jsx              # React root entry point
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

---

## 🚀 How to Edit Profile Content

All personal profile information, skills, focus areas, projects, and contact info are stored in a single central file:
👉 `src/data/profileData.js`

To update your email, GitHub link, or add new projects in the future:
1. Open `src/data/profileData.js` in VS Code.
2. Edit the corresponding fields.
3. Save the file. The website updates automatically in development mode!

---

## 💻 Local Execution Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production (GitHub Pages / Vercel / Netlify)
```bash
npm run build
```
The optimized production build output will be generated inside the `dist/` directory.

---

## 📜 Authenticity & Content Verification

This portfolio strictly follows authentic content rules:
- **Zero fake skills or frameworks:** Only verified skills (Java, Python, C - Learning, SQL, Git, GitHub, VS Code, Web Development) are shown.
- **Zero fake percentage bars:** Skill cards are text-based and professional.
- **Zero fake experience or metrics:** "Projects in Progress" accurately represents ongoing active mini-projects in Java, Python, SQL, and Web Development.

---

## 🔒 License
Created with ❤️ for Sumit Kumar.
