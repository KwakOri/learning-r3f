import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas
        camera={{
          position: [3, 3, 3],
        }}
      >
        <OrbitControls />
        <axesHelper />
        <directionalLight intensity={2} position={[3, 10, 3]} />
        <mesh position={[-1, 0.5, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh position={[4, 0.5, 3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"blue"} />
        </mesh>
        <mesh position={[-2, 0.5, -3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <gridHelper args={[10, 20]} />
      </Canvas>
    </div>
  );
}

export default App;
