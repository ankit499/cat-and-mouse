var cat,mouse,garden;
var catImg,mouseImg,gardenImg;

var PLAY=1;
var END=0;
var gameState=1;


function preload() {
    catImg = loadAnimation("cat1.png","cat2.png");
    mouseImg = loadAnimation("mouse1.png","mouse2.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

    cat= createSprite(200,50,25,25);
    cat.addAnimaion(catImg)
    cat.velocityX=-4;
    cat.velocityY=7;
   
    mouse= createSprite(500,45,10,10);
    mouse.addAnimaion(catImg)
    mouse.velocityX=-4;
    mouse.velocityY=7; 

}

function draw() {
background(255);
garden.addImage(gardenImg);


  text(mouseX + ','+ mouseY,10,45)
    drawSprites();
}
function keyPressed(){

 if(KeyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catImg2);
     cat.ChangeAnimation("catRunning");
 }
}

