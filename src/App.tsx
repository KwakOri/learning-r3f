import { Canvas } from "@react-three/fiber";
import Frame from "./components/Frame";
import WorkArea from "./components/WorkArea/WorkArea";

function App() {
  return (
    <Frame>
      <Canvas
        shadows
        camera={{
          position: [0, 0, 3],
        }}
      >
        <WorkArea />
      </Canvas>
    </Frame>
  );
}

export default App;
