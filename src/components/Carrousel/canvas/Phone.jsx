import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { TextureLoader, MeshBasicMaterial } from "three";

useGLTF.preload("/phoneModel.glb");

function Phone({texture}){
  const { scene, nodes } = useGLTF("/phoneModel.glb");
  const screenTexture = useLoader(TextureLoader, texture);

  useEffect(() => {
    const screen = nodes.Screen_Wallpaper_0;
    if(screen) {
      screen.material = new MeshBasicMaterial({map: screenTexture});
      screen.material.needsUpdate = true;
    } else {
      console.log("No se encontró el mesh de la pantalla");
    }
  }, [nodes, screenTexture])
  return (
      <group>
        <primitive object={scene} />
      </group>
  );
}

export default Phone;