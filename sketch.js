
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var box1,box2,box3,box4;
var ground;
var paper;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;	

	
	paper = new Paper(200,450,70);
	
	ground = new Ground(width/2,670,width,20);
//	box1 = createSprite(540,685,230,12);
//	box2 = createSprite(432,600,12,160);
//	box3 = createSprite(648,600,12,160);
//	box1.shapeColor = color("white");
//	box2.shapeColor = color("white");
//	box3.shapeColor = color("white");
	box4 = new Dustbin(1200,660,200,213);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	
	Engine.run(engine);
	Render.run(render);
}


function draw() {
 rectMode(CENTER);


  background("red");
  paper.display();
  ground.display(); 
  //box1.display();
  //box2.display();
  //box3.display();
  box4.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 126,y: -150});
	

	}
}

