import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { Room } from "./Room";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <motion.div
        key={"everything"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <Canvas
          style={{ position: "absolute" }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <ambientLight />
          <OrbitControls />
          <directionalLight color={"#F8C9E2"} position={[1, 1, 1]} />
          <Environment preset="night" />
          <directionalLight position={[-4, 2, -2]} color={"red"} />
          <Room />
          {hover ? (
            <Html position={[0, -2.5, 0]}>
              <motion.p
                key={"control"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.4,
                  delay: 0,
                }}
              >
                scroll:Zoom click:rotation rightclic:move
              </motion.p>
            </Html>
          ) : (
            " "
          )}
        </Canvas>

        <main id="portfolio">
          <Portfolio />
        </main>
      </motion.div>
    </>
  );
}

export default App;
