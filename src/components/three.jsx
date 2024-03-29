import * as THREE from 'three';
import React, { useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import Home from './Home';
import Resume from './Resume';
import Project from './Project';
import ParallaxScroll from './Parallax';





const ThreeScene = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Adjust the camera position to the right
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    
    const canvas = document.getElementById('canvas');

    const renderer = new THREE.WebGLRenderer({ canvas,alpha:true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

 


    // Add a directional light to the scene
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 5, 5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();

    let model;
    loader.load('/Girl.gltf', (gltf) => {
      model = gltf.scene;
      
      

      // Create a pivot object and add the model to it
      const pivot = new THREE.Object3D();
      pivot.add(model);
      scene.add(pivot);

      // Center the model in the scene
      const bbox = new THREE.Box3().setFromObject(model);
      const center = bbox.getCenter(new THREE.Vector3());
      model.position.sub(center);

      // Define the pivot offset based on your desired pivot point
      const pivotOffsetX = 0; // 
      const pivotOffsetY = 0; // 
      const pivotOffsetZ = 0; // 
      pivot.position.set(pivotOffsetX, pivotOffsetY, pivotOffsetZ);

      // Store the pivot for later use in the animate function
      pivot.userData.rotateSpeed = 0.003; // rotation speed
      pivot.userData.minAzimuthAngle = -Math.PI / 8; // Minimum angle 
      pivot.userData.maxAzimuthAngle = Math.PI / 8; // Maximum angle 
    });
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
    
      // Update the size of the renderer
      renderer.setSize(newWidth, newHeight);
    
      // Update the camera's aspect ratio
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    });
    
    
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; // Enable camera damping for smoother rotation
    controls.dampingFactor = 0.05; // Adjust damping factor for smoother rotation
    controls.rotateSpeed = 0.5; //  rotation speed
    controls.minAzimuthAngle = -Math.PI / 14; // Minimum angle 
    controls.maxAzimuthAngle = Math.PI / 8; // Maximum angle 
    controls.target.set(0, 0, 0); // Adjust target position
    
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      if (model) {
         // Rotate the pivot object instead of the model
         
        const pivot = model.parent;
        const rotateSpeed = pivot.userData.rotateSpeed;

        // Check if the pivot is within the angle range
        if (pivot.userData.rotateDirection === 'left') {
          // Rotate to the left until it reaches maxAzimuthAngle
          if (pivot.rotation.y <= pivot.userData.maxAzimuthAngle) {
            pivot.rotation.y += rotateSpeed;
          } else {
            pivot.userData.rotateDirection = 'right'; // Change direction to right
          }
        } else {
          // Rotate to the right until it reaches minAzimuthAngle
          if (pivot.rotation.y >= pivot.userData.minAzimuthAngle) {
            pivot.rotation.y -= rotateSpeed;
          } else {
            pivot.userData.rotateDirection = 'left'; // Change direction to left
          }
        }
      }

      controls.update();
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <>
    
      <canvas id="canvas" className='h-full w-full'  />
      <ParallaxScroll/>
     
       
      
      
      
    </>
  );
};

export default ThreeScene;
