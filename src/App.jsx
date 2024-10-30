import { useRef, useState } from "react";

import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import CarModel from "./utility/3d Model/car.model";
import * as THREE from "three";
import UserIcon from "./assets/icons/user.icon";
import Aside, { CameraRig } from "./components/public/aside/aside";
import { AppRouter } from "./router/router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [position, setPosition] = useState([0, 0, 10]);

  return (
    <>
      <div className="App">
        <Router>
          <aside className="[grid-area:aside] flex">
            <Aside setPosition={setPosition} />
          </aside>

          <div className="[grid-area:main] flex overflow-hidden">
            <AppRouter />
          </div>
          <div className="canvas">
            <Canvas
              shadows
              gl={{ antialias: false, preserveDrawingBuffer: true }}
              camera={{ position: [0, 2, 10], fov: 50 }}
            >
              <CameraRig position={position} />
              <color attach="background" args={["#15151a"]} />
              <CarModel />
            </Canvas>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
