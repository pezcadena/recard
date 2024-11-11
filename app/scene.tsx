'use client'

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Card from "./card";

interface SceneProps{
  imageUrl: string
}

export default function Scene({imageUrl}:SceneProps){
  return(
    <Canvas camera={{ position: [0, 0, 5], zoom: 2.5 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 1]} />
      <Card imageUrl={imageUrl} />
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
}
