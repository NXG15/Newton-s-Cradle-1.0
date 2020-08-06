
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	height = new roof(400,100,600,30);

  //not moving bonds
  var options = {
    isStatic:true
  }
  
	bobObject1 = new bob(160,600);
	bobObject2 = new bob(280,600,options);
	bobObject3 = new bob(400,600,options);
	bobObject4 = new bob(520,600,options);
	bobObject5 = new bob(640,600);

	rope1 = new rope(bobObject1.body,height.body,-240,0);
  rope2 = new rope(bobObject2.body,height.body,-120,0);
  rope3 = new rope(bobObject3.body,height.body,0,0);
  rope4 = new rope(bobObject4.body,height.body,120,0);
  rope5 = new rope(bobObject5.body,height.body,240,0);

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  height.display();

  //bobs
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  //ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  

  //keyPressed();

  drawSprites();
 
}


function keyPressed(){

  var gravity = 0.4;
  var angle = PI/4;
  var acceleration = -1* gravity* Math.sin(angle);
  var velocity = acceleration;
  velocity = angle;

	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject5.body, bobObject5.body.position,{x:(Math.sin(angle)*500),
      y:(Math.cos(angle)*500)});
    //Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:95,y:85});
  }
}
