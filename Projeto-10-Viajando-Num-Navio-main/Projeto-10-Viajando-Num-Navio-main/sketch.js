var sea,ship;
var seaImg,shipImg;


function preload() {
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-1.png",);
  movingShip = loadAnimation("ship-2.png","ship-2.png"); 

}


function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
   
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  changeboat();
  drawSprites();
}
function changeboat() {
  if(frameCount %60 === 0){
    var rand = Math.round(math.random(1,2));
    switch(rand){
      case 1: ship.addAnimation("movingShip");
      case 2: ship.addAnimation("shipImg");
      
    }
}
}
