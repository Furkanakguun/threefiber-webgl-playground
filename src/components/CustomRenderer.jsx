import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three';

function CustomRenderer() {
    const { camera, gl } = useThree();  // Access the camera and renderer

  useEffect(() => {
    // Customize the camera position and rotation
    camera.position.set(0, 2, 5);  // Slightly elevated camera
    camera.lookAt(0, 0, 0);  // Make the camera look at the center of the scene

    // Set the pixel ratio for better quality rendering on high-DPI screens
    gl.setPixelRatio(window.devicePixelRatio);

    // Enable shadow mapping for better lighting effects
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;  // Use softer shadows
  }, [camera, gl]);

  return null; 
}

export default function CustomRendererScene() {
  return (
    <Canvas
      shadows
      style={{ background: 'white' }}  
      camera={{ position: [0, 2, 5], fov: 50 }} 
    >
      {/* Ambient Light for soft overall illumination */}
      <ambientLight intensity={0.3} color={"#ffffff"} />

      {/* Directional Light for shadows */}
      <directionalLight
        color="white"
        intensity={1}
        position={[5, 5, 5]}
        castShadow  // Enable casting shadows
        shadow-mapSize-width={2048}  // Higher resolution for sharper shadows
        shadow-mapSize-height={2048}
      />

      <CustomRenderer />

      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Ground plane to receive shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </Canvas>
  );
}
