import { DirectionalLight } from 'three';

function createLights() {
    const light = new DirectionalLight('white', 5.0);

    light.position.set(200, -100, 100);

    return light;
}

export { createLights };