const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2, 690, width, 20);
	dustbinObj=new dustbin(1200, 670);
	paper = new Paper(200, 600, 120);

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
  background(230);

  //Engine.update(engine);
  //Render.update(render);

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:130,y:-145});
	}

	if(keyCode === 32){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:130,y:-145});
	}
}
