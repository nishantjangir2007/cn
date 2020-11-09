//name spacing from matter .js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,ball;
function setup() {

  createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;
var ground_options={
 isStatic :true
}
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);
  var ball_option={
    restitution:1
  }
  ball=Bodies.circle(60,250,15,ball_option);
  World.add(world,ball);
console.log(ground);
}

function draw() {
  background("yellow"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,15,15);
  rect(200, 200, 50, 50);
    
}