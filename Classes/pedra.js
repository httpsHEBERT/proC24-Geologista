class Pedra{

  constructor(x, y, r){

	var options = {
	  'restitution':0.6,
	  'friction':0.4,
	  'density':8
	}

	this.body = Bodies.circle(x, y, r-35, options);
	this.x = x;
	this.y = y;
	this.r = r;
	World.add(world, this.body);
  }

  display(){

	var pos = this.body.position;
	var angle = this.body.angle;

	push();
	translate(pos.x, pos.y);
    rotate(angle);
	strokeWeight(4);
	stroke("#5ebd59");
	fill("green");
	ellipse(0, 0, this.r);
	pop();
  }
}