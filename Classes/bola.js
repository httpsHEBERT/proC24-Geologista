class Bola{

    constructor(x, y, r){
  
      var options = {
          'restitution':1,
          'friction':0.9,
          'density':4
      }
  
      this.body = Bodies.circle(x, y, r-20, options);
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
      stroke("brown");
      fill("#f2a233");
      ellipse(0, 0, this.r);
      pop();
    }
  }