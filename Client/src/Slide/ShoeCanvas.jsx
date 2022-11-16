import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ShoeCanvas({modelName, cameraPos}) {
  return (
    <Canvas frameloop="demand">
      <Lighting />
      <ShoeModel modelName={modelName} cameraPos={cameraPos}/>
      <OrbitControls />
    </Canvas>
  );
}

const ShoeModel = ({modelName, cameraPos}) => {
  const defaultModel = "factors";
  if (!modelName) modelName = defaultModel;
  let path = `./models/${modelName}.glb`;
  const gltf = useLoader(GLTFLoader, path); // loads .glb as well

  // hook to access THREE's camera...
  // note: can only useThree inside a canvas component
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
  );
}

const Lighting = () => (
  <>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
  </>
)

export default ShoeCanvas;
