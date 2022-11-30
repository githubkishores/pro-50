var rocket,rocketImg;
var missile,missileImg;
var obstacle,obstacleImg;

function preload(){
    rocketImg=loadImage("assets/rocket.png");
    missileImg=loadImage("assets/missile.png");
    obstacleImg=loadImage("assets/obstacle.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    var message = "This is a message";
    console.log(message);

    rocket=createSprite(650,500,50,50);
    rocket.addImage(rocketImg);
    rocket.scale=0.3;

    missile=createSprite(645,300,20,20);
    missile.addImage(missileImg);
    missile.scale=0.2;

    obstacle=createSprite(800,100,20,20);
    obstacle.addImage(obstacleImg);
    obstacle.scale=0.2;

    score=0;
}

function draw(){
    background("black");
    text("score:"+ score,1200,50);
    drawSprites()
}