import React, { useRef, useState } from "react";

export default function ResizableBox() {
  const meshRef = useRef(); //Create a reference for the cube
  const [isLarge, setIsLarge] = useState(false); //State to track if the cube is large and the state function

  // Function to handle click event to change the size of cube
  const handleClick = () => {
    setIsLarge(!isLarge);
    // Access the mesh and change its scale based on the state
    if (meshRef.current) {
      // may initially be null before the mesh is rendered, so it’s a good practice to check if meshRef.current exists before accessing its properties.
        meshRef.current.scale.set(isLarge ? 1 : 2 , isLarge ? 1:2 , isLarge ? 1 : 2)
    }
  };

  return (
    <mesh ref={meshRef} onClick={handleClick} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} /> {/* Default cube size */}
      <meshBasicMaterial color="orange" wireframe />{" "}
      {/* Material for the cube */}
    </mesh>
  );
}
