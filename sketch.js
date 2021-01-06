
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
let land,tree,stone,boy,slingShot;
let mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8, mango9, mango;

function preload()
{
  boy = loadImage("boy.png");
  tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	land = new Ground(600,650,1200,50);
	//tree = new Tree(900,5,400,600);
	stone = new Stone(100,100,20);
	//boy = new Boy(300,590,150,300);
	slingShot = new SlingShot(stone.body,{x: 140,y: 500});
	mango = new Mango(1100,300,11);
	mango1 = new Mango(1000,270,8);
	mango2 = new Mango(1100,270,7);
	mango3 = new Mango(950,200,11);
	mango4 = new Mango(800,310,6);
	mango5 = new Mango(900,250,8);
	mango6 = new Mango(1000,130,7);
	mango7 = new Mango(900,150,10);
	mango8 = new Mango(1000,320,10);
	mango9 = new Mango(1050,200,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,115,410,150,300);
  image(tree, 770, 75,400,600);
  detectCollision (stone,mango);
  detectCollision (stone,mango1);
  detectCollision (stone,mango2);
  detectCollision (stone,mango3);
  detectCollision (stone,mango4);
  detectCollision (stone,mango5);
  detectCollision (stone,mango6);
  detectCollision (stone,mango7);
  detectCollision (stone,mango8);
  detectCollision (stone,mango9);
  land.display();
  //tree.display();
  stone.display();
  //boy.display();
  slingShot.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  drawSprites();
 
}
function mouseDragged (){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
    slingShot.fly();
}
function detectCollision(lstone,lmango) {
	mangoBodyPosition=lmango.body.position;
	lstoneBodyPosition=lstone.body.position;
	
	let distance = dist(lstoneBodyPosition.x,lstoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	//if (distance<=lmango.r+lstone.r) {
    //Matter.Body.setStatic(lmango.body,false);
    //if (distance<=lmango.body.circleRadius+lstone.body.circleRadius)
    if (distance<=lmango.body.circleRadius+lstone.body.circleRadius) {
      Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:300,y:590});
		slingShot.attach(stone.body);	
	}
}