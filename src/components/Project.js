import React from "react";
import { useBox } from "@react-three/cannon";
import { Html } from "@react-three/drei";
import "./Texts.css";

const Project = () => {
  const [ref] = useBox(() => ({
    //mass: 1,
    position: [22, 4, -11],
  }));
  return (
    <>
      <mesh ref={ref}>
        <Html scale={1} rotation={[Math.PI / 1, 3.1, 3.1]} transform occlude>
          <div className="the-neon-sign">
            <h2 className="focuss"> Projects </h2>

            <div>
              <h3 className="focuss"> Meta Game Fantasy (M G F) </h3>

              <p className="focuss">
                Meta Game Fantasy is the gaming application in founded on a
                solidarity game, special competitons, and formats.
              </p>
              <p className="focuss">
                Working on backend Node.js, Express is used for the server &
                postgres, postgres create schema and data modeling
              </p>

              <h3 className="focuss"> Gas-O-Line </h3>

              <p className="focuss">
                {" "}
                Gas-O-Line is the webApp provides monthly subscription gas at
                low prices.
              </p>
              <p className="focuss">
                {" "}
                Drilling for oil and gas production in Texas,Nevada, New Mexico
                Alaska and Louisiana
              </p>
              <p className="focuss">
                Working on backend Node.js, stripe payment gateway for
                subscription. API for creating user, product and webhook
                implementation
              </p>
            </div>

            <h2 className="focuss"> Personal Projects </h2>

            <h3 className="focuss"> Memories(mern) </h3>

            <p className="focuss">
              {" "}
              Development using technologies like React with Javascript,
              Material UI, CSS3 Managed application state with Redux{" "}
            </p>
            <p className="focuss">
              {" "}
              For back end Node.js, Express is used for the server & MongoDB,
              Mongoose create schema and data modeling
            </p>
            <h3 className="focuss"> E-commerce</h3>

            <p className="focuss">
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
