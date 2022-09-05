
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
const sphere_5 = new THREE.Mesh( geometry.sphere, material);
const sphere_6 = new THREE.Mesh( geometry.sphere, material);
const sphere_7 = new THREE.Mesh( geometry.sphere, material);
const sphere_8 = new THREE.Mesh( geometry.sphere, material);
const sphere_9 = new THREE.Mesh( geometry.sphere, material);
const sphere_10 = new THREE.Mesh( geometry.sphere, material);
const sphere_11 = new THREE.Mesh( geometry.sphere, material);
const sphere_12 = new THREE.Mesh( geometry.sphere, material);
const sphere_13 = new THREE.Mesh( geometry.sphere, material);
const sphere_14 = new THREE.Mesh( geometry.sphere, material);
const sphere_15 = new THREE.Mesh( geometry.sphere, material);
const sphere_16 = new THREE.Mesh( geometry.sphere, material);
scene.add( cube, sphere, sphere_2,sphere_3, sphere_4, sphere_5,sphere_6, sphere_7, sphere_8,sphere_9, sphere_10, sphere_11,sphere_12, sphere_13, sphere_14, sphere_15, sphere_16 );

camera.position.z = 45;
sphere.translateX(15);
sphere.translateY(15);

sphere_2.translateX(5);
sphere_2.translateY(15);

sphere_3.translateX(-5);
sphere_3.translateY(15);

sphere_4.translateX(-15);
sphere_4.translateY(15);

sphere_5.translateX(15);
sphere_5.translateY(5);

sphere_6.translateX(5);
sphere_6.translateY(5);

sphere_7.translateX(-5);
sphere_7.translateY(5);

sphere_8.translateX(-15);
sphere_8.translateY(5);

sphere_9.translateX(15);
sphere_9.translateY(-5);

sphere_10.translateX(5);
sphere_10.translateY(-5);

sphere_11.translateX(-5);
sphere_11.translateY(-5);

sphere_12.translateX(-15);
sphere_12.translateY(-5);

sphere_13.translateX(15);
sphere_13.translateY(-15);

sphere_14.translateX(5);
sphere_14.translateY(-15);

sphere_15.translateX(-5);
sphere_15.translateY(-15);

sphere_16.translateX(-15);
sphere_16.translateY(-15);



//this.controls = new OrbitControls(camera, domElement);
//const controls = new THREE.OrbitControls(camera, renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );

//function MouseClick() {
  //  sphere_4.rotation.y += Math.PI;
//}
//window.addEventListener( 'click', MouseClick, true );

//RAYcaster

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( pointer, camera );
    const intersects = raycaster.intersectObjects( scene.children );
    for ( let i = 0; i < intersects.length; i ++ ) {
        const newObject = intersects[i].object;
		newObject.transparent = true;
        newObject.rotation.y += Math.PI;
	}

}

function render() {
    requestAnimationFrame( render );
    //controls.update();
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //sphere.rotation.x += 0.01;
    renderer.render( scene, camera );
    
}

window.addEventListener( 'click', onPointerMove, false );

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

