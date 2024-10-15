import React from 'react';
import { Canvas, useGraph } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function ModelWithGraph() {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ruby/model.gltf');
  
  // Extract the entire scene graph using useGraph
  const { nodes, materials } = useGraph(scene);

  // Apply a common material to all meshes
  Object.values(nodes).forEach((node) => {
    if (node.isMesh) {
      node.material = new THREE.MeshStandardMaterial({ color: 'black' });
    }
  });

  // Log the graph structure (optional for debugging)
  console.log('Scene Graph:', nodes, materials);
  

  return (
    <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
  );
}

export default  function ModelWithGraphScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ModelWithGraph />
    </Canvas>
  );
}
