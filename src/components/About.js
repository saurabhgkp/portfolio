import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const About3 = `<div className="the-neon-sign focuss">
<h3 className=headTitle focuss"> SAURABH SINGH 😎</h3>\
 <p className="focuss">MERN STACK DEVELOPER </p>
 <p className="focuss">
I am Saurabh Kumar Singh who is at present looking for job in web
 </p>
  <p className="focuss">
    development and software development industry. Strong professional
   </p>
<p className="focuss">
 with a Master’s Degree (M.C.A focused in software development from
  </p>
 <p className="focuss">
Institute of Engineering and Technology, Lucknow, Uttar-Pradesh).
</p>
 <br />
<p className="focuss">
I am looking forward to work with the organization. This unambiguously
</p>
 <p className="focuss"> 
 would provide me an opportunity to further explore my knowledge and skills.
</p>
 </div>`;
const About = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [-9, 3, -22],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 1.5, 3.1]} transform occlude>
          <div className="the-neon-sign focuss">
          
            {/* Saurabh Singh <span style={{ fontSize: '1.5em' }}>🥲 </span> */}
           
           <div dangerouslySetInnerHTML={{__html: About3}}/>
           
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

export default About;
