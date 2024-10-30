import {
  AccumulativeShadows,
  CameraControls,
  ContactShadows,
  Environment,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { Suspense, useRef } from "react";

import "../App.css";

import Model from "./Model";
import { useFrame } from "@react-three/fiber";

function CarModel() {
  const ref = useRef();
  useFrame((state, delta) => {
    const speedFactor = { x: 0.35, y: 0.7 };

    ref.current.rotation.y =
      Math.cos(state.clock.elapsedTime * speedFactor.x) * 0.2;
    ref.current.rotation.x =
      -Math.cos(state.clock.elapsedTime * speedFactor.y) * 0.02;
  });

  return (
    <>
      <group ref={ref}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <hemisphereLight intensity={0.5} />
        <pointLight intensity={2} />

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[300, 100]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>

        <mesh
          scale={3}
          position={[1, 0.1, 2]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 4, 1]} />
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh
          scale={3}
          position={[-1, 0.1, -3]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
      </group>

      <Environment preset="warehouse" background backgroundBlurriness={0.65} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  );
}

export default CarModel;
