var bg, bgImg
var tio, tioImg, tio_atirando;
var zumbi, zumbiImg


function preload(){
  bgImg = loadImage("assets/bg.jpeg");
  tioImg = loadImage("assets/shooter_2.png");
  tio_atirando = loadImage("assets/shooter_3.png");
  zumbiImg = loadImage("assets/zombie2.png");
}

function setup() {
  createCanvas(1300, 650);
  
  //adicionando a imagem de fundo
  bg = createSprite(660, 450, 30, 30);
  bg.addImage("cenario",bgImg);
  // adicionando o player! 
  tio = createSprite(180, 430, 50, 50);
  tio.addImage("tio", tioImg);
  tio.scale = 0.3;

  
  console.log();
}

function draw() {
  background("black");
  // movendo o player para baixo 
  if (keyDown("S")){
    tio.y += 3; 
  }

  if (keyDown("W")){
    tio.y -= 3; 
  }
  




  drawSprites();

}
