import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './DonutModel.css';

const DonutModel = () => {
  const mountRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile) return; // Don't initialize Three.js on mobile
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Set size to be square
    const size = Math.min(600, window.innerWidth - 40);
    renderer.setSize(size, size);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting - adjust for right-side positioning
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Increased from 0.4
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9); // Increased from 0.6
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add a stronger fill light from the opposite side
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5); // Increased from 0.3
    fillLight.position.set(-5, -2, -5);
    scene.add(fillLight);

    // Camera position and angle
    camera.position.set(8, 2, 8);
    camera.lookAt(0, 0, 0);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Load the model
    const loader = new GLTFLoader();
    loader.load(
      '/models/donut1.1.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(120, 120, 120); // Increased from 100 to 150
        
        // Set initial tilt angle
        model.rotation.set(
          0.7,  // X rotation (tilt forward)
          0,    // No initial Y rotation
          0     // Z rotation
        );

        // Create a pivot point at the center of the donut
        const pivot = new THREE.Group();
        scene.add(pivot);
        pivot.add(model);
        
        // Offset the model to rotate around its center
        model.position.set(0, 0, 0);

        const animate = () => { 
          requestAnimationFrame(animate);
          
          // Rotate the model around its local Y axis
          model.rotateY(0.01);
          
          renderer.render(scene, camera);
        };
        animate();
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('An error occurred loading the model:', error);
      }
    );

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  if (isMobile) return null; // Don't render anything on mobile
  return <div ref={mountRef} className="donut-model-container" />;
};

export default DonutModel;
