# Building a Futuristic Portfolio with Vite + Three.js + GSAP

This document provides a comprehensive guide to building a next-gen portfolio website using **Vite**, **Three.js**, and **GSAP**. This portfolio will be visually striking, interactive, and optimized for hosting on **GitHub Pages**.

---

## ✨ Features

* **Blazing-fast** development with Vite
* **3D visuals** and shaders using Three.js
* **Smooth animations** using GSAP
* **Modular file structure**
* **GitHub Pages** deployment ready

---

## 🚀 Prerequisites

* Node.js (>= 16.x)
* GitHub account
* Git installed

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── models/         # 3D models (GLTF, OBJ, etc.)
│   │   ├── images/         # Textures, logos, etc.
│   ├── components/     # Modular components
│   │   ├── HeroSection.ts
│   │   ├── AboutMe.ts
│   │   └── ContactForm.ts
│   ├── scenes/         # Three.js scenes
│   │   └── Scene.ts
│   ├── styles/         # Tailwind or custom CSS
│   │   └── global.css
│   └── main.ts         # Entry point
└── index.html
```

---

## 📝 Step-by-step Instructions

### 1. Initialize Vite Project

```bash
npm create vite@latest my-portfolio -- --template vanilla-ts
cd my-portfolio
npm install
```

### 2. Install Dependencies

```bash
npm install three gsap
npm install --save-dev vite-plugin-glsl
```

### 3. Configure Vite (vite.config.ts)

```ts
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [glsl()],
  base: '/my-portfolio/', // important for GitHub Pages
});
```

### 4. Create 3D Scene (src/scenes/Scene.ts)

```ts
import * as THREE from 'three';

export function initScene(container: HTMLElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}
```

### 5. Animate with GSAP (in component or main.ts)

```ts
import gsap from 'gsap';
gsap.to(".intro", { opacity: 1, y: 0, duration: 2, ease: "power3.out" });
```

### 6. Launch Dev Server

```bash
npm run dev
```

---

## ✉️ Deployment to GitHub Pages

### 1. In `package.json`, add:

```json
"scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://<your-username>.github.io/my-portfolio"
```

### 2. Install `gh-pages`

```bash
npm install gh-pages --save-dev
```

### 3. Push to GitHub

```bash
git init
git remote add origin https://github.com/<your-username>/my-portfolio.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 4. Deploy

```bash
npm run deploy
```

---

## 🤖 Ideas for Futuristic Features

* AI-powered chatbot integrated into 3D space
* Real-time 3D background from webcam or geolocation
* Particle-based user interaction (mouse trails, aura effects)
* Audio-reactive animations (music synced visuals)
* VR mode support with WebXR

---

## 🚫 Common Pitfalls

* Scene resizing: handle `window.onresize`
* Model loading: use GLTFLoader from `three/examples/jsm/loaders/`
* Performance: use compressed textures/models, requestAnimationFrame wisely

---

## ✨ Final Tip

You are not just building a portfolio. You are building a digital world. Embrace shaders, embrace physics, and most importantly: **make it memorable.**
