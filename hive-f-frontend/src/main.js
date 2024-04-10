
import { scene, camera, renderer } from './world/init';
import lvLogger from './log/implement/logLevelLogger';
import { loadFonts } from './objects/2d/fonts/fonts';
import { sceneInit, sceneLoop } from './world/scene';
import { loadFbxModels } from './objects/3d/fbxmodel';
import { loadglTFModels } from './objects/3d/glTFmodel';
import { loadTextures } from './objects/texture/textureLoader';

document.body.appendChild( renderer.domElement );

// Variables to control FPS
let fps = 60; // Desired frames per second
let interval = 1000 / fps; // Interval in milliseconds
let lastTime = (new Date()).getTime();
let currentTime = 0;
let delta = 0;

async function preProcess() {
	//font loader
	loadFonts()
	.then(() => {
		lvLogger.info('loadFont success');
	})
	.catch(() => {
		lvLogger.error('loadFont is dead for some reason...');
	});
	//glTF loader
	await loadglTFModels()
	.then(() => {
		lvLogger.info('loadglTFModel success');
	})
	.catch(() => {
		lvLogger.error('loadglTFModel is not working.');
	}) 
	//texture loader
	await loadTextures()
	.then(() => {
		lvLogger.info('loadTextures success');
	})
	.catch(() => {
		lvLogger.error('loadTextures is not working.');
	}) 
	sceneInit();
}

function animate() {
	requestAnimationFrame( animate );

	currentTime = (new Date()).getTime();
    delta = currentTime - lastTime;

    if (delta > interval) {
        sceneLoop();
		renderer.render( scene, camera );

		// Save the timestamp of the last rendered frame
        lastTime = currentTime - (delta % interval); 
    }
}

preProcess();
animate();

