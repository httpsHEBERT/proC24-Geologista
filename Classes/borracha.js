class Borracha{

    constructor(x, y, width, heigh){
  
      var options = {
          'restitution':0.6,
          'friction':5,
          'density':2
      }
  
      this.body = Bodies.rectangle(x, y, width, heigh, options);
      this.width = width;
      this.height = heigh;
      World.add(world, this.body);
    }
  
    display(){
  
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("#a31d93");
      fill("#bd59b1");
      rect(0, 0, this.width, this.height);
      pop();
    }
}