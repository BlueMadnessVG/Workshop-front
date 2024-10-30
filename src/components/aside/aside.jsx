import UserIcon from "../../assets/icons/user.icon";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import ExpandIcon from "../../assets/icons/menu.icon";

import profile_picture from "../../assets/img/racoon.jpg";
import Aside_menu from "./aside_menu";

function Aside({ setPosition }) {
  const navigate = useNavigate();

  return (
    <div className="aside">
      <div className="aside-title">
        <h1 className="font-thin text-xl"> WorkShop </h1>
        <button className="menu-btn">
          <span>
            <ExpandIcon style={"w-8 h-8"} />
          </span>
        </button>
      </div>

      <div className="aside-profile">
        <picture className="h-32 w-32 flex-none">
          <img
            src={profile_picture}
            className="object-cover w-full h-full rounded-full border-2 border-[#009C15] shadow-md shadow-zinc-800"
          />
        </picture>

        <h2 className="pt-2 text-2xl font-extrabold text-white">Racoon</h2>
        <span className="text-[#32bbca] font-semibold">User level display</span>
      </div>

      <button
        onClick={() => {
          setPosition([0, 2, 10]);
          navigate("/");
        }}
        className="aside-btn"
      >
        <span className="span-btn">
          <UserIcon style={"w-7 h-7"} /> front
        </span>
      </button>

      <Aside_menu text={"Menu 1"}>
        <button
          onClick={() => {
            setPosition([3, 3, -6]);
            navigate("/something");
          }}
          className="aside-btn"
        >
          <span className="span-btn">
            <UserIcon style={"w-7 h-7"} /> bottom left
          </span>
        </button>
        <button onClick={() => setPosition([-3, 3, -6])} className="aside-btn">
          <span className="span-btn">
            <UserIcon style={"w-7 h-7"} /> bottom right
          </span>
        </button>
      </Aside_menu>

      <Aside_menu text={"Menu 2"}>
        <button onClick={() => setPosition([0, 2, 10])} className="aside-btn">
          <span className="span-btn">
            <UserIcon style={"w-7 h-7"} /> front
          </span>
        </button>

        <button onClick={() => setPosition([3, 1, 8])} className="aside-btn">
          <span className="span-btn">
            <UserIcon style={"w-7 h-7"} /> front right
          </span>
        </button>
        <button onClick={() => setPosition([-3, 1, 8])} className="aside-btn">
          <span className="span-btn">
            <UserIcon style={"w-7 h-7"} /> front left
          </span>
        </button>
      </Aside_menu>
    </div>
  );
}

export function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp(new THREE.Vector3(x, y, z), 0.1);
    state.camera.lookAt(0, 0, 0);
  });
}

export default Aside;
