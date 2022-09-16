let angle = -51.5;
let x = 150;
let y = 0;
// let dx = 0;
// let dy = 5;
// let x1 = 0;
// let y1 = 0;

let a = 140;
let b = 140;
let angle1 = 0;

function setup() {
  createCanvas(1000, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  var x2 = a*cos(angle1);
  var y2 = b*sin(angle1);
  angle1 = angle1+2;
    
  push();
  translate(200, 200);
  stroke('');
  noFill();
  ellipse(0, 0, 2*a, 2*b);
  line(0, 0, 140, 0);
  noStroke();
  fill(255,0,0);
  ellipse(0, y, 8);
  ellipse(0, 0, 4);
  stroke(255,0,0);
  line(0, 0, 0, y);
  fill(100, 100);
  arc(0, 0, a/2, a/2, 0, -angle1);
  line(0, y, x2, y);
  pop();

  push();
  translate(200, 200);
  stroke('');
  line(0, y, x, y);
  pop();

  push();
  translate(200, 200);
  rotate(-angle);
  stroke('yellow');
  line(87, -51, 87.5, -110);
  stroke('yellow');
  line(0, -60, 87.5, -110);
  pop();  
  
  push();
  translate(200, 200);
  rotate(-angle);
  rotate(-51.5);
  stroke('blue');
  line(0, 0, 140, 0);
  fill('blue');
  triangle(133, -5, 140, 0, 133,  5);
 
  pop();
   
  
  push();
  translate(200, 200);
  rotate(-angle);
  stroke('lightgreen');
  line(0, 0, 0, -60);
  fill('lightgreen');
  triangle(-5, -53, 0, -60, 5,  -53);
  
  rotate(-30);
  stroke('red');
  line(0, 0, 100, 0);
  fill('red');
  triangle(93, -5, 100, 0, 93,  5);
  pop();
 
  angle = angle + 2;

  push();
  translate(200, 200);
  fill('blue');
  ellipse(x, y, 10, 10);
  fill('white');
  frameRate(30);
  
  x += 1;
  y = -135 * Math.cos(2 * x * Math.PI/180);


  // x = x + dx;
  if (x> 1000) {
    x = x;
  }
  y = -cos(x)+y;
  if (y > 500) {
    y =y;
  }
  pop();

  
  // push();
  // translate(200, 200);
  // fill('blue');
  
  // let ctx = canvas.getContext("2d")		
	
	// // let x1 = 0
	// // let y2 = 0	
	
	// // ctx.fillStyle = "black"
	// // ctx.fillRect(0, 0, 400, 400)	

	// let render = function(){		
	
	// 	x += 0.01;
		
	// 	y = -135 * Math.cos(2* x * Math.PI/180);		
		
	// 	ctx.fillStyle = "lime"
	// 	ctx.fillRect(x, y, 5, 5)
		
	// 	requestAnimationFrame(render)
	// }
	// render()
 
  pop();
  
  push();
  translate(200, 200);
  stroke('');
  line(150, 0, 800, 0);
  line(150, -140, 800, -140);
  line(150, 140, 800, 140);
  line(150, -140, 150, 140);
  pop();

  push();
  translate(200, 200);
  stroke(0,255,0);
  fill(0,255,0);
  // ellipse(0, -140, 8);
  // line(0+x2, 0-a, 0+x2, -30+y2);
  // ellipse(0+x2, -140+y2, 8);
  // line(200+x2, 180-a, 200+x2, 200+y2);
  pop();  

}
