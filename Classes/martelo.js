class Martelo{

  constructor(x, y, width, height){

    var options = {
      'density':4,
      'friction': 1.0,
      'restitution':0.5
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){

    var pos = this.body.position;
    var angle = this.body.angle;

    pos.x = mouseX;
    pos.y = mouseY;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke("#f2ef33");
    fill("#858448");
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  }
}
