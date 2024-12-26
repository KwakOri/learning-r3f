import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { CardDataTypes } from "../../App";

interface CardProps extends CardDataTypes {}

const Card = ({ imageUrl, position, rotationY, rotationZ }: CardProps) => {
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  const materials = [
    new THREE.MeshStandardMaterial(),
    new THREE.MeshStandardMaterial(),
    new THREE.MeshStandardMaterial(),
    new THREE.MeshStandardMaterial(),
    new THREE.MeshStandardMaterial({
      map: texture,
    }),
    new THREE.MeshStandardMaterial(),
  ];
  return (
    <mesh
      material={materials}
      position={position}
      rotation-y={THREE.MathUtils.degToRad(rotationY)}
      rotation-z={THREE.MathUtils.degToRad(rotationZ)}
    >
      <boxGeometry args={[1, 1.6, 0.02]} />
    </mesh>
  );
};

export default Card;
