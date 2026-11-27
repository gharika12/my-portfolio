import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold the AI core
    const aiCoreGroup = new THREE.Group();
    scene.add(aiCoreGroup);

    // 1. Geodesic Outer Wireframe Sphere (Electric Cyan)
    const outerGeo = new THREE.IcosahedronGeometry(1.7, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff, // electric cyan
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    aiCoreGroup.add(outerMesh);

    // 2. Vertex Points on Outer Sphere (Neon Cyan Neural Nodes)
    const posAttribute = outerGeo.attributes.position;
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', posAttribute);
    const pointsMat = new THREE.PointsMaterial({
      color: 0x00f0ff, // neon cyan
      size: 0.085,
      transparent: true,
      opacity: 0.95,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    aiCoreGroup.add(pointsMesh);

    // 3. Inner Glowing Pulsing Core (Deep Midnight Cyan)
    const innerGeo = new THREE.IcosahedronGeometry(0.95, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0891b2, // cyan 600
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    aiCoreGroup.add(innerMesh);

    // 4. Orbiting Data Rings in Electric Cyan
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff, // electric cyan ring
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    aiCoreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.1, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe0f2fe, // ice white/cyan ring
      transparent: true,
      opacity: 0.55,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    aiCoreGroup.add(ring2);

    // 5. Floating Dust / Synapse Particles
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 5;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.035,
      transparent: true,
      opacity: 0.8,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left - width / 2;
      const y = event.clientY - rect.top - height / 2;
      targetX = (x / width) * 0.8;
      targetY = (y / height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group rotation
      aiCoreGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      aiCoreGroup.rotation.x = elapsedTime * 0.15 + mouseY;

      // Pulse inner core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Counter-rotate rings
      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.007;

      // Slowly float particle cloud
      particleField.rotation.y = elapsedTime * 0.05;
      particleField.rotation.x = -elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
      {/* Background Soft Glow in Electric Cyan */}
      <div className="absolute inset-0 m-auto w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-cyan-500/25 via-cyan-400/20 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-slow shadow-glow-cyan-lg" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};

export default ThreeCanvas;
