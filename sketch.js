var fixedRect,movingRect;
var edge 
function setup() {
  createCanvas(1600,800);
  fixedRect= createSprite(10, 200, 50, 80);
  movingRect= createSprite(1200, 200, 80, 30);
fixedRect.velocityX=10
movingRect.velocityX=-10;
edge=createEdgeSprites()
}

function draw() {
  background(0);  
 movingRect.bounceOff(edge)
 fixedRect.bounceOff(edge)
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 )
{
fixedRect.velocityX=fixedRect.velocityX*-1;
movingRect.velocityX=movingRect.velocityX*-1;

fixedRect.debug=true;
movingRect.debug=true;
}
  drawSprites();
}
