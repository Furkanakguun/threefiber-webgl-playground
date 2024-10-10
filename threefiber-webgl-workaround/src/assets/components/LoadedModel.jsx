import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";

export default function LoadedModel() {
  const meshRef = useRef();
  // Use useGLTF to load the model from an external URL
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf"
  ); // Replace with your model URL

  // Rotate the cube on every frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <primitive ref={meshRef} object={scene} scale={1.5} position={[0, 0, 0]} />
  );
}
