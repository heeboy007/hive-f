
import { generateText } from '../objects/2d/text';
//import square from './src/objects/2d/square';
import edgedCube from '../objects/3d/cube';
import { fbxModelList, getFbxModel } from '../objects/3d/fbxmodel';

import { scene, camera } from "./init";

//const text = generateText('hello world', 0x223344);

function sceneInit() {
    //scene.add( square );
    //scene.add( text );
    const male = getFbxModel(fbxModelList[0]);
    //console.log(male);

    scene.add(edgedCube);
    //scene.add(male);

    camera.position.z = 5;
}

function sceneLoop() {
    edgedCube.rotation.x += 0.01;
	edgedCube.rotation.y += 0.01;

    //text.rotation.x += 0.01;
    //text.rotation.y += 0.01;
}

export { sceneInit, sceneLoop }