var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof= new Roof(340,200,250,20);

bob1= new Bob(240,400,25);
bob2= new Bob(290,400,25);
bob3= new Bob(340,400,25);
bob4= new Bob(390,400,25);
bob5= new Bob(440,400,25);


rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0);
rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0);
rope3=new Rope(bob3.body,roof.body,0, 0);
rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0);
rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(20);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === 32){
      bob1.body.position.y=330;
  }
}
  




