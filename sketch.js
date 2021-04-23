
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper1;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper1=new paper(100,100,50);
	
var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
     width:1000,
	 height:700,
     wireframes:false

	}
})



	Engine.run(engine);
    Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();
}
function keyPressed(UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:89,y:-38})

}
