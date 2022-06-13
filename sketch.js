const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a1, ground;
var m1;
var m2, m3, m4, m5, m6, m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25,m26,m27,m28,m29,m30,m31,m32,m33,m34,m35,m36,m37;

function preload(){
  spaceshipDark=loadImage("images/spaceship dark.png");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    a1= new Astro(100,20,50,100);
    ground= new Ground(800,height,1600,29);
   // m1= new Maze(width/2,600,width,100);
    m1= new Ground(100,100,200,10);
    m2= new Ground(200,145,10,100);
    m3= new Ground(265,145,10,100);
    m4= new Ground(145,190,120,10);
    m5= new Ground(320,190,120,10);
    m6= new Ground(90,245,10,120);
    m7= new Ground(385,245,10,120);
    m8= new Ground(243,300,170,10);
    m9= new Ground(243,400,170,10);
    m10= new Ground(160,350,10,110);
    m11= new Ground(90,390,10,200);
    m12= new Ground(235,495,300,10);
    m13= new Ground(460,335,10,170);
    m14= new Ground(380,550,10,120);
    m15= new Ground(425,620,100,30);
    m16= new Ground(470,548,10,115);
    m17= new Ground(600,495,250,10);
    m18= new Ground(595,415,260,10);
    m19= new Ground(730,285,10,270);
    m20= new Ground(855,150,260,10);
    m21= new Ground(730,540,10,100);
    m22= new Ground(800,540,10,100);
    m23= new Ground(870,540,10,100);
    m24= new Ground(930,540,10,100);
    m25= new Ground(765,595,80,10);
    m26= new Ground(900,595,70,10);
    m27= new Ground(840,495,70,10);
    m28= new Ground(880,250,120,10);
    m29= new Ground(880,350,120,10);
    m30= new Ground(940,300,10,110);
    m31= new Ground(980,190,12,90);
    m32= new Ground(1100,230,250,10);
    m33= new Ground(1080,495,300,10);
    m34= new Ground(1230,300,10,150);
    m35= new Ground(1325,380,200,10);
    m36= new Ground(1325,480,200,10);
    m37= new Ground(1230,487,10,23);
}                  

function draw(){
    background(spaceshipDark);
    Engine.update(engine);
    a1.display();
    ground.display();
    m1.display();
    m2.display();
    m3.display();
    m4.display();
    m5.display();
    m6.display();
    m7.display();
    m8.display();
    m9.display();
    m10.display();
    m11.display();
    m12.display();
    m13.display();
    m14.display();
    m15.display();
    m16.display();
    m17.display();
    m18.display();
    m19.display();
    m20.display();
    m21.display();
    m22.display();
    m23.display();
    m24.display();
    m25.display();
    m26.display();
    m27.display();
    m28.display();
    m29.display();
    m30.display();
    m31.display();
    m32.display();
    m33.display();
    m34.display();
    m35.display();
    m36.display();
    m37.display();
    direction();  
}

function direction(){
  if(a1.body.speed<1){
  if(keyIsDown(UP_ARROW)){
    a1.body.position.y-=1;
    
  }
  if(keyIsDown(DOWN_ARROW)){
    a1.body.position.y+=1;
  }
  if(keyIsDown(RIGHT_ARROW)){
    a1.body.position.x+=1;
  }
  if(keyIsDown(LEFT_ARROW)){
    a1.body.position.x-=1;
  }
}
}
// function keyPressed(){
//   if(keyCode===39){
//     //right
//     a1.body.position.x+=1;
//   }
// }

// function keyPressed(){
//   if(keyCode===37){
//     //left
//     a1.body.position.x-=1;
//   }
// }

// function keyPressed(){
//   if(keyCode===38){
//     //up
//     a1.body.position.y-=1;
//   }
// }

// function keyPressed(){
//   if(keyCode===40){
//     //down
//     a1.body.position.y+=1;
//   }
// }



