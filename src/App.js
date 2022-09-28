import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import PlaneOne from "./Box/PlaneOne";
import "./App.css";
import { Player } from "./Box/Player";
import Project from "./components/Project";
import About from "./components/About";
import Education from "./components/Education";

import Inst from "./components/Inst";
import Rainbow from "./components/Rainbow";

export default function App() {
  return (
    <Canvas>
      <Stars />
      <ambientLight intensity={0.5} />

      <Physics>
        <Inst />
        <About />
        <Education />
        <Project />
        <Rainbow />
        <PlaneOne />

        <Player position={[0, 2, -50]} />
      </Physics>
    </Canvas>
  );
}
