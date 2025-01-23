"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Pastel color palette
const COLORS = [
  0x94a3b8, // slate
  0x6366f1, // indigo
  0x8b5cf6, // violet
  0xec4899, // pink
  0x3b82f6, // blue
];

export default function ThreeCubeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Store ref value in a variable for cleanup
    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);

    // Create cubes
    const cubes: THREE.LineSegments[] = [];
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);

    // Create cubes with random positions and movements
    const numCubes = 20;
    for (let i = 0; i < numCubes; i++) {
      const material = new THREE.LineBasicMaterial({
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        linewidth: 2,
        opacity: 0.7,
        transparent: true,
      });

      const cube = new THREE.LineSegments(edgesGeometry, material);

      // Random position within bounds - reduced y-axis spread
      cube.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 6, // Reduced from 10 to 6
        (Math.random() - 0.5) * 8
      );

      // Random scale - slightly smaller
      const scale = 0.7 + Math.random() * 0.5; // Adjusted scale range
      cube.scale.set(scale, scale, scale);

      // Store movement properties - reduced vertical movement
      cube.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.015, // Reduced vertical velocity
          (Math.random() - 0.5) * 0.02
        ),
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        originalScale: scale,
      };

      scene.add(cube);
      cubes.push(cube);
    }

    // Adjusted camera position for shorter height
    camera.position.z = 12; // Reduced from 15

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const onMouseMove = (event: MouseEvent) => {
      if (!currentMount) return;

      const rect = currentMount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    currentMount.addEventListener("mousemove", onMouseMove);

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cubes);

      // Reset all cubes
      cubes.forEach((cube) => {
        cube.scale.lerp(
          new THREE.Vector3(
            cube.userData.originalScale,
            cube.userData.originalScale,
            cube.userData.originalScale
          ),
          0.1
        );
        (cube.material as THREE.LineBasicMaterial).opacity = 0.7;
      });

      // Scale up hovered cube
      if (intersects.length > 0) {
        const hoveredCube = intersects[0].object as THREE.LineSegments;
        hoveredCube.scale.lerp(
          new THREE.Vector3(
            hoveredCube.userData.originalScale * 1.4,
            hoveredCube.userData.originalScale * 1.4,
            hoveredCube.userData.originalScale * 1.4
          ),
          0.1
        );
        (hoveredCube.material as THREE.LineBasicMaterial).opacity = 1;
      }

      // Update positions and rotations
      cubes.forEach((cube) => {
        cube.position.add(cube.userData.velocity);

        // Update bounds check with shorter vertical limit
        const boundsCheck = {
          x: { limit: 8, pos: cube.position.x },
          y: { limit: 3, pos: cube.position.y }, // Reduced from 5 to 3
          z: { limit: 4, pos: cube.position.z },
        };

        Object.entries(boundsCheck).forEach(([key, { limit, pos }]) => {
          if (Math.abs(pos) > limit) {
            if (key === "x") cube.userData.velocity.x *= -1;
            if (key === "y") cube.userData.velocity.y *= -1;
            if (key === "z") cube.userData.velocity.z *= -1;
          }
        });

        cube.rotation.x += cube.userData.rotationSpeed.x;
        cube.rotation.y += cube.userData.rotationSpeed.y;
        cube.rotation.z += cube.userData.rotationSpeed.z;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;

      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
      currentMount.removeChild(renderer.domElement);
      boxGeometry.dispose();
      edgesGeometry.dispose();
      cubes.forEach((cube) => {
        (cube.material as THREE.Material).dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
