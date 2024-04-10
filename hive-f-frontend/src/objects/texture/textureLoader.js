import * as THREE from 'three';
import lvLogger from '../../log/implement/logLevelLogger';

let textures = new Object;

function loadTexture(url) {
    const textureLoader = new THREE.TextureLoader();
    return new Promise (
        (resolve, reject) => {
            const texture = textureLoader.load(
                url, 
                function (texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.offset.set(0, 0);
                    texture.repeat.set(1, 1);
                },
            );
            if(texture) {
                textures[url] = texture;
                lvLogger.info("texture loaded");
                resolve();
            } else {
                lvLogger.error("texture not loaded");
                reject();
            }
        }
    );
}

export const textureUrlList = [
    '/glTF/Male_texture.png',
];

export function loadTextures() {
    return Promise.all(textureUrlList.map((location) => {
        return loadTexture(location);
    }));
}

export function getTexture(url) {
    return textures[url];
}