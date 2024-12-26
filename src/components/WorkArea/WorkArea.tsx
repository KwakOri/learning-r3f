import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { DirectionalLight } from "three";
import Card from "../Card";

export interface CardDataTypes {
  frontImageUrl: string;
  backImageUrl: string;
  position: THREE.Vector3;
  rotationY: number;
  rotationZ: number;
}

const cardData: CardDataTypes[] = [
  {
    frontImageUrl: "/images/tarrot_01.png",
    backImageUrl: "/images/card_01.png",
    position: new THREE.Vector3(0, -1, 0),
    rotationY: -10,
    rotationZ: 0,
  },
  {
    frontImageUrl: "/images/tarrot_02.png",
    backImageUrl: "/images/card_02.png",
    position: new THREE.Vector3(0.5, -1.05, -0.1),
    rotationY: -10,
    rotationZ: -10,
  },
  {
    frontImageUrl: "/images/tarrot_03.png",
    backImageUrl: "/images/card_03.png",
    position: new THREE.Vector3(-0.5, -1.05, 0.1),
    rotationY: -10,
    rotationZ: 10,
  },
  {
    frontImageUrl: "/images/tarrot_04.png",
    backImageUrl: "/images/card_04.png",
    position: new THREE.Vector3(-1, -1.15, 0.2),
    rotationY: -10,
    rotationZ: 20,
  },
  {
    frontImageUrl: "/images/tarrot_05.png",
    backImageUrl: "/images/card_05.png",
    position: new THREE.Vector3(1, -1.15, -0.2),
    rotationY: -10,
    rotationZ: -20,
  },
];

const WorkArea = () => {
  const lightRef = useRef<DirectionalLight>(null!);
  // useHelper(lightRef, DirectionalLightHelper, 1, "blue");
  const { camera } = useThree();
  useFrame(() => {
    camera.lookAt(0, 0.5, 0);
  });
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.7} />
      <directionalLight
        castShadow
        shadow-mapSize={[5000, 5000]}
        target-position={[0, -1, 0]}
        ref={lightRef}
        intensity={4}
        position={[-4, 2, 3]}
      />

      {cardData.map((props) => (
        <Card {...props} />
      ))}
    </>
  );
};

export default WorkArea;
