
import lvLogger from '../log/implement/logLevelLogger';
import { generateText } from '../objects/2d/text';
//import square from './src/objects/2d/square';
import edgedCube from '../objects/3d/cube';
import { fbxModelList, getFbxModel } from '../objects/3d/fbxmodel';
import { createLights } from './environment/light';

import { scene, camera } from "./init";

//const text = generateText('hello world', 0x223344);
let commonObjects = {};

function sceneInit() {
    //scene.add( square );
    //scene.add( text );

    //this SHOULD be called here, since it's called after the await.
    const male = getFbxModel(fbxModelList[0]);
    const light = createLights();

    scene.add(edgedCube);
    scene.add(male);
    scene.add(light);

    camera.position.z = 200;
}

function sceneLoop() {
    edgedCube.rotation.x += 0.01;
	edgedCube.rotation.y += 0.01;

    //male.rotation.x += 0.01;
    //male.rotation.y += 0.01;
}

export { sceneInit, sceneLoop }