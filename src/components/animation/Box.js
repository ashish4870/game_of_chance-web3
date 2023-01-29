import React from 'react'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
const Box = () => {
  return (
    <mesh rotation={[90, 0, 90]}>
        <boxBufferGeometry attach='geometry' args={[3,3,3]}/>
        <meshNormalMaterial attach='material'/>
    </mesh>
  ) 
}

export default Box