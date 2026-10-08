# Sumit Kumar — Personal Portfolio

A personal portfolio website for **Sumit Kumar** — 1st Year BCA Student and Backend & Software Developer Aspirant.

---

## 👨‍💻 About
- **Education:** 1st Year BCA (Bachelor of Computer Applications) Student
- **Professional Path:** Backend & Software Developer Aspirant
- **Exploration Areas:** Java, Python, SQL, C (Learning), and Web Development

---

## 🛠️ Implementation Stack
The portfolio website was constructed using modern frontend web technologies:

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Outfit, Plus Jakarta Sans, Instrument Serif, JetBrains Mono (Google Fonts)

> **Note:** The tools and libraries listed above are the technologies used to *build* this website application and are separate from Sumit's personal programming capabilities.

---

## ✨ Key Features
- **3D Student Avatar Centerpiece:** Interactive 3D young student developer avatar with dynamic mouse tilt perspective and soft contact shadow.
- **Warm Light Aesthetic:** Product-design inspired palette (Ivory `#FAF8F3`, Soft Olive `#4A5D2E`, Terracotta `#C86D51`, Deep Charcoal `#1A1918`).
- **Verified Skills Only:** Strictly text-based bento grouping with zero arbitrary percentage bars or unverified claims.
- **Learning Progression Roadmap:** Step-by-step visual representation of computer science coursework and programming practice.
- **Projects Showcase:** Abstract visual representations of active mini-projects in Java, Python, SQL, and Web Development.
- **Interactive Contact:** Direct email copy functionality (`sumitsumi34163@gmail.com`) and instant `mailto:` connection.

---

## 🚀 Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
npm run build
```
Generates an optimized static production build in the `dist/` directory ready for deployment on GitHub Pages, Vercel, or Netlify.

---

## 📂 Project Structure

```
MyPortfolio/
├── public/
│   ├── favicon.svg           # Custom SVG favicon
│   └── assets/
│       └── character/        # 🎯 Isolated 3D Character Avatar Asset
│           └── sumit-boy.webp
├── src/
│   ├── components/
│   │   ├── Character3D.jsx   # 🎯 Isolated 3D Character Component
│   │   ├── Navbar.jsx        # Sticky top header
│   │   ├── Footer.jsx        # Minimal warm footer
│   │   └── ScrollToTop.jsx   # Back-to-top floating action
│   ├── data/
│   │   └── profileData.js    # 🎯 CENTRAL SOURCE OF TRUTH for all content!
│   ├── sections/
│   │   ├── HeroSection.jsx   # Spacious hero centered around 3D boy
│   │   ├── AboutSection.jsx  # Background & CS mindset
│   │   ├── SkillsSection.jsx # Bento verified skills list
│   │   ├── JourneySection.jsx# Learning progression timeline
│   │   ├── ProjectsSection.jsx # "WHAT I'M BUILDING" mini-projects
│   │   └── ContactSection.jsx  # Typographic contact CTAs
│   ├── App.jsx               # Main container with active scroll tracking
│   ├── index.css             # Custom styles, fonts, and scrollbar
│   └── main.jsx              # React root entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 How to Replace the 3D Character

The 3D character is completely isolated from the rest of the application so you can replace or swap the avatar at any time:

1. Place your new 3D avatar file (`.webp`, `.png`, or `.glb`) in `public/assets/character/`.
2. Open `src/components/Character3D.jsx` in VS Code and update line 9:
   ```javascript
   export const CHARACTER_ASSET_PATH = "/assets/character/your-new-avatar.webp";
   ```
3. Run `npm run dev` to test your new character locally!

---

## 🔒 License
Created for Sumit Kumar.
