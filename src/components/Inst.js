import React from "react";
import {  useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import './Instruction.css'

const Inst = () => {
  const [ref] = useBox(() => ({   //mass: 1,  
    position: [0, 2, -59] }));
  return (
    <>
   
    <mesh   ref={ref}>
  
    <Html scale={1} rotation={[Math.PI / 8, 0, 0]}  transform occlude>
           
      
        <div class="container">
    <h1 class="neonText">
    Not For Mobile <span style={{ fontSize: '1.5em' }}>🥲 </span>
    </h1>
    <h2 class="neonText">Click On Screen And turn around</h2> 
    <h2 class="neonText">Movement Using W S A D & Space(Jump) Button</h2>

 </div>
</Html> 
     
    
      <meshLambertMaterial attach="material"  color="black"
        transparent 
        opacity={0.1}
        roughness={1}
        metalness={0} />
  </mesh> </>
  );
};

export default Inst;