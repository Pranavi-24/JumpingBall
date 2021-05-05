var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound ("WhatsApp Video 2021-05-05 at 13.31.52.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(105,580,190,30);
    block1.shapeColor = "cyan";

    block2 = createSprite(295,580,190,30);
    block2.shapeColor = "yellow";
   
    block3= createSprite(488,580,190,30);
    block3.shapeColor = "red";

    block4 = createSprite(685,580,190,30);
    block4.shapeColor = "pink";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(150,100,250);
    ball.velocityX= 8;
    ball.velocityY = 8;

}

function draw() {
    background(rgb(250,240,220));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
  
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "cyan";
         music.play();
    } 

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
         music.play();
    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "red";
         music.play();
    }

    if(block4.isTouching(ball)){
        ball.shapeColor = "pink";
         ball.velocityX = 0;
         ball.velocityY = 0;
    }


    drawSprites();
}
