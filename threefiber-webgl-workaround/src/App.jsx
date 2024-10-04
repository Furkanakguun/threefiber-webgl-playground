import { Canvas } from '@react-three/fiber'
// import { Box } from './Box'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import RotatingBox from './assets/components/RotatingBox'
import ResizableBox from './assets/components/ResizableBox'
import LoadedModel from './assets/components/LoadedModel'

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ]

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      {/* <RotatingBox/> */}
      {/* <ResizableBox/> */}
      <LoadedModel/>
      {/* <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} /> */}
      {/* <Box positionTest={[-0.75, 0, 0]} name="A" />
      <Box positionTest={[0.75, 0, 0]} name="A" /> */}
    </Canvas>
  )
}
