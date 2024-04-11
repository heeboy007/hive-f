import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import lvLogger from '../../../log/implement/logLevelLogger';

let fontList = {};

function loadFont(url) {
    const loader = new FontLoader();
    return new Promise(
        (resolve, reject) => { 
            loader.load(url, ( fontObject ) => {
                fontList[url] = fontObject;
                resolve();
            }, 
            (xhr) => {
                lvLogger.info("font load : " + xhr.loaded / xhr.total * 100 + "%");
            }, 
            (error) => {
                lvLogger.error(error);
                reject();
            }); 
        }
    );
}

const fontLocationList = [
    'fonts/SDream9.json'
];

const DEFAULT_FONT = 'fonts/SDream9.json';

const fontPromiseList = fontLocationList.map((fontLocation) => {
    return loadFont(fontLocation);
});

export function loadFonts() {
    return Promise.all(fontPromiseList);
};

export function getFont(url) {
    return fontList[url];
}

export {
    DEFAULT_FONT
}
