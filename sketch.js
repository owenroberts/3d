var r, g, b;
var xp = 0, 
	yp = 0, 
	zp = 0;
var rx = 0, 
	ry = 0, 
	rz = 0;

var movespeed = 1,
	rotatespeed = 0.01;

function setup(){
	createCanvas(720, 360, WEBGL);
	
}
function draw(){
	background(199);
 	ambientLight(200);
 	pointLight(199, 100, 100, 0);
 
	camera(0, 0, zp);
	
	
	
	push();

	

	rotateY(ry);

	translate(0, 0, 0);
	normalMaterial();
	sphere(10);
	
	push();
	translate(-200, 0, 0);
	sphere(10);
	pop();
	
	/* ground */
	push();
	rotateX( PI/2 );
	translate(0, 0, 400);
	specularMaterial(0,255,255);
	plane(3000, 3000);
	pop();
	
	var wall = new Wall(-width, -height, -200, width*2, height*2, PI/2);
	
	
	pop();

	
	
	if (keyIsDown(UP_ARROW)) zp -= movespeed;
	if (keyIsDown(DOWN_ARROW)) zp += movespeed;
	
	if (keyIsDown(RIGHT_ARROW)) ry += rotatespeed;
	if (keyIsDown(LEFT_ARROW)) ry -= rotatespeed;
}

function Wall(_x, _y, _z, _w, _h, _r) {
	specularMaterial(r,g,b);
	for (var x = _x; x < _w; x += 100) {
		for (var y = _y; y < _h; y += 100) {
			push();
			rotateY( _r );
			translate(x, y, _z);
			sphere(20);
			pop();
		}
	}
}