const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var block1;

var polygan1








function preload() {
    
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    block1 = new Block1(200,200,20,20)
polygan1=new polygan(100,200,50)
   
    //log6 = new Log(230,180,80, PI/2);
    
}

function draw(){
    background(255);
    Engine.update(engine);


block1.display()

polygan1.display()
  
   
}

