import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Rainbow.css";

const Rainbow = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [0, 2, 25],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 0, 3.1]} transform occlude>
          <body>
            <div class="container">
              <div class="rainbow-color rainbow-color-1"></div>
              <div class="rainbow-color rainbow-color-2"></div>
              <div class="rainbow-color rainbow-color-3"></div>
              <div class="rainbow-color rainbow-color-4"></div>
              <div class="rainbow-color rainbow-color-5"></div>
            </div>
          </body>
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

export default Rainbow;
