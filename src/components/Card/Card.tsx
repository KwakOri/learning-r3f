import { ThreeEvent, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { CardDataTypes } from "../WorkArea/WorkArea";

import { animated, useSpring } from "@react-spring/three";
import { useState } from "react";

interface CardProps extends CardDataTypes {}

const createMaterials = (front: THREE.Texture, back: THREE.Texture) => {
  return [
    new THREE.MeshStandardMaterial(), // 뒷면
    new THREE.MeshStandardMaterial(), // 앞면
    new THREE.MeshStandardMaterial(), // 윗면
    new THREE.MeshStandardMaterial(), // 바닥면
    new THREE.MeshStandardMaterial({ map: front, toneMapped: true }), // 앞면 (이미지 적용)
    new THREE.MeshStandardMaterial({ map: back, toneMapped: true }), // 뒷면
  ];
};

const adjustRotation = (rotation: number, adjustment: number): number => {
  return rotation === 0 ? rotation : rotation + adjustment;
};

interface SpringProps {
  position: [number, number, number];
  "rotation-x": number;
  "rotation-y": number;
  "rotation-z": number;
}

const Card = ({
  frontImageUrl,
  backImageUrl,
  position,
  rotationY,
  rotationZ,
}: CardProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const textures = {
    front: useLoader(THREE.TextureLoader, frontImageUrl),
    back: useLoader(THREE.TextureLoader, backImageUrl),
  };

  textures.front.colorSpace = THREE.SRGBColorSpace;
  textures.back.colorSpace = THREE.SRGBColorSpace;
  const materials = createMaterials(textures.front, textures.back);

  const getSpringProps = (isHover: boolean): SpringProps => {
    return {
      position: [position.x, isHover ? position.y + 1 : position.y, position.z],
      "rotation-x": 0,
      "rotation-y": THREE.MathUtils.degToRad(
        (isClicked ? 180 : 0) +
          (isHover ? adjustRotation(rotationY, 5) : rotationY)
      ),
      "rotation-z": THREE.MathUtils.degToRad(
        (isClicked ? -1 : 1) *
          (isHover
            ? adjustRotation(rotationZ, rotationZ > 0 ? -5 : 5)
            : rotationZ)
      ),
    };
  };

  const props = useSpring({
    to: getSpringProps(isHover),

    config: { mass: 5, tension: 400, friction: 100 },
  });

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsHover(true);
  };
  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsHover(false);
  };
  const handlePointerDown = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setIsClicked((prev) => !prev);
  };

  return (
    <animated.mesh
      castShadow
      receiveShadow
      material={materials}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handlePointerDown}
      {...props}
    >
      <boxGeometry args={[1, 1.6, 0.02]} />
      {/* <axesHelper /> */}
    </animated.mesh>
  );
};

export default Card;
