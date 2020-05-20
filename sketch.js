var bullet, wall;
var speed , weight , damage , thickness;
var gamestate , PLAY , END;

function setup() {
  createCanvas(1300,400);
  PLAY = 0;
  END = 1;
  gamestate = PLAY;
  damage = 0;
  thickness = Math.round(random(22 , 83));
  wall = createSprite(1200 , 200  , thickness , height/2);
  bullet = createSprite(50, 200, 50, 50);
  deformation = 0;
  speed = Math.round(random(223 , 321));
  weight = Math.round(random(30 , 52)); 
  wall.shapeColor = color(80 , 80 , 80);
  bullet.shapeColor = color(255 , 255 , 255);
}

function draw() {
  background(0 , 0 , 0); 
  fill(color(255 , 255 , 255));
  text("Speed : " + speed , 10 , 100);
  text("Weight : " + weight , 110 , 100);
  text("Thickness : " + thickness , 200 , 100);
  text("Damage : " + damage , 300 , 100);

  if(gamestate == PLAY){
    bullet.velocityX = speed /5.35;
  } 
  
  if(bullet.collide(wall)|| gamestate == END){
    bullet.setVelocity(0 , 0);
    damage = Math.round((0.5 * weight * speed * speed)/(thickness * thickness * thickness));
    gamestate = END;
    if(damage<10){
      wall.shapeColor = color(0 , 255 , 0);
    }
    else{
      wall.shapeColor = color(255 , 0 , 0);
    }
    
  }
  if(gamestate == END && keyWentDown("space")){
    gamestate = PLAY;
    damage = 0;
    speed = Math.round(random(223 , 321));
    weight = Math.round(random(30 , 52)); 
    wall.shapeColor = color(80 , 80 , 80);
    bullet.x = 50;
    thickness = Math.round(random(22 , 83));
    wall.width = thickness ;
  }
  drawSprites();
}