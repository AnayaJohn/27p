class Bob{
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0.4,
          friction:0.5,
         density:1.2
      }
      this.radius = radius;
    this.body = Bodies.circle(x,y,radius,options);
      
      //this.height = height;
      World.add(world, this.body);
      //this.paper = loadImage("sprites/paper.png");
      
    }
    display(){
      var angle =this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //imageMode(CENTER);
      //image(this.paper, pos.x,pos.y,70);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0, this.radius)
      pop();
    }
}