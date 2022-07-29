
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

function tap (id) {
   let kick = document.getElementById(id)
   if (kick.value == '1') {
       //kick.innerHTML = '0';
       kick.value = '0';
       kick.style.background = 'hsl(249, 100%, 58%)';
   }
   else {
       //kick.innerHTML = '1';
       kick.value = '1';
       kick.style.background = 'hsl(249deg 66% 31%)';
   }
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x282c34);
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 8000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = {
    cube: new THREE.BoxGeometry( 40, 40, 5),
    sphere: new THREE.SphereGeometry(5, 64, 32, 0, 3, 0, 3.14),
    sphere_2: new THREE.SphereGeometry(5),
    sphere_3: new THREE.SphereGeometry(5),
    sphere_4: new THREE.SphereGeometry(5),
}
 

const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);

const cube = new THREE.Mesh( geometry.cube, material );
const sphere = new THREE.Mesh( geometry.sphere, material);
const sphere_2 = new THREE.Mesh( geometry.sphere, material);
const sphere_3 = new THREE.Mesh( geometry.sphere, material);
const sphere_4 = new THREE.Mesh( geometry.sphere, material);
scene.add( cube, sphere, sphere_2,sphere_3, sphere_4 );

camera.position.z = 45;
sphere.translateX(15);
sphere.translateY(15);

sphere_2.translateX(5);
sphere_2.translateY(15);

sphere_3.translateX(-5);
sphere_3.translateY(15);

sphere_4.translateX(-15);
sphere_4.translateY(15);


//this.controls = new OrbitControls(camera, domElement);
//const controls = new THREE.OrbitControls(camera, renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );



// Update controls after camera position changed
//controls.update();

function render() {
    requestAnimationFrame( render );
    //controls.update();
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //sphere.rotation.x += 0.01;
    //sphere.rotation.y += 0.01;
    renderer.render( scene, camera );
}
render();
//renderer.render(scene, camera);
 /*

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x282c34);
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set(0,0,100); 
camera.lookAt(0,0,0);
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const material = new THREE.MeshNormalMaterial();
const points = [];
points.push( new THREE.Vector3(- 10, 0, 0));
points.push( new THREE.Vector3( 0, 10, 0));
points.push( new THREE.Vector3( 0, 10, 10));
points.push( new THREE.Vector3( 3, 1, 9));
points.push( new THREE.Vector3( 0, 10, 50));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line( geometry, material);

scene.add(line);
renderer.render(scene, camera);*/

