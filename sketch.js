
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;
var block1;
var block2;
var block3;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);
	var config = {isStatic: true};


	engine = Engine.create();
	world = engine.world;

	var block1_options = {
		restitution: 0.5,
		frictionAir: 0.35,
		friction: 0.7,
	}
	
	var block2_options = {
		restitution: 0.02,
		frictionAir: 0.8,
		friction: 0.4,
	}
	var block3_options = {
		restitution: 0.9,
		frictionAir: 0.05,
		friction: 0.1,
	}


	block1 = Bodies.circle(220, 100, 100, block1_options)
	World.add(world, block1)
	block2 = Bodies.rectangle(110, 50, 100, 100, block2_options)
	World.add(world, block2)
	block3 = Bodies.rectangle(350, 50, 100, 100, block3_options)
	World.add(world, block3)
	chao = Bodies.rectangle(800, 690, 1600, 20, config);
	World.add(world, chao);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255);
  Engine.update(engine);

  rect(chao.position.x, chao.position.y, 1600, 20)

  ellipse(block1.position.x, block1.position.y, 100, 100);
  rect(block2.position.x, block2.position.y, 100, 100);
  rect(block3.position.x, block3.position.y, 100, 100);

  
  
  drawSprites();
 
}