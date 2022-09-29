import { usePlane } from "@react-three/cannon";
import React, { useMemo } from "react";
import { TextureLoader, RepeatWrapping, Group } from "three";
import grass from "../grass.jpg";

function PlaneOne() {
  const texture = useMemo(() => {
    const t = new TextureLoader().load(grass);
    t.wrapS = RepeatWrapping;
    t.wrapT = RepeatWrapping;
    t.repeat.set(60, 60);
    return t;
  }, []);

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
