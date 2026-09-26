# 🚀 Smart Maternity Band — Team Rocket | SIH 2026

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Recharts](https://img.shields.io/badge/Recharts-2.15.1-22b5bf)](https://recharts.org/)
[![Smart India Hackathon 2026](https://img.shields.io/badge/SIH-2026-orange)](https://www.sih.gov.in/)

> **A HealthTech maternal wearable concept combining physical abdominal support, continuous non-invasive biosensing, localized emergency response, and mobile guidance.**  
> Built by **Team Rocket** for **Smart India Hackathon (SIH 2026)**.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Prerequisites](#-prerequisites)
- [Installation Guide](#-installation-guide)
- [Running the Project](#-running-the-project)
- [Available Scripts](#-available-scripts)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Hardware & Sensor Concepts](#-hardware--sensor-concepts)
- [Troubleshooting](#-troubleshooting)
- [Medical Disclaimer](#-medical-disclaimer)

---

## 🌟 Project Overview

Maternal healthcare in remote and underserved regions often faces challenges of delayed intervention, lack of continuous monitoring, and physical strain during the second and third trimesters. 

The **Smart Maternity Band** addresses these challenges by merging:
1. **Ergonomic Physical Support:** Medical-grade, breathable fabric band providing lumbar and abdominal weight distribution.
2. **Modular Biosensing Pod:** Non-invasive monitoring of maternal heart rate, SpO2, skin temperature, maternal posture/fall detection, and contraction proxies.
3. **Emergency SOS System:** An instant physical and in-app 30-second countdown alert system dispatching GPS coordinates to designated emergency contacts and nearby healthcare centers.
4. **Interactive Companion Dashboard:** Real-time data visualization, trend analytics, and contextual guidance for expecting mothers.

---

## ✨ Key Features

- **Interactive Product Lab & Sensor Explorer:** Inspect individual sensors (PPG, temperature, 6-axis IMU, piezoresistive acoustic sensors) with real-time simulated telemetry.
- **Mechanical & Ergonomic Breakdown:** Visual explanation of breathable fabrics, modular snap-in pods, and multi-point weight distribution.
- **Interactive Mobile App Simulator:** Live interactive simulation of the companion mobile app with vital metrics, trend charts (Recharts), and educational guidance.
- **Safety-First SOS Modal:** 30-second automated emergency cancellation window with fall-detection triggers and geolocation relay simulation.
- **Engineering Feasibility & Viability:** In-depth Bill of Materials (BOM), system block diagrams, battery optimization profiles, and regulatory compliance roadmap.
- **Privacy & Security:** Local-first BLE architecture ensuring sensitive biometric data remains under user control with edge-processing encryption.

---

## 📦 Prerequisites

Before cloning and running the application, make sure your machine has the following installed:

| Tool | Recommended Version | Download Link |
| :--- | :--- | :--- |
| **Node.js** | `v18.x`, `v20.x` or later (LTS recommended) | [nodejs.org](https://nodejs.org/) |
| **npm** | `v9.x` or later (bundled with Node) | Included with Node.js |
| **Git** | `v2.x` or later | [git-scm.com](https://git-scm.com/) |
| **Modern Browser** | Chrome, Edge, Safari, or Firefox | Latest version |

You can check if Node and npm are already installed by running:
```bash
node -v
npm -v
```

---

## 🚀 Installation Guide

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
# Using SSH (recommended if you have GitHub SSH keys configured)
git clone git@github.com:ankit24525/team-rocket-smart-maternity-band.git

# OR using HTTPS
git clone https://github.com/ankit24525/team-rocket-smart-maternity-band.git

# Navigate into the project directory
cd team-rocket-smart-maternity-band
```

### 2. Install Dependencies
Run the following command to install all required dependencies specified in `package.json`:
```bash
npm install
```

> **Note:** If you encounter any dependency resolution warnings on older Node versions, you can run:
> ```bash
> npm install --legacy-peer-deps
> ```

---

## 💻 Running the Project

### Development Mode
Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Once started, open your browser and navigate to:
```
http://localhost:5173
```
*(If port `5173` is busy, Vite will automatically select the next available port, e.g., `http://localhost:5174`.)*

### Production Build
To create an optimized, minified production build:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### Preview Production Build
To preview the generated production build locally:
```bash
npm run preview
```

---

## 🛠 Available Scripts

In the project root, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the local dev server at `http://localhost:5173` with instant hot-reload |
| `npm run build` | Compiles production assets into the `dist/` folder using Rollup and Vite |
| `npm run preview` | Spins up a local static server to preview the production build |

---

## 🧬 Tech Stack

### Core Technologies
- **UI Framework:** [React 18](https://reactjs.org/) (Functional Components, Hooks)
- **Tooling & Bundler:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Motion & Interactions:** [Framer Motion](https://www.framer.com/motion/)
- **Charts & Telemetry:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Architecture & Directory Structure

```plaintext
team-rocket-smart-maternity-band/
├── index.html                 # HTML Entry point with Google Fonts & OG meta
├── package.json               # Project manifest, scripts, and dependencies
├── package-lock.json          # Dependency lockfile
├── postcss.config.js          # PostCSS configuration for Tailwind CSS
├── tailwind.config.js         # Custom Tailwind theme, typography & colors
├── vite.config.js             # Vite configuration with code splitting
├── public/                    # Static assets (favicons, icons, etc.)
│   └── favicon.svg
├── src/
│   ├── main.jsx               # React DOM root render
│   ├── App.jsx                # Main application page orchestrating all sections
│   ├── index.css              # Global styles, Tailwind directives & custom utilities
│   ├── assets/                # Images, diagrams, and graphic assets
│   ├── components/
│   │   ├── common/            # Shared components (Navbar, Preloader, ScrollProgress, Disclaimer)
│   │   ├── hero/              # Hero section with interactive badge & quick triggers
│   │   ├── narrative/         # Problem statement & Proposed solution sections
│   │   ├── lab/               # Interactive Product Lab & 2D/3D sensor inspector
│   │   ├── engineering/       # Mechanical system, system architecture, BOM & How-It-Works
│   │   ├── mobile/            # Simulated interactive mobile app with Recharts
│   │   ├── safety/            # Safety-first architecture & 30s SOS emergency modal
│   │   ├── validation/        # Feasibility, Viability, Impact, Benefits, Limitations & Privacy
│   │   ├── team/              # Team Rocket member profiles & hackathon credits
│   │   └── footer/            # Final call-to-action & footer
│   └── data/                  # Static sensor specs, timeline steps & mock telemetry data
└── README.md                  # Project documentation & setup instructions
```

---

## 🔬 Hardware & Sensor Concepts

The wearable system architecture modeled in this project incorporates:
- **Optical PPG (MAX30102 / equivalent):** Maternal heart rate & blood oxygen saturation (SpO2) monitoring.
- **Precision Digital Thermometer (MAX30205):** Continuous skin surface temperature trend detection.
- **6-Axis Inertial Measurement Unit (IMU):** Posture tracking, prolonged inactivity alerts, and automatic fall detection.
- **Modular Controller Pod:** Low-power microcontroller with Bluetooth Low Energy (BLE 5.2), local vibration motor for haptic feedback, and magnetic charging pins.

---

## ❓ Troubleshooting

### 1. `Port 5173 is already in use`
Vite automatically attempts the next available port. If you want to specify a custom port:
```bash
npx vite --port 3000
```

### 2. Node Version Incompatibility
Ensure you are using Node.js version 18 or higher:
```bash
node -v
```
If using [NVM](https://github.com/nvm-sh/nvm):
```bash
nvm install 20
nvm use 20
```

### 3. Clean Re-installation
If encountering caching or module resolution issues:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## ⚕️ Medical Disclaimer

> **IMPORTANT:**  
> The Smart Maternity Band web demonstration and hardware concepts presented are intended **solely for educational, engineering prototype, and hackathon presentation purposes (SIH 2026)**. It is **not** a certified medical diagnostic device and does not replace professional obstetric care, certified ultrasound examinations, or consultation with licensed healthcare providers.

---

## 👥 Authors & Acknowledgments

- **Team Rocket** — Smart India Hackathon (SIH 2026)
- Designed & engineered with ❤️ for maternal wellness and safety.
