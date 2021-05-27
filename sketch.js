const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[];
var G1;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var batman,batmanimg;
var rainsound;
var rand;

var thunderCreatedFrame=0;

function preload(){
   batmanimg=loadImage("batman.png");
   thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
}

function setup(){
   var canvas = createCanvas(1600,755);
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
   
if(frameCount%100===0){
for(var i=0; i<100; i++){
    var d=new Drop(random(0,1600),random(0,750))
    drops.push(d);
}
}
G1=new Ground(width/2,height-25,width,50)
batman=createSprite(width/2,height-290,200,200);
batman.addAnimation("Batman",batmanimg);
batman.scale=1.2
}

function draw(){
    background("black")

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-3,5));
        bat.velocityY = Math.round(random(-3,5));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

for(var i=0; i<100; i++){
    drops[i].display();
    drops[i].update();
}
G1.display();
drawSprites();
}
