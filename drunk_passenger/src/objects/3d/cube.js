import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

const edges = new THREE.EdgesGeometry(geometry); // Generate edges from the cube's geometry
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }); // Material for the edges, here using white
const edgesMesh = new THREE.LineSegments(edges, lineMaterial); // Create a line segment mesh to represent the edges

const edgedCube = new THREE.Group();
edgedCube.add(cube);
edgedCube.add(edgesMesh);

export default edgedCube;