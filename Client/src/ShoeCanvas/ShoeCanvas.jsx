import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function ShoeCanvas() {
  return (
    <Canvas>
      <Lighting />
      <ShoeModel />
      <OrbitControls />
    </Canvas>
  )
}

const ShoeModel = () => {
  const gltf = useLoader(GLTFLoader, '/models/adidas_yeezy_boost_350_v2_zebra.glb')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}

const Lighting = () => (
  <>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
  </>
)

export default ShoeCanvas;
