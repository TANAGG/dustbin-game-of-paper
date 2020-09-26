class Ball {
    constructor(x, y) {
      var options = {
         isSatic: false,
         restitution: 0.3,
          friction:0.5,
          density:1.2
      }
      
      this.body = Bodies.circle(x, y,20,options);
      this.radius = 80;
    
      this.ball1 = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
     
      image(this.ball1,0, 0, this.radius,this.radius);
      pop();
    }
  };

  