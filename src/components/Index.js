import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import PlaneOne from "../Box/PlaneOne";
import "../App.css";
import { Player } from "../Box/Player";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Instruction.css";
import "./Texts.css";
const errorObj = require("../Data/data");

const index = () => {
  return (
    <>
      <Canvas>
        <Stars />
        <ambientLight intensity={0.5} />
        <Physics>
          <Inst />
          <About datapass={errorObj.default.About} />
          <Commen datapass={errorObj.default.Education} />
          <Commen datapass={errorObj.default.Project} />
          <Commen datapass={errorObj.default.Certification} />
          <Commen datapass={errorObj.default.Skill} />
          <Commen datapass={errorObj.default.ContactMe} />

          <PlaneOne />
          <Player position={[0, 2, -30]} />
        </Physics>
      </Canvas>
    </>
  )
}
export default index;


const About = ({ datapass }) => {

  const [ref] = useBox(() => ({
    position: datapass.datap,
  }));
  console.log(datapass.data);

  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={datapass.datar} transform occlude>
          <div className="the-neon-sign focuss">
            <div dangerouslySetInnerHTML={{ __html: datapass.data }} />
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
      </mesh>
    </>
  )

};
const Commen = ({ datapass }) => {
  const [ref] = useBox(() => ({

    position: datapass.datap,
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={datapass.datar} transform occlude>
          <div className="the-neon-sign">
            <div dangerouslySetInnerHTML={{ __html: datapass.data }} />
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
      </mesh>
    </>
  );
};

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
          <div class="the-neon-sign">

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



