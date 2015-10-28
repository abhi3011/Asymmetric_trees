var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


 renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);




var cubegeo = new THREE.BoxGeometry(50, 5, 5);
var cubemat = new THREE.MeshBasicMaterial({
    color: 0xdddddd,
    wireframe: true
  });
var cube = new THREE.Mesh(cubegeo,cubemat); 

cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;
scene.add(cube);
 camera.position.x = 40;
  camera.position.y = 40;
  camera.position.z = 40;

  camera.lookAt(scene.position);

  renderer.render(scene, camera);