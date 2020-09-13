var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redbox,boxside,box_side,box,boxside1,boxside2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redbox=createSprite(350,640,200,20);
	box_side = createSprite(250,630,20,100);
	boxside = createSprite(450,630,20,100)
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
    box = Bodies.rectangle(350,640,200,20,{isStatic:true});
	World.add(world,box);
	boxside1 = Bodies.rectangle(250,630,20,100);
	World.add(world,boxside1)
	boxside2 = Bodies.rectangle(450,630,20,100);
    World.add(world,boxside2)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x= ground.position.x
  groundSprite.y= ground.position.y 
  box_side.x= boxside2.position.x
  box_side.y= boxside2.position.y
  boxside.x = boxside1.position.x 
  boxside.y = boxside1.position.y
  redbox.x= box.position.x
  redbox.y= box.position.y
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
  Matter.Body.setStatic(packageBody,false)
  }
}



