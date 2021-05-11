
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() 
{


  
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }

	//Create the Bodies Here.
	ground = Bodies.rectangle(650,550,1300,20,ground_options);
    World.add(world,ground);

   paperObject = new paper(100,100,15,15);

   block1 = new dustbin(1110,490,20,100);
   block2 = new dustbin(890,490,20,100);
   block3 = new dustbin(1000,530,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1300,20); 
  paperObject.display();
  block1.display();
  block2.display();
  block3.display();
  drawSprites();
 
}

function keyPressed() 
{
  if (keyCode === UP_ARROW)
   {
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:14,y:-14})
  }
}

  