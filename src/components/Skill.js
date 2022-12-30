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
            <h3 className="focuss"> SKILLS SUMMARY 🎯 </h3>
            {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 ⭐ ☆★ </span> */}

            <h4 className="focuss"> ★★★★☆ ---------------- Javascript</h4>
            <h4 className="focuss"> ★★★☆☆ ---------------- Node JS</h4>
            <h4 className="focuss"> ★★☆☆☆ ---------------- React JS</h4>
            <h4 className="focuss"> ★★☆☆☆ ---------------- React-redux</h4>
            <h4 className="focuss"> ★★★☆☆ ---------------- Express</h4>
            <h4 className="focuss"> ★★★☆☆ ---------------- MySql,Postgres</h4>
            <h4 className="focuss">
              {" "}
              ★★★☆☆ ---------------- object oriented programming
            </h4>
            <h4 className="focuss">
              {" "}
              ★★★☆☆ ---------------- HTML5, Bootstrap, CSS
            </h4>
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
