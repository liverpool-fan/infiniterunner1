var gameState = 0

function preload(){
birdIMG = loadImage("bird1.png")
BG = loadImage("background.png")
}

function setup(){
  createCanvas(800,450);
  bg = createSprite(400,0,800,450) 
 bg.addImage("bg",BG)
 bird = createSprite(50,400,25,25)
 bird.addImage("b",birdIMG)
 bird.scale = 0.5
obGroup=new Group()
}

function draw(){
  
  background("white");
  drawSprites()
  if(gameState === 0){
    camera.position.x = bird.x
    camera.position.y = mouseY
    bird.y = mouseY
    bird.x=bird.x+5
    console.log(bird.x)
    if(bird.x>800){
      bird.x = 50
    }
    spawnObsticles(bird.x + random(500,800),(bird.y + random(-200,200)))
    
    if(bird.isTouching(obGroup)){
      fill("blue")
      text("game over",400,100)
      gameState = 1
    }
  }
  else if (gameState === 1){
    fill("blue")
    text("game over",400,100)
    obGroup.setVelocityXEach(0)
  }
  
}
function spawnObsticles(x,y){
  if(frameCount%60===0){
    obsticles = createSprite(x,y,10,30)
    obsticles.velocityX= -3
    obGroup.add(obsticles)
  }
  
}
