import { OrbitControls } from "@react-three/drei";

export default function OrbitControlsComponent() {
  return (
    //Set enableDumping true for effect
    //By default, the Drei OrbitControls has enableDamping set to true. When you let go of the mouse, it continues to rotate but slow down.
    <OrbitControls
      enableDamping={true}
      enablePan={false}
      enableRotate={true}
      enableZoom={false}
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI - Math.PI / 6}
    />
  );
}
