import * as THREE from 'three';
import gsap from 'gsap';

export class Cube extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x646cff,
      metalness: 0.7,
      roughness: 0.2,
    });
    
    super(geometry, material);

    // Add some rotation animation
    gsap.to(this.rotation, {
      y: Math.PI * 2,
      duration: 4,
      ease: 'none',
      repeat: -1
    });

    gsap.to(this.position, {
      y: 0.5,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });
  }
} 