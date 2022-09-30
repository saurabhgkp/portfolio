import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const Education = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [8, 3, -15],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 4.6, 3.1]} transform occlude>
          {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲💻📜 </span> */}
          <div className="the-neon-sign">
            <h3 className="headTitle"> EDUCATION 🎓</h3>
            <br />
            <h3>Masters of Computer Application</h3>
            <p>
              {" "}
              Institute of Engineering & Technology, Lucknow Utter- Pradesh
            </p>
            <p>2017 - 2021 </p>
            <br />
            <h3>Bachelors of Science •May 2017 </h3>
            <p>
              {" "}
              Dr. Rammanohar Lohia Avadh University”, Ayodhya Uttar-Pradesh.
            </p>
            <p>2014 - 2017 </p>
            <br />{" "}
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

export default Education;
