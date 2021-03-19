class Drops{
    constructor(x,y) {
        var options = {
            isStatic: true,
            restitution:0.8,
            friction:0.1,
            density:1.0
        }
     this.x = x;
     this.y = y;
     this.rainImg = loadImage("raindrop.png");
     this.trajectory =[];
     this.body = Bodies.circle(x, y, this.r, options);
     World.add(world, this.body); 
 }
}

display()
{

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
    
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
     var maxDrops = 100;
      for(var i=0; i<maxDrops; i++){
          drops.push(new createDrop(random(0,400), random(0,400)));
        image(this.rainImg, this.trajectory[i][0], this.trajectory[i][1]);
      }
      
    
    }
