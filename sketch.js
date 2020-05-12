var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1500,400);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

  bullet = createSprite(10, 150, 20, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1300,200,thickness,height/2);
  wall.shapeColor =(80,80,80);

}

function draw() {
  background(0,0,0);

  if (wall.x -bullet.x < (bullet.width + wall.width)/2){
     bullet.velocityX= 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  }

  if(damage>10){
    wall.shapeColor="red";
  }

  if (damage<10){
    wall.shapeColor=("green");
  }
  drawSprites();
}
