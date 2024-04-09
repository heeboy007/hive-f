import * as THREE from 'three';
import { DEFAULT_FONT, getFont } from './fonts/fonts';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export function generateText(text, color) {
    const font = getFont(DEFAULT_FONT);

    // Once the font is loaded, create the TextGeometry
    const textGeometry = new TextGeometry( text, {
        font: font,
        size: 0.5, // Height of the text
        height: 0.2, // Thickness of the text
        curveSegments: 12, // How many segments to use for curves
        bevelEnabled: true, // Whether the text should have beveled edges
        bevelThickness: 0.03, // How deep the bevel goes
        bevelSize: 0.02, // How far the bevel extends from the text
        bevelOffset: 0,
        bevelSegments: 5 // Number of bevel segments
    });

    // Create a mesh with the TextGeometry and a MeshBasicMaterial
    const textMaterial = new THREE.MeshBasicMaterial( { color: color } ); // Green text
    const textMesh = new THREE.Mesh( textGeometry, textMaterial );

    return textMesh;
}