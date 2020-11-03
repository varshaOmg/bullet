var wall,thickness;
var bullet,speed,weight;






function setup() {
  createCanvas(1200,400);
 //createSprite(400, 200, 50, 50);

  bullet = createSprite(50,200,40 , 20);
  

  wall = createSprite(1000,200,60,height/2)
  wall.shapecolor  = 80,80,80

  speed = random(223,321);
  weight = random(30,52);

thickness = random(22,83)
}

function draw() {
  background(255,255,255); 

  bullet.velocityX = speed;
  
 hasCollided();

 if (hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if (damage>10){

    wall.shapeColor = color(255,0,0)
  }

  if (damage<10){

    wall.shapeColor = color(0,255,0);
  }


}







  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge = bullet.x + bullet.width
wallLeftEdge = wall.x

if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;




}





