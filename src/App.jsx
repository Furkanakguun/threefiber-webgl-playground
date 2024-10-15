import { Canvas } from '@react-three/fiber'
// import { Box } from './Box'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import RotatingBox from './components/RotatingBox'
import ResizableBox from './components/ResizableBox'
import LoadedModel from './components/LoadedModel'
import CustomCameraScene from './components/CustomCamera'
import CustomRendererScene from './components/CustomRenderer'
import ModelWithGraphScene from './components/ModelWithGraph'

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ]

  return (
    /* Standart Canvas Examples */
    // <Canvas camera={{ position: [0, 0, 3] }}>
    //   {/* <RotatingBox/> */}
    //   {/* <ResizableBox/> */}
    //   <ambientLight intensity={0.5} />  {/* Soft global light */}
    //   <directionalLight position={[5, 5, 5]} intensity={1} />  {/* Stronger light from a specific direction */}
    //   <LoadedModel/>
    //   {/* <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
    //   <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
    //   <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
    //   <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} /> */}
    //   {/* <Box positionTest={[-0.75, 0, 0]} name="A" />
    //   <Box positionTest={[0.75, 0, 0]} name="A" /> */}
    // </Canvas>

    /* Custom Camera(Orbit around object) Scene */
    <CustomCameraScene/>

    
    // <CustomRendererScene />
    // <ModelWithGraphScene />
  )
}
