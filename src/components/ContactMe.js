import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const ContactMe = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [-9, 2, 7],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 0, 3.1]} transform occlude>
          <div className="the-neon-sign">
            <h3 className="headTitle"> CONTACT ME AT 🇮🇳 </h3>

            {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 ⭐ ☆★ </span> */}

            <h4 className="focuss"> 🗺 hauz khas, Delhi </h4>
            <h4 className="focuss"> 📧 ssgkp.singh@gmail.com </h4>
            <h4 className="focuss">
              {" "}
              🔗 https://www.linkedin.com/in/saurabh-singh-841590192/{" "}
            </h4>
            <h4 className="focuss"> ✅ https://github.com/saurabhgkp </h4>
            <h4 className="focuss"> 📱 91+ 7784824509 </h4>
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

export default ContactMe;
