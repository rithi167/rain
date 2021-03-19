const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrop;


function setup(){
 var canvas = createCanvas(400,800);
    
 raindrop = new Drops(300,600,20,20);
}

function draw(){
    background("black");
    Engine.update(engine);

    raindrop.display();

    if(this.raindrop.position.y > height){
        Matter.Body.setPosition(this.raindrop, {x:random(0,400), y:random(0,400)}) 
    }

}   

