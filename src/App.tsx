import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "./components/Card";
import Frame from "./components/Frame";

export interface CardDataTypes {
  imageUrl: string;
  position: [number, number, number];
  rotationY: number;
  rotationZ: number;
}

const cardData: CardDataTypes[] = [
  {
    imageUrl: "/images/tarrot_01.png",
    position: [0, -1, 0],
    rotationY: -10,
    rotationZ: 0,
  },
  {
    imageUrl: "/images/tarrot_02.png",
    position: [0.5, -1.05, -0.1],
    rotationY: -10,
    rotationZ: -10,
  },
  {
    imageUrl: "/images/tarrot_03.png",
    position: [-0.5, -1.05, 0.1],
    rotationY: -10,
    rotationZ: 10,
  },
  {
    imageUrl: "/images/tarrot_04.png",
    position: [-1, -1.15, 0.2],
    rotationY: -10,
    rotationZ: 20,
  },
  {
    imageUrl: "/images/tarrot_05.png",
    position: [1, -1.15, -0.1],
    rotationY: -10,
    rotationZ: -20,
  },
];

function App() {
  return (
    <Frame>
      <Canvas
        camera={{
          position: [0, 2, 4],
        }}
      >
        <OrbitControls />
        <directionalLight intensity={0.7} position={[3, 3, -3]} />
        <directionalLight intensity={4} position={[4, 1, 4]} />

        {cardData.map((props) => (
          <Card {...props} />
        ))}
      </Canvas>
    </Frame>
  );
}

export default App;
