import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

const Model = (props : any) => {
    const {scene} = useGLTF("./bmw.glb")

    return <primitive object={scene} scale={0.01} {...props} />
}

const home = () => {

    return (
        <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{"position": "absolute"}}>
            <color attach="background" args={['#fff']} />
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={null}>
                    <Model scale={0.3} />
                </Stage>

            </PresentationControls>
        </Canvas>
    );
}

export default home;