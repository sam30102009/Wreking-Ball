const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var g;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var bl;
var st;

function setup(){
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  g = new ground(500,595);
  b1 = new building(830,555);
  b2 = new building(830,485);
  b3 = new building(830,415);
  b4 = new building(830,345);
  b5 = new building(830,275);
  b6 = new building(760,555,);
  b7 = new building(760,485);
  b8 = new building(760,415);
  b9 = new building(760,345);
  b10 = new building(760,275);
  bl = new ball(500,350);
  st = new sss(bl.body,{ x: 500, y: 50 })
}

function draw() {
  Engine.update(engine);
  background("WHITE");
  //md();
  g.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b6.display();
  bl.display();
  st.display();
  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(bl.body, { x: mouseX, y: mouseY });
}