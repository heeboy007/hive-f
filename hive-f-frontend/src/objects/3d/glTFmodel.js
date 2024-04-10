import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import lvLogger from '../../log/implement/logLevelLogger';

let glTFModel = new Object;
//let defaultModel = null;

function loadglTF(url) {
    const gLTFLoader = new GLTFLoader();
    return new Promise (
        (resolve, reject) => {
            gLTFLoader.load(
                url, (glTFObject) => {
                    glTFModel[url] = glTFObject;
                    resolve();
                },
                (xhr) => {
                    lvLogger.info('glTF model load : ' + (xhr.loaded / xhr.total) * 100 + '%')
                },
                (error) => {
                    lvLogger.error(error);
                    reject();
                }
            )
        }
    );
}

export const glTFModelList = [
    '/glTF/MALE.glb',
];

export function loadglTFModels() {
    return Promise.all(glTFModelList.map((location) => {
        return loadglTF(location);
    }));
}

export function getglTFModel(url) {
    return glTFModel[url];
}