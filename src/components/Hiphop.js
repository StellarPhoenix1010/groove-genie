/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Hiphop(props) {
    const group = useRef();
    // const { nodes, materials, animations } = useGLTF("/hiphop.glb");
    // const { nodes, materials, animations } = useGLTF("/hiphop.gltf");
    // const { nodes, materials, animations } = useGLTF(
    //     "/hiphop2_out/hiphop2.gltf"
    // );
    // const { nodes, materials, animations } = useGLTF(
    //     "/spin_out/spin-transformed.glb"
    // );
    // const { nodes, materials, animations } = useGLTF(
    //     "/rickroll_out/rickroll.gltf"
    // );
    // const { nodes, materials, animations } = useFBX('/2_cuda_2_rickroll_slice6 (1).fbx')
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        let k = "Armature|mixamo.com|Layer0";
        // k = "mixamo.com";
        console.log(actions);
        console.log(actions[k]);
        actions[k].play();
        actions[k]._loopCount = -1;
        // actions[k].repetitions = 1;
        console.log(actions[k].loop);
        setInterval(() => {
            // console.log(actions["Armature|mixamo.com|Layer0"]);
            // actions["Armature|mixamo.com|Layer0"].loop
            console.log("here");
            // actions[k].halt();
            // actions["Armature|mixamo.com|Layer0"].stop();
            // actions[k].play();
        }, 4500);
    });

    // return <primitive object={gltf.scene} />;
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group
                    name="Armature"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                >
                    <primitive object={nodes.mixamorigHips} />
                    <skinnedMesh
                        name="Alpha_Joints"
                        geometry={nodes.Alpha_Joints.geometry}
                        material={materials.Alpha_Joints_MAT}
                        skeleton={nodes.Alpha_Joints.skeleton}
                        receiveShadow
                        castShadow
                    />
                    <skinnedMesh
                        name="Alpha_Surface"
                        geometry={nodes.Alpha_Surface.geometry}
                        material={materials.Alpha_Body_MAT}
                        skeleton={nodes.Alpha_Surface.skeleton}
                        receiveShadow
                        castShadow
                    >
                        <meshPhongMaterial color="#3399ff" shininess={1000} />
                    </skinnedMesh>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/hiphop.glb");