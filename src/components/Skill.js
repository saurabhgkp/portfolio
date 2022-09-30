import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const Skill = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [9, 3, 9],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 4.6, 3.1]} transform occlude>
          <div className="the-neon-sign">
            <h3 className="headTitle"> SKILLS SUMMARY 🎯 </h3>
            <br />
            <br />
            {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 ⭐ ☆★ </span> */}

            <h4> ★★★★☆ ---------------- Javascript</h4>
            <h4> ★★☆☆☆ ---------------- React JS</h4>
            <h4> ★★☆☆☆ ---------------- React-redux</h4>
            <h4> ★★☆☆☆ ---------------- Express</h4>
            <h4> ★★★☆☆ ---------------- MySql,Postgrs</h4>
            <h4> ★★★☆☆ ---------------- object oriented programming</h4>
            <h4> ★★★☆☆ ---------------- HTML5, Bootstrap, CSS</h4>
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

export default Skill;
