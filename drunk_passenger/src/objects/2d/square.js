import * as THREE from 'three';

// Define the size of the square
const size = 3; // This will create a 1x1 square
const geometry = new THREE.PlaneGeometry(size, size);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const square = new THREE.Mesh(geometry, material);

const edges = new THREE.EdgesGeometry(geometry); // Generate edges from the cube's geometry
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x222222, linewidth: 100 }); // Material for the edges, here using white
const edgesMesh = new THREE.LineSegments(edges, lineMaterial); // Create a line segment mesh to represent the edges

// Create a mesh by combining the geometry and material
const edgedSquare = new THREE.Group();
edgedSquare.add(square);
edgedSquare.add(edgesMesh);

export default edgedSquare;