class Solo{

  constructor(x, y, width, height){

    var options = {
      isStatic:true
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  
  display(){

    var pos = this.body.position;
    
    rectMode(CENTER);
    strokeWeight(5);
    fill("#3346f2");
    rect(pos.x, pos.y, this.width, this.height);
  }
}