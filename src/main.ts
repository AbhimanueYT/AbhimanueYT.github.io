import './style.css'
import { Scene } from './scenes/Scene.ts'
import gsap from 'gsap'

// Create main container
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <div class="container">
    <div class="content">
      <h1 class="title">Abhimanue</h1>
      <p class="subtitle">Creative Developer & 3D Artist</p>
    </div>
    <div id="scene-container"></div>
  </div>
`

// Initialize 3D scene
const sceneContainer = document.querySelector<HTMLDivElement>('#scene-container')!
const scene = new Scene(sceneContainer)

// Ensure scene is not garbage collected
// @ts-ignore
window.__scene = scene

// Add initial animations
gsap.from('.title', {
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: 'power4.out'
})

gsap.from('.subtitle', {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: 'power4.out'
})
