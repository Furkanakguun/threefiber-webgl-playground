import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'

export default function RotatingBox() {
  const meshRef = useRef(); // Reference to the cube mesh
  const box = new THREE.BoxGeometry()
  
  // Rotate the cube on every frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[-0.75, -0.75, 0]} geometry={box}>
      <meshBasicMaterial color="orange" wireframe /> {/* Material for the cube */}
    </mesh>
  );
}
