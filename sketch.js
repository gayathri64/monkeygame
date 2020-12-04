var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var banana
var stone
var survivalTime=0

function preload()
{
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
     obstaceImage = loadImage("obstacle.png");
}

function setup() 
{
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
 
 bananaGroup=createGroup();
 stoneGroup=createGroup();
}

function draw() 
{
 background(255);
  
  if (ground.x<0)
  {
  ground.x = ground.width/2;
  } 
  
  if(keyDown("space"))
  {
  monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
 
  monkey.collide(ground);
 
  stroke("white");
  textSize(20);
  fill("white");
  text("score :"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+ survivalTime,100,50);
  
  food();
  obstacles();
  drawSprites();
 }

function food()
{
if(frameCount % 80==0) 
 {
   banana=createSprite(500,50,10,10); 
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.10;
   banana.velocityX=-2;
   banana.lifetime=250;
   bananaGroup.add(banana);
 }
  
}

function obstacles()
{
if(frameCount % 300==0) 
 {
   stone=createSprite(800,320,10,40); 
   stone.y=Math.round(random(320,320));
   stone.addImage(obstaceImage);
   stone.scale=0.15;
   stone.velocityX=-6;
   stone.lifetime=300;
   stoneGroup.add(stone);
 }
  
}



