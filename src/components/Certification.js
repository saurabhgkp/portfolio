import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const Certification = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [22, 2, 11],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 0, 3.1]} transform occlude>
          <h3 className="headTitle"> CERTIFICATION 🏅</h3>
          <br />
          <br />
          {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 </span> */}

          <h4> 🔰 Front-End Web Development with React </h4>
          <p>4 WEEKS</p>
          <br />
          <p> The Hong Kong University of Science and Technology, Coursera.</p>
          <br />
          <h4> 🔰 Server-side Development with NodeJS, Express and MongoDB </h4>
          <p>4 WEEKS</p>
          <br />
          <p> The Hong Kong University of Science and Technology, Coursera.</p>
          <h4> 🔰 Front-End Web UI Frameworks and Tools: Bootstrap 4 </h4>
          <p>4 WEEKS</p>
          <br />
          <p> The Hong Kong University of Science and Technology, Coursera.</p>
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

export default Certification;
