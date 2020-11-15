var carBody, carHead;
var ground;
var wall;
var weight, speed, deformation;


function setup() {
  createCanvas(800,400);
  
  carBody = createSprite(100, 350, 100, 20);

  carHead = createSprite(100, carBody.y-15,50,20);
  
  ground = createSprite(400,385,800,30);
  ground.shapeColor = "green";

  wall = createSprite(770,185,60,370);
  wall.shapeColor = "brown";

  speed = random(55,90);
  weight = random(400,1500);

  carBody.velocityX = speed;
  
}

function draw() {
  background(0,255,255); 
  ellipse(carBody.x-25,carBody.y+10,20,20);
  ellipse(carBody.x+25,carBody.y+10,20,20);

  carHead.x = carBody.x;

  if(wall.x - carBody.x < (carBody.width + wall.width)/2) {
    
    carBody.velocityX = 0;

    deformation = 0.5 * weight * speed * speed / 22509;

    if (deformation > 180) {
      carBody.shapeColor = color(255,0,0);
      carHead.shapeColor = color(255,0,0);

      fill(rgb(255,0,0));
      ellipse(carBody.x-25,carBody.y+10,20,20);
      ellipse(carBody.x+25,carBody.y+10,20,20);
    }

    if (deformation < 180 && deformation > 100) {
      carBody.shapeColor = color(230,230,0);
      carHead.shapeColor = color(230,230,0);

      fill(rgb(230,230,0));
      ellipse(carBody.x-25,carBody.y+10,20,20);
      ellipse(carBody.x+25,carBody.y+10,20,20);
    }

    if (deformation < 100) {
      carBody.shapeColor = color(0,255,0);
      carHead.shapeColor = color(0,255,0);

      fill(rgb(0,255,0));
      ellipse(carBody.x-25,carBody.y+10,20,20);
      ellipse(carBody.x+25,carBody.y+10,20,20);
    }

  }

  drawSprites();
}