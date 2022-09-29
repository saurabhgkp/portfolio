import { usePlane } from "@react-three/cannon";
import React, { useMemo } from "react";
import { TextureLoader, RepeatWrapping } from "three";
import grass from "../grass.jpg";

function PlaneTwo() {
  const texture = useMemo(() => {
    const t = new TextureLoader().load(grass);
    t.wrapS = RepeatWrapping;
    t.wrapT = RepeatWrapping;
    t.repeat.set(60, 60);
    return t;
  }, []);

  const [ref] = usePlane(() => ({
    position: [1, 5, 0],
    rotation: [-Math.PI / 2, 0, 2],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 2]}>
      <planeBufferGeometry attach="geometry" args={[3, 50]} />

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
  );
}
export default PlaneTwo;
