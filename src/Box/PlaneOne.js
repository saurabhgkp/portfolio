import { usePlane } from "@react-three/cannon";
import React from "react";

function PlaneOne() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <>
      <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[3, 60]} />

        <meshLambertMaterial
          attach="material"
          //   map={texture}
          color="#000000"
          transparent
          opacity={0.4}
          roughness={1}
          metalness={0}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 1.6]}>
        <planeBufferGeometry attach="geometry" args={[3, 60]} />

        <meshLambertMaterial
          attach="material"
          //   map={texture}
          color="#000000"
          transparent
          opacity={0.4}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </>
  );
}
export default PlaneOne;
