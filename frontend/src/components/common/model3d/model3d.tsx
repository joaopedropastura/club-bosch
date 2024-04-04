'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

const Model = (props : any) => {
    const {scene} = useGLTF("./layout.glb")


    return <primitive object={scene} scale={0.01} {...props} />
}

export default function Model3d() {

    return (
        <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{width: "50vw", height:"50vh"}} >
            <color attach="background" args={['#fff']} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={null}>
                    <Model scale={0.3} />
                </Stage>

            </PresentationControls>
        </Canvas>
    );
}

