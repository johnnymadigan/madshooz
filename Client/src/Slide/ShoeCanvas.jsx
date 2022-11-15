import { Suspense } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function ShoeCanvas({modelName, cameraPos}) {
  return (
    <Canvas frameloop="demand">
      <Lighting />
      <ShoeModel modelName={modelName} cameraPos={cameraPos}/>
      <OrbitControls />
    </Canvas>
  )
}

const ShoeModel = async ({modelName, cameraPos}) => {
  if (!modelName) modelName = "factors"; // fallback to default shoe
  let path = `./models/${modelName}.glb`;
  const gltf = await useLoader(GLTFLoader, path)

  // access THREE's camera...
  // note: can only useThree inside Canvas component
  useThree(({camera}) => {
    camera.position.x = cameraPos.x;
    camera.position.y = cameraPos.y;
    camera.position.z = cameraPos.z;
    /* debugging camera pos per shoe*/
    // camera.position.x = -0.01;
    // camera.position.y = 0.01;
    // camera.position.z = 0.2;
    camera.lookAt(0, 0, 0);
  });

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
