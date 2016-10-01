function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawDragonBall(x, y, size, stars){
  var starSize = size/10;

  function drawInCenter(){
    push();
    rotate(TWO_PI/4);
    star(0, 0, starSize, starSize/2, 5);
    pop();
  }

  function drawInCircle(start, end, num){
    push();
    rotate(TWO_PI/4);
    if (start > end){
      for(var i = start; i > end; i-=(start - end)/num){
        star(sin(i) * size/5, cos(i) * size/5, starSize, starSize/2, 5);
      }
    } else {
      debugger;
      for(var i = start; i < end; i+=(end - start)/num){
        star(sin(i) * size/5, cos(i) * size/5, starSize, starSize/2, 5);
      }
    }
    pop();
  };

  push();
  translate(x, y);
  stroke(255, 0, 0);
  strokeWeight(size * 0.05);
  fill(255, 180, 0);
  ellipse(0, 0, size);
  fill(225, 0, 0);
  noStroke();
  switch(stars){
    case 1:
      drawInCenter();
      break;
    case 2:
      drawInCircle(TWO_PI - PI/4, 0 - PI/4, 2);
      break;
    case 3:
      drawInCircle(0 - PI/2, TWO_PI - PI/2, 3);
      break;
    case 4:
      drawInCircle(0 - PI/2, TWO_PI - PI/2, 4);
      break;
    case 5: 
      drawInCircle(0 - PI/2, TWO_PI - PI/2, 5);
      break;
    case 6:
      drawInCircle(0 - PI/2, TWO_PI - PI/2, 5);
      drawInCenter();
      break;
    case 7:
      drawInCircle(0 - PI/2, TWO_PI - PI/2, 6);
      drawInCenter();
      break;
  }

  pop();
}

function setup() {
	createCanvas(640, 640);
}

function draw() {
  var radius = 200;
  var ballSize = 125;

  background(204);
  push();
  translate(width/2, height/2);
  for(var i = 1; i <= 6; i++){
    drawDragonBall(sin(TWO_PI/6 * i) * radius, cos(TWO_PI/6 * i) * radius, ballSize, i);
  }
  drawDragonBall(0, 0, ballSize, 7);
  pop();
}

