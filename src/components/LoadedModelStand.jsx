
import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";
export default function LoadedModelNotRotating() {
    // Use useGLTF to load the model from an external URL
    const { scene } = useGLTF(
      "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf"
    ); // Replace with your model URL
  
    // Rotate the cube on every frame
  
  
    return (
      <primitive  object={scene} scale={1.5} position={[0, 0, 0]} />
    );
  }
  