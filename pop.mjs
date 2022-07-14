
//import OrbitControls from './OrbitControls';

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

const geometry = new THREE.BoxGeometry( 10, 13, 10);

const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 25;

//var controls = new OrbitControls(camera, renderer.domElement);



// Update controls after camera position changed
//controls.update();

function render() {
    requestAnimationFrame( render );
    //controls.update();
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    renderer.render( scene, camera );
}
render();