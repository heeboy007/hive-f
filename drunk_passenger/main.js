
import { scene, camera, renderer } from './src/world/init';
import logger from './src/log/logger';
import { loadFonts } from './src/objects/2d/fonts/fonts';
import { sceneInit, sceneLoop } from './src/world/scene';

document.body.appendChild( renderer.domElement );

function preProcess() {
	loadFonts()
	.then(() => {
		logger.info('loadFont success');
	})
	.catch(() => {
		logger.error('loadFont is dead for some reason...');
	});
	sceneInit();
}

function animate() {
	requestAnimationFrame( animate );

	sceneLoop();

	renderer.render( scene, camera );
}

preProcess();
animate();

