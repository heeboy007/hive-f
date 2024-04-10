
import lvLogger from '../log/implement/logLevelLogger';
import edgedCube from '../objects/3d/cube';
import { getglTFModel, glTFModelList } from '../objects/3d/glTFmodel';
import { createLights } from './environment/light';

import { scene, camera, renderer } from "./init";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';
import { getTexture, textureUrlList } from '../objects/texture/textureLoader';

//const text = generateText('hello world', 0x223344);
let commonObjects = {};

function animateMorphTargets(mesh, target) {
    // Find the mesh that contains the morph targets
    mesh.traverse(function (child) {
        if (child.isMesh && child.morphTargetInfluences) {
            // child.morphTargetInfluences is an array where each element controls the influence of a morph target
            child.morphTargetInfluences[0] = target; // Adjust this value between 0 and 1
        }
    });
}

function sceneInit() {
    //scene.add( square );
    //scene.add( text );

    // Setup OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0); // Set the target point here
    controls.update();
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    //this SHOULD be called here, since it's called after the await.
    //const male = getFbxModel(fbxModelList[0]);
    //const gltf_male = getglTFModel(glTFModelList[0]);
    const gltf_female = getglTFModel(glTFModelList[1]);
    const light = createLights();

    /*const male_texture = getTexture(textureUrlList[0]);
    const material = new THREE.MeshStandardMaterial({ map: male_texture });

    gltf_male.scene.traverse(function (child) {
        if (child.isMesh) {
            child.material = material;
        }
    });*/

    //scene.add(edgedCube);
    //scene.add(male);
    scene.add(gltf_female.scene);
    scene.add(light);

    commonObjects = {
        edgedCube,
        gltf_female,
        light
    };

    const silder = document.getElementById('input_silder_target');
    silder.addEventListener('input', (e) => {
        animateMorphTargets(gltf_female.scene, e.target.value);
    });

    //카메라에 모델을 정면에서 볼 수 있는 최적의 각도
    camera.position.y = 1
    camera.position.z = 2;
    // camera.rotation.x = 2
    // camera.rotation.y = 0;
    // camera.rotation.z = 0;
    camera.lookAt(new THREE.Vector3(0, 1, 0)); // Ensure the camera is looking at the point where your model is centered
}


function sceneLoop() {
    //lvLogger.info("x : " + x, "y : " + y, "z : " + z);

    // Example of updating a morph target influence in the render loop
    const mesh = scene.children.find(child => child.isMesh && child.morphTargetInfluences);
    if (mesh) {
        lvLogger.info(mesh);
        mesh.morphTargetInfluences[0] = (Math.sin(Date.now() * 0.001) + 1) / 2; // Oscillate the influence
    }

    edgedCube.rotation.x += 0.01;
	edgedCube.rotation.y += 0.01;
}

export { sceneInit, sceneLoop }