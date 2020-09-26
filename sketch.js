
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ball1;
var ground;
var   target,target1,target2,target3;
var paperObject;

function preload(){

target3 = loadImage("dustbingreen.png")
}


function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	
  ball = new Ball(200,200);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  drawSprites();
  text(mouseX + ";" + mouseY,1120,190);
 //target.display();
 //target1.display();
 //target2.display();
  ground.display();
  ball.display();
  image(target3,895,240,170,170);
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
  }
}



