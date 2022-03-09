var bg, bgImg
var ground, groundIMG
var person, personIMG
var monster, monsterIMG


function preload(){
bgImg = loadImage("assets/background.jpg")

personIMG = loadImage("assets/ZXHC.gif")
groundIMG = loadImage("assets/ground.jpg")

}

function setup(){
createCanvas(1200,1000)
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

person = createSprite(100,700,70,50)
person.addImage(personIMG)
person.scale = 0.2

invisibleGround = createSprite(100,760,80,20)

sandGroup = new Group()

}

function draw() {
  
  background("black");

  person.collide(invisibleGround)
  invisibleGround.visible = false
  

  

  if(keyDown("space") || person.Y <= 900) {
    person.velocityY = -12 ;
    
  }
  person.velocityY = person.velocityY + 0.8

  if(keyDown("Left_Arrow")){
    person.x = person.x  - 12
  }
  if(keyDown("Right_Arrow")){
    person.x = person.x + 12
  }
  sand()  
  person.collide(sandGroup)
        drawSprites();
   
}

function sand(){
  if(frameCount%240 === 0){
    var sand = createSprite(1000,800,600,200)
    //sand.x = Math.round(random(80,125))
    sand.addImage(groundIMG)
    sand.velocityX = -3
    sandGroup.add(sand)
  }


}

