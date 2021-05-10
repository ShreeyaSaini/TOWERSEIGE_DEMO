const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon;
var slingShot;

function setup() {
createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

stand = new Ground(994,260,180,10);

//pyramid 
//level 1
sq1 = new Block(934,248);
sq2 = new Block(954,248);
sq3 = new Block(974,248);
sq4 = new Block(994,248);
sq5 = new Block(1014,248);
sq6 = new Block(1034,248);
sq7 = new Block(1054,248);

//level 2
sq8 = new Block(944,228);
sq9 = new Block(964,228);
sq10 = new Block(984,228);
sq11 = new Block(1004,228);
sq12 = new Block(1024,228);
sq13 = new Block(1044,228);

//level 3 
sq14 = new Block(955,208);
sq15 = new Block(975,208);
sq16 = new Block(995,208);
sq17 = new Block(1015,208);
sq18 = new Block(1035,208);

//level 4
sq19 = new Block(966,188);
sq20 = new Block(985,188);
sq21 = new Block(1005,188);
sq22 = new Block(1025,188);

//level 5
sq23 = new Block(977,168);
sq24 = new Block(999,168);
sq25 = new Block(1019,168);

//level 6
sq26 = new Block(988,148);
sq27 = new Block(1008,148);

//level 7
sq28 = new Block(999,128);

//create polygon
polygon = new Polygon(200,400);

//creating slingShot
slingShot = new SlingShot(polygon.body, {x:180, y:200});
}

function draw() {
background("grey");

fill("white");
    textSize(20);
    text("Drag the polygon to destroy the blocks",420,100);

Engine.update(engine);

stand.display();

sq1.display();
sq2.display();
sq3.display();
sq4.display();
sq5.display();
sq6.display();
sq7.display();
sq8.display();
sq9.display();
sq10.display();
sq11.display();
sq12.display();
sq13.display();
sq14.display();
sq15.display();
sq16.display();
sq17.display();
sq18.display();
sq19.display();
sq20.display();
sq21.display();
sq22.display();
sq23.display();
sq24.display();
sq25.display();
sq26.display();
sq27.display();
sq28.display();

polygon.display();

slingShot.display();

text();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX , y:mouseY});
  }
  
  
  function mouseReleased(){
    slingShot.fly();
  }
  
  function keyPressed() {
    if(keyCode === 32) {
      Matter.Body.setPosition(polygon.body, {x: 180, y:200});
       slingShot.attach(polygon.body);
    }
  }

  //function text(){
    
  //}