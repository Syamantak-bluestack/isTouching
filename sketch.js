var fixedRect,movingRect;





function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,200,50,80);
  movingRect=createSprite(450,200,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  movingRect.velocityY=2;
  movingRect.velocityX=1;
  fixedRect.velocityY=1;
  fixedRect.velocityX=1;
  
}

function draw() {
  background(255,255,255);  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 ) 
    {
      movingRect.velocityX = movingRect.velocityX * (-1); 
      fixedRect.velocityX = fixedRect.velocityX * (-1);
      
    }
if( movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
  
    movingRect.velocityX = movingRect.velocityY * (-1); 
    fixedRect.velocityX = fixedRect.velocityY * (-1);

  }

  /*movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && 
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
                
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
 }
else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
}*/







  drawSprites();
}