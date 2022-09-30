import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const About = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [-9, 3, -22],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 1.5, 3.1]} transform occlude>
          <h3 className="headTitle"> SAURABH SINGH 😎</h3>
          <br />
          <br />
          {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 </span> */}

          <p>MERN STACK DEVELOPER </p>
          <br />

          <p>
            {" "}
            I am Saurabh Kumar Singh who is at present looking for job in web
          </p>
          <p>
            {" "}
            development and software development industry. Strong professional
          </p>
          <p>
            {" "}
            with a Master’s Degree (M.C.A focused in software development from
          </p>
          <p>
            {" "}
            Institute of Engineering and Technology, Lucknow, Uttar-Pradesh).
          </p>

          <br />
          <p>
            I am looking forward to work with the organization. This
            unambiguously{" "}
          </p>
          <p>
            would provide me an opportunity to further explore my knowledge and
            skills.
          </p>
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

export default About;
