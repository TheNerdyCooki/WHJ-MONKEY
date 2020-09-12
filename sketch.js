var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, SurvivalTime;
var gameState = 1;
var PLAY = 1;
var END = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 400)
  
  monkey = createSprite(200, 200, 10, 10);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.3;
  
  ground = createSprite(200,380,1000000000000000,50);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  FoodGroup = new Group();
  ObstacleGroup = new Group();
}

function draw() {
  if(gameState === PLAY){
  background("white");
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.y = monkey.velocityY=-2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  ground.velocityX = -4;
  bananas();
  rock();
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  
  stroke("red");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:" + survivalTime, 100, 50)
    if(ObstacleGroup.isTouching(monkey)){
      gameState = END;
    }
  drawSprites();
  
  }else if(gameState === END){
    textSize(50)
    text("U R DED", 100, 100);
  }
}
function bananas(){
if (frameCount % 80 === 0) {
    banana = createSprite(600,200,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 134;
    
    
    //adding cloud to the group
   FoodGroup.add(banana);
    }
}

function rock(){
if (frameCount % 210 === 0) {
    obstacle = createSprite(600,290,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.4;
    obstacle.velocityX = -4;
    obstacle.lifetime = 134;
    
    
    //adding cloud to the group
   ObstacleGroup.add(obstacle);
    }
}
