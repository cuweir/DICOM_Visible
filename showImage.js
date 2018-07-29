document.write("<script type='text/javascript' src='jquery.js'></script>");
document.write("<script type='text/javascript' src='three.js'></script>");
document.write("<script type='text/javascript' src='TrackballControls.js'></script>");

function main() {

	var scene = new.THREE.Scene();//初始化场景
	//初始化相机
	var camera = new.THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 0, 30);
	camera.lookAt(scene.position);

	//初始化时钟
	var clock = new.THREE.Clock();

	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x000000, 1);//black
	renderer.setSize(window.innerWidth, window.innerHeight);

	var axes = new THREE.AxesHelper(20);
	scene.add(axes);

	//纹理
	var texture = THREE.ImageUtils.loadTexture("0.png");

	var planeGeometry = new THREE.PlaneGeometry(11, 11, 1, 1);
	var planeMaterial = new THREE.MeshLambertMaterial({map: texture});
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);//create a plane

	var spotLight = new THREE.SpotLight("blue");
	spotLight.position.set = (-40, 60, -10);
	scene.add(spotLight);
	planeGeometry.colorsNeedUpdate = true;

	var ambientLight = new THREE.AmbientLight("white");
	scene.add(ambientLight);

	scene.add(plane);

	document.body.appendChild(renderer.domElement);

	var trackballControls.rotateSpeed = 1.0;
	trackballControls.zoomSpeed = 1.0;
	trackballControls.panSpeed = 1.0;
	trackballControls.staticMoving = true;

	render();

	function render(){
		window.requestAnimationFrame(render);
		var delta = clock.getDelta();
		trackballControls.update(delta);
		renderer.render(scene, camera);
	}

}