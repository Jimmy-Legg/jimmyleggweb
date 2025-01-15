import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const DonutBackground = () => {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) return null; // Don't render on mobile
  
  const canvasRef = useRef(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);
  const spheresRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isMouseDownRef = useRef(false);
  const selectedDonutRef = useRef(null);
  const spinningTorusRef = useRef(null);
  const spinStartTimeRef = useRef(0);

  const gridSize = { x: 5, y: 5 };
  const sphereSpacing = 1.2;
  const normalSpinSpeed = 0.1;
  const fastSpinSpeed = 0.5;
  const fastSpinDuration = 1000;

  // Add the styles directly to the canvas element
  const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    background: 'linear-gradient(to bottom, #2a0a2a, #000000)'
  };

  const getRandomPinkColor = () => {
    const hue = 300 + Math.random() * 60;
    const saturation = 70 + Math.random() * 30;
    const lightness = 40 + Math.random() * 30;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const createDonutGeometry = (radius, tubeRadius, radialSegments, tubularSegments) => {
    const geometry = new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments);
    const donutMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD7BA });
    const donut = new THREE.Mesh(geometry, donutMaterial);

    // Create sprinkles
    const sprinkleCount = 50;
    const sprinkleGeometry = new THREE.BoxGeometry(0.02, 0.02, 0.1);
    const sprinkleGroup = new THREE.Group();

    for (let i = 0; i < sprinkleCount; i++) {
      const sprinkleMaterial = new THREE.MeshPhongMaterial({ color: Math.random() * 0xFFFFFF });
      const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
      
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      sprinkle.position.set(
        (radius + tubeRadius * Math.cos(phi)) * Math.cos(theta),
        (radius + tubeRadius * Math.cos(phi)) * Math.sin(theta),
        tubeRadius * Math.sin(phi)
      );
      
      sprinkle.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      sprinkleGroup.add(sprinkle);
    }

    // Create frosting
    const frostingGeometry = new THREE.TorusGeometry(
      radius,
      tubeRadius * 1.05,
      radialSegments,
      tubularSegments
    );
    const frostingMaterial = new THREE.MeshPhongMaterial({
      color: getRandomPinkColor(),
      transparent: true,
      opacity: 0.8
    });
    const frosting = new THREE.Mesh(frostingGeometry, frostingMaterial);

    // Combine all parts
    const donutGroup = new THREE.Group();
    donutGroup.add(donut);
    donutGroup.add(frosting);
    donutGroup.add(sprinkleGroup);

    return donutGroup;
  };

  useEffect(() => {
    const init = () => {
      const newScene = new THREE.Scene();
      const newCamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      newCamera.position.set(-0.6, 0, 1.5);

      const newRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: canvasRef.current
      });
      newRenderer.setSize(window.innerWidth, window.innerHeight);

      // Create donuts
      for (let x = 0; x < gridSize.x; x++) {
        for (let y = 0; y < gridSize.y; y++) {
          const donut = createDonutGeometry(0.4, 0.2, 16, 100);
          donut.position.set(
            (x - gridSize.x / 2) * sphereSpacing,
            (y - gridSize.y / 2) * sphereSpacing,
            0
          );
          newScene.add(donut);
          spheresRef.current.push(donut);

          donut.children.forEach(child => {
            if (child instanceof THREE.Mesh) {
              child.userData.originalVertices = child.geometry.attributes.position.array.slice();
              child.userData.currentVertices = child.geometry.attributes.position.array.slice();
            }
          });

          donut.userData.rotationDirection = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5
          };
        }
      }

      // Add lights
      const ambientLight = new THREE.AmbientLight(0x404040);
      newScene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(1, 1, 1);
      newScene.add(directionalLight);

      setScene(newScene);
      setCamera(newCamera);
      setRenderer(newRenderer);

      const contentHeight = window.innerHeight * 6;
      document.body.style.height = `${contentHeight}px`;
    };

    init();

    return () => {
      // Cleanup
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        scene.clear();
      }
    };
  }, []);

  const onMouseMove = (event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const onMouseDown = () => {
    isMouseDownRef.current = true;
    updateSelectedDonut();
    if (selectedDonutRef.current) {
      spinningTorusRef.current = selectedDonutRef.current;
      spinStartTimeRef.current = Date.now();
    }
  };

  const onMouseUp = () => {
    isMouseDownRef.current = false;
    if (spinningTorusRef.current) {
      const clickDuration = Date.now() - spinStartTimeRef.current;
      if (clickDuration < 200) {
        spinStartTimeRef.current = Date.now();
      } else {
        spinningTorusRef.current.rotation.set(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        );
        spinningTorusRef.current = null;
      }
    }
    selectedDonutRef.current = null;
  };

  const onScroll = () => {
    const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const totalHeight = (gridSize.y - 1) * sphereSpacing;
    const scrollSpeed = 0.5;
    if (camera) {
      camera.position.y = -scrollFraction * totalHeight * scrollSpeed;
    }
  };

  const animate = () => {
    if (!scene || !camera || !renderer) return;

    requestAnimationFrame(animate);

    spheresRef.current.forEach(donut => {
      donut.rotation.x += donut.userData.rotationDirection.x * 0.01;
      donut.rotation.y += donut.userData.rotationDirection.y * 0.01;
      donut.rotation.z += donut.userData.rotationDirection.z * 0.01;
    });

    if (spinningTorusRef.current) {
      const currentTime = Date.now();
      const elapsedTime = currentTime - spinStartTimeRef.current;
      
      if (elapsedTime < fastSpinDuration) {
        spinningTorusRef.current.rotation.y += fastSpinSpeed;
      } else {
        spinningTorusRef.current.rotation.y += normalSpinSpeed;
        if (!isMouseDownRef.current) {
          spinningTorusRef.current = null;
        }
      }
    }

    renderer.render(scene, camera);
  };

  useEffect(() => {
    if (scene && camera && renderer) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('scroll', onScroll);
      
      animate();

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [scene, camera, renderer]);

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default DonutBackground;
