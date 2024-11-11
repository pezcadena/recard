'use client'

import { Text } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface CardProps{
  imageUrl:string
}

export default function Card({imageUrl}:CardProps){

  const cardRef = useRef<THREE.Mesh>(null);
  const backRef = useRef<THREE.Mesh>(null);

  // Cargar la imagen subida como textura
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  // Animación para rotar suavemente la carta
  useFrame(({ clock }) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = 0.1 * Math.sin(clock.getElapsedTime()*2);
    }
    if (backRef.current) {
      backRef.current.rotation.y = 0.1 * Math.sin(clock.getElapsedTime()*2);
    }
  });

  return(
     <group>
        <mesh ref={cardRef}>
          <planeGeometry args={[1.8, 3]} />
          <meshStandardMaterial color={new THREE.Color('#1E1915')} />
          <mesh position={[-0.02, 0.4, 0.0001]}>
            <planeGeometry args={[1.5, 2]} />
            <meshStandardMaterial map={texture} />
          </mesh>

          {/* Añadir texto en la parte superior de la carta */}
          <Text
            position={[0, -1, 0.001]} // Ajustar la posición del texto
            fontSize={0.2} // Ajustar el tamaño de la fuente
            color={new THREE.Color('#C5CCB8')}
            anchorX="center"
            anchorY="middle"
          >
            Texto de prueba
          </Text>
        </mesh>
        <mesh ref={backRef} position={[0, 0, 0]}>
          <planeGeometry args={[1.8, 3]} />
          <meshBasicMaterial side={THREE.BackSide} color={new THREE.Color('#1E1915')}/>
        </mesh>
     </group>
  )
}
