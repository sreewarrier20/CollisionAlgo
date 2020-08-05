var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="green";
  fixedrect=createSprite(600, 200, 50, 50);
  fixedrect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  //console.log(movingrect.x-fixedrect.x);
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2 
    && fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}