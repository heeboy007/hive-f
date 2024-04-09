import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import lvLogger from '../../log/implement/logLevelLogger';

let fbxModel = {};

function loadFbx(url) {
    const fbxLoader = new FBXLoader();
    return new Promise (
        (resolve, reject) => {
            fbxLoader.load(
                url, ( fbxObject ) => {
                    // object.traverse(function (child) {
                    //     if ((child as THREE.Mesh).isMesh) {
                    //         // (child as THREE.Mesh).material = material
                    //         if ((child as THREE.Mesh).material) {
                    //             ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
                    //         }
                    //     }
                    // })
                    // object.scale.set(.01, .01, .01)
                    fbxLoader[url] = fbxObject;
                    resolve();
                },
                (xhr) => {
                    lvLogger.info((xhr.loaded / xhr.total) * 100 + '% loaded')
                },
                (error) => {
                    lvLogger.error(error);
                    reject();
                }
            )
        }
    );
}

export const fbxModelList = [
    '/fbx/MALE.fbx',
    '/fbx/FEMALE.fbx',
];

export function loadFbxModels() {
    return Promise.all(fbxModelList.map((location) => {
        return loadFbx(location);
    }))
}

export function getFbxModel(url) {
    return fbxModel[url];
}