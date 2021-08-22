var spacecraft, iss;
var hasDocked = false;

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(100, 300, 50, 50);
  spacecraft.colour = "blue";
  iss = createSprite(500, 200, 100, 100);
  iss.colour ="red";

}

function draw() {
  background(255,255,255);  ;

  hasDocked = "false"; 

  var random = Math.random(-1, 1);
  spacecraft.x = spacecraft.x + random;

  if (keyDown("up")) {
    spacecraft.velocityY = -1;
  }
 if (keyDown("down")) {
    spacecraft.velocityY = 1;
  } 
  if (keyDown("right")) {
    spacecraft.velocityX = 1;

  }
  if (keyDown("left")) {
    spacecraft.velocityX = -1;
  }

  if (spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)) {
    hasDocked = "true";
    textSize(25);
    fill("red");
    text("Docking Successful!", 200, 300);
    spacecraft.destroy();
  }
  drawSprites();

}