
import { scene, camera, renderer } from './src/world/init';
import lvLogger from './src/log/implement/logLevelLogger';
import { loadFonts } from './src/objects/2d/fonts/fonts';
import { sceneInit, sceneLoop } from './src/world/scene';
import { loadFbxModels } from './src/objects/3d/fbxmodel';

document.body.appendChild( renderer.domElement );

//console.log(logger);

function preProcess() {
	//font loader
	loadFonts()
	.then(() => {
		lvLogger.info('loadFont success');
	})
	.catch(() => {
		lvLogger.error('loadFont is dead for some reason...');
	});
	//fbx loader
	loadFbxModels()
	.then(() => {
		lvLogger.info('loadFbxModel success');
	})
	.catch(() => {
		lvLogger.error('loadFbxModel is not working.');
	}) 
	sceneInit();
}

function animate() {
	requestAnimationFrame( animate );

	sceneLoop();

	renderer.render( scene, camera );
}

preProcess();
animate();

