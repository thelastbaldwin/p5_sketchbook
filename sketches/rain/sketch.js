const MAX_DROP_SIZE = 200;
const NUM_DROPS = 50;
const WIDTH = 640;
const HEIGHT = 640;

let drops = [];

function setup() {
  createCanvas(640, 640);
  frameRate(60);
  for(let i = 0; i < NUM_DROPS; i++){
  	drops.push(new RainDrop());
  }
}

function draw() {
  background(0, 0, 150);
  strokeWeight(2);
  noFill();
  drops.forEach(drop => {
  	drop.update();
  	drop.display();
  })
}

function RainDrop(x, y, initialSize=random(0, MAX_DROP_SIZE), finalSize=MAX_DROP_SIZE){
	this.x = x || random(0, WIDTH);
	this.y = y || random(0, HEIGHT);
	this.size = initialSize;
	this.finalSize = finalSize;
	this.alpha = 1.0 - this.size/this.finalSize;
	this.spreadSpeed = random(0.5, 2);
}

//will these be on the prototype?
RainDrop.prototype.spreadSpeed = 2;

RainDrop.prototype.reset = function(){
	this.x = random(0, WIDTH);
	this.y = random(0, HEIGHT);
	this.finalSize = random(MAX_DROP_SIZE);
	this.size = 0;
	this.alpha = 1.0 - this.size/this.finalSize;
}

RainDrop.prototype.update = function(){
	this.size += this.spreadSpeed;
	this.alpha = 1.0 - this.size/this.finalSize;
	if(this.alpha <= 0){
		this.reset();
	}

}

RainDrop.prototype.display = function(){
	stroke(`rgba(255, 255, 255, ${this.alpha})`);
	ellipse(this.x, this.y, this.size);
}


