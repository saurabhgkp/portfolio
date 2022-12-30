import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Instruction.css";

const Inst = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [0, 2, -40],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html
          scale={1}
          rotation={[Math.PI / 8, 0, 0]}
          className="login-box"
          transform
          occlude
        >
          <div class="container spandiv ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h1 class="neonText focuss">Not For Mobile</h1>
            <h2 class="neonText focuss">
              Click On Screen And turn around exit Screen press Esc
            </h2>
            <h2 class="neonText focuss">
              Movement Using W S A D & Space(Jump) Button
            </h2>
          </div>
        </Html>

        <meshLambertMaterial
          attach="material"
          color="black"
          transparent
          opacity={0.1}
          roughness={1}
          metalness={0}
        />
      </mesh>{" "}
    </>
  );
};

export default Inst;
