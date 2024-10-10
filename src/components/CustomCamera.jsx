import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import LoadedModelNotRotating from './LoadedModelStand';

function CameraController() {
  const { camera } = useThree();  // Access the camera using useThree
  const angleRef = useRef(0);  // Ref to track the angle of the camera around the object

  // Update the camera's position on each frame to move it around the object
  useFrame(() => {
    angleRef.current += 0.01;  // Increase the angle slightly on each frame
    const radius = 5;  // Set the radius for how far the camera should be from the object
    const x = Math.sin(angleRef.current) * radius;
    const z = Math.cos(angleRef.current) * radius;

    // Set the camera position in a circular loop
    camera.position.set(x, 2, z);  // Keep y-axis fixed at 2 for a slight elevation
    camera.lookAt(0, 0, 0);  // Make sure the camera is always looking at the center
  });

  return null;  // This component only manipulates the camera, no need to render anything
}
  
  export default function CustomCameraScene() {
    return (
        <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* The moving camera */}
        <CameraController />
  
        {/* The object that the camera will orbit around */}
        <LoadedModelNotRotating />

        {/* Standing cube*/}
        <mesh position={[0, 0, -4]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      </Canvas>
    );
  }