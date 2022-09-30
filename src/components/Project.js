import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const Project = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [22, 2, -11],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 3.1, 3.1]} transform occlude>
          <div className="the-neon-sign">
            <h2> Projects </h2>

            <div>
              <h3> Meta Game Fantasy (M G F) </h3>

              <p>
                Meta Game Fantasy is the gaming application in founded on a
                solidarity game, special competitons, and formats.
              </p>
              <p>
                For back end Node.js, Express is used for the server & MongoDB,
                Mongoose create schema and data modeling
              </p>

              <h3> Memories(mern) </h3>

              <p>
                {" "}
                Front end and Back end User interface components in React-Js
                with Javascript and ES6 features Managed application{" "}
              </p>
              <p>
                {" "}
                state with Redux-Thunk Commerce.js provides inbuilt
                functionality for supporting customer logins without any
                server-side code.{" "}
              </p>
            </div>

            <h2> Projects </h2>

            <h3> Memories(mern) </h3>

            <p>
              {" "}
              Development using technologies like React with Javascript,
              Material UI, CSS3 Managed application state with Redux{" "}
            </p>
            <p>
              {" "}
              For back end Node.js, Express is used for the server & MongoDB,
              Mongoose create schema and data modeling
            </p>

            <h3> Memories(mern) </h3>

            <p>
              {" "}
              Front end and Back end User interface components in React-Js with
              Javascript and ES6 features Managed application{" "}
            </p>
            <p>
              {" "}
              state with Redux-Thunk Commerce.js provides inbuilt functionality
              for supporting customer logins without any server-side code.{" "}
            </p>

            <h3> E-commerce</h3>

            <p>
              {" "}
              Front end UI development using technologies Using React.js, redux,
              and Firebases. LinkedIn Clone Front end{" "}
            </p>
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

export default Project;
