# Sumit Kumar — Personal Developer Portfolio

A premium, minimal, warm, 3D character-centered personal portfolio website built for **Sumit Kumar** (1st Year BCA Student & Aspiring Backend / Software Developer).

![Portfolio Preview Banner](public/favicon.svg)

---

## 🌟 Overview & Visual Identity

- **Theme:** Warm Cream / Ivory (`#FAF8F3`, `#F4F0E8`, `#FFFFFF`)
- **Centerpiece:** Interactive 3D Young Student Avatar
- **Target Persona:** 1st Year BCA Student & Backend / Software Developer Aspirant
- **Exploration Areas:** Java, Python, SQL, C (Currently Learning), and Web Development

---

## 🎨 How to Replace the 3D Character

The 3D character is completely isolated from the rest of the portfolio UI, allowing you to swap or update the avatar asset at any time without breaking the layout or styles.

### 📍 Step-by-Step Instructions:

1. **Locate the Character Asset Folder:**
   All character files reside in:
   👉 `public/assets/character/`

2. **Add Your New Character File:**
   Place your new 3D avatar file (e.g. `.svg`, `.png`, or `.glb`) into `public/assets/character/`.
   - *Option A (Keep same filename):* Replace `public/assets/character/sumit-boy.svg` with your new file using the exact same filename.
   - *Option B (Custom filename):* If your new file is named `my-new-character.png` or `sumit-3d.glb`, open `src/components/Character3D.jsx` in VS Code and change line 9:
     ```js
     export const CHARACTER_ASSET_PATH = "/assets/character/my-new-character.png";
     ```

3. **Test Your Changes:**
   Run the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to visually inspect your new character.

---

## 🛠️ Stack & Technologies Used

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Outfit, Plus Jakarta Sans, Instrument Serif, JetBrains Mono (Google Fonts)

---

## 📂 Project Architecture

```
MyPortfolio/
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── character/
│           └── sumit-boy.svg # 🎯 Isolated 3D Character Avatar Asset
├── src/
│   ├── components/
│   │   ├── Character3D.jsx   # 🎯 Isolated Character Component with 3D Mouse Tilt
│   │   ├── Navbar.jsx        # Top cream header with status indicator
│   │   ├── Footer.jsx        # Minimal warm footer
│   │   └── ScrollToTop.jsx   # Floating back-to-top button
│   ├── data/
│   │   └── profileData.js    # 🎯 CENTRAL SOURCE OF TRUTH for all content!
│   ├── sections/
│   │   ├── HeroSection.jsx   # Hero revolving around 3D boy centerpiece
│   │   ├── AboutSection.jsx  # Editorial background & CS mindset
│   │   ├── SkillsSection.jsx # Bento visual grouping (Verified skills only)
│   │   ├── JourneySection.jsx# Step-by-step learning progression roadmap
│   │   ├── ProjectsSection.jsx # "WHAT I'M BUILDING" mini-projects
│   │   └── ContactSection.jsx  # "Let's build something interesting."
│   ├── App.jsx               # Main container with active scroll tracking
│   ├── index.css             # Tailwind v4 imports, warm shadows & fonts
│   └── main.jsx              # React root entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 How to Edit Profile Content

All personal profile information, skills, focus areas, projects, and contact info are stored in a single central file:
👉 `src/data/profileData.js`

To update your email or GitHub link:
1. Open `src/data/profileData.js` in VS Code.
2. Edit the fields.
3. Save the file. The website updates automatically in dev mode!

---

## 💻 Local Execution Commands

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📜 Authenticity & Content Verification

This portfolio strictly adheres to authentic profile rules:
- **Zero fake skills:** Only verified skills (Java, Python, C - Learning, SQL, Git, GitHub, VS Code, Web Development) are shown.
- **Zero fake metrics / progress bars:** Clean bento presentation.
- **Zero fake experience:** "What I'm Building" accurately represents active mini-projects in Java, Python, SQL, and Web Development.

---

## 🔒 License
Created with ❤️ for Sumit Kumar.
