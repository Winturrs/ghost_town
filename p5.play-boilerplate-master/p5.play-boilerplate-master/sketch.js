
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var scaredycat,scaredycat2;
var piskeloa;

var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY


function preload(){
  scaredycat =loadAnimation("steve.gif");
  scaredycat2 = loadAnimation("steveoo.gif");
  ghost = loadAnimation("ghost_L.gif");
  ghost2 = loadAnimation("ghost_R.gif");
  gold = loadAnimation("goldies.gif");
  hishome = loadAnimation("home.gif");
  powercoin = loadAnimation("powerity.gif");
 bksound = loadSound("sound1.mp3");
}








function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
edges = createEdgeSprites();
coinGroup = new Group ();
ghostGroup = new Group ();

bksound.play()


piskeloa = createSprite(35,30);
piskeloa.addAnimation("piskeloa",scaredycat);
piskeloa.addAnimation("piskeloa",scaredycat2);
piskeloa.scale = 0.05

ghoststare = createSprite(393,415);
ghoststare.addAnimation("ghoststare",ghost);
ghoststare.addAnimation("ghoststare",ghost2);
ghoststare.scale = 0.50
ghoststare.velocityX = 7
ghoststare.velocityY =-8

ghoststare1 = createSprite(393,415);
ghoststare1.addAnimation("ghoststare",ghost);
ghoststare1.addAnimation("ghoststare",ghost2);
ghoststare1.scale = 0.50
ghoststare1.velocityX = 4
ghoststare1.velocityY =-12
ghostGroup.add(ghoststare);
ghostGroup.add(ghoststare1);

goldcoin = createSprite(393,415);
goldcoin.addAnimation("goldcoin",gold);
goldcoin.addAnimation("goldcoin",gold);
goldcoin.scale = 0.200
goldcoin.velocityX = 5
goldcoin.velocityY = -4

goldcoin1 = createSprite(393,415);
goldcoin1.addAnimation("goldcoin",gold);
goldcoin1.addAnimation("goldcoin",gold);
goldcoin1.scale = 0.200
goldcoin1.velocityX = 6
goldcoin1.velocityY = -3

goldcoin2 = createSprite(393,415);
goldcoin2.addAnimation("goldcoin",gold);
goldcoin2.addAnimation("goldcoin",gold);
goldcoin2.scale = 0.200
goldcoin2.velocityX = 10
goldcoin2.velocityY = -7

goldcoin3 = createSprite(393,415);
goldcoin3.addAnimation("goldcoin",gold);
goldcoin3.addAnimation("goldcoin",gold);
goldcoin3.scale = 0.200
goldcoin3.velocityX = 8
goldcoin3.velocityY = -2
coinGroup.add(goldcoin);
coinGroup.add(goldcoin1);
coinGroup.add(goldcoin2);
coinGroup.add(goldcoin3);

galaix = createSprite(387,495);
galaix.addAnimation("galaix",powercoin);
galaix.addAnimation("galaix",powercoin);
galaix.scale = 0.200
galaix.velocityX = 12
galaix.velocityY = 9

galaix2 = createSprite(387,495);
galaix2.addAnimation("galaix",powercoin);
galaix2.addAnimation("galaix",powercoin);
galaix2.scale = 0.200
galaix2.velocityX = -9
galaix2.velocityY = 5

house = createSprite(854,893);
house.addAnimation("house",hishome);
house.scale = 2








 cardboard1 = createSprite(10,70,100,20);
   cardboard1.shapeColor = "brown";
   cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "brown";
   cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
   cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
   cardboard5 = createSprite(130,210,100,20);
   cardboard5.shapeColor = "brown";
   cardboard6 = createSprite(10,250,100,20);
   cardboard6.shapeColor = "brown";
   cardboard7 = createSprite(160,120,20,100);
   cardboard7.shapeColor = "brown";
   cardboard8 = createSprite(150,20,100,20);
   cardboard8.shapeColor = "brown";
   cardboard9 = createSprite(250,70,20,100);
   cardboard9.shapeColor = "brown";
   cardboard10 = createSprite(270,150,100,20);
   cardboard10.shapeColor = "brown";
   cardboard11 = createSprite(330,50,100,20);
   cardboard11.shapeColor = "brown";
   cardboard12 = createSprite(340,125,20,100);
   cardboard12.shapeColor = "brown";
   cardboard13 = createSprite(220,250,20,100);
   cardboard13.shapeColor = "brown";
   cardboard14 = createSprite(330,210,150,20);
   cardboard14.shapeColor = "brown";
   cardboard15 = createSprite(100,300,20,100);
   cardboard15.shapeColor = "brown";
   cardboard16 = createSprite(180,310,100,20);
   cardboard16.shapeColor = "brown";
   cardboard17 = createSprite(30,352,20,100);
   cardboard17.shapeColor = "brown";
   cardboard18 = createSprite(175,352,20,100);
   cardboard18.shapeColor = "brown";
   cardboard19 = createSprite(280,290,20,100);
   cardboard19.shapeColor = "brown";
   cardboard20 = createSprite(350,270,120,20);
   cardboard20.shapeColor = "brown";
   cardboard21 = createSprite(250,390,100,20);
   cardboard21.shapeColor = "brown";
   cardboard22 = createSprite(330,370,20,100);
   cardboard22.shapeColor = "brown";
   cardboard23 = createSprite(71,443,100,20);
   cardboard23.shapeColor = "brown";
   cardboard24= createSprite(436,46,20,100);
  cardboard24.shapeColor = "brown";
   cardboard25 = createSprite(444,144,100,20);
  cardboard25.shapeColor = "brown";
   cardboard26 = createSprite(466,237,20,100);
  cardboard26.shapeColor = "brown";
   cardboard27 = createSprite(425,341,100,20);
   cardboard27.shapeColor = "brown";
   cardboard28 = createSprite(71,443,100,20);
   cardboard28.shapeColor = "brown";
   cardboard29= createSprite(266,456,20,100);
  cardboard29.shapeColor = "brown";
   cardboard30 = createSprite(310,479,100,20);
  cardboard30.shapeColor = "brown";
   cardboard31 = createSprite(462,455,20,100);
  cardboard31.shapeColor = "brown";
   cardboard32 = createSprite(122,520,100,20);
   cardboard32.shapeColor = "brown";
   cardboard25 = createSprite(444,144,100,20);
   cardboard25.shapeColor = "brown";
    cardboard26 = createSprite(466,237,20,100);
   cardboard26.shapeColor = "brown";
    cardboard27 = createSprite(425,341,100,20);
    cardboard27.shapeColor = "brown";
    cardboard28 = createSprite(71,443,100,20);
    cardboard28.shapeColor = "brown";
    cardboard29= createSprite(266,456,20,100);
   cardboard29.shapeColor = "brown";
    cardboard30 = createSprite(310,479,100,20);
   cardboard30.shapeColor = "brown";
    cardboard31 = createSprite(462,455,20,100);
   cardboard31.shapeColor = "brown";
    cardboard32 = createSprite(338,548,100,20);
    cardboard32.shapeColor = "brown"; 
    cardboard33 = createSprite(200,613,20,100);
    cardboard33.shapeColor = "brown";
     cardboard34 = createSprite(565,253,100,20);
     cardboard34.shapeColor = "brown"; 
     cardboard35 = createSprite(591,124,20,100);
   cardboard35.shapeColor = "brown";
    cardboard36 = createSprite(555,361,100,20);
    cardboard36.shapeColor = "brown"; 
    cardboard37 = createSprite(656,314,20,100);
   cardboard37.shapeColor = "brown";
    cardboard38 = createSprite(522,35,100,20);
    cardboard38.shapeColor = "brown"; 
    cardboard39 = createSprite(420,610,20,100);
    cardboard39.shapeColor = "brown";
     cardboard40 = createSprite(44,649,100,20);
     cardboard40.shapeColor = "brown"; 
     cardboard41 = createSprite(496,498,100,20);
     cardboard41.shapeColor = "brown"; 
     cardboard42 = createSprite(647,122,100,20);
     cardboard42.shapeColor = "brown"; 
     cardboard43 = createSprite(351,631,100,20);
     cardboard43.shapeColor = "brown"; 
     cardboard44 = createSprite(574,440,100,20);
   cardboard44.shapeColor = "brown";
   cardboard45 = createSprite(35,578,20,100);
  cardboard45.shapeColor = "brown";
  cardboard46 = createSprite(744,345,100,20);
   cardboard46.shapeColor = "brown";
   cardboard47 = createSprite(743,200,20,100);
  cardboard47.shapeColor = "brown";
  cardboard48 = createSprite(120,709,100,20);
   cardboard48.shapeColor = "brown";
   cardboard49 = createSprite(710,447,20,100);
  cardboard49.shapeColor = "brown";
  cardboard50 = createSprite(594,574,20,100);
  cardboard50.shapeColor = "brown";
  cardboard51 = createSprite(288,703,20,100);
  cardboard51.shapeColor = "brown";
  cardboard52 = createSprite(492,590,100,20);
   cardboard52.shapeColor = "brown";
   cardboard53 = createSprite(694,558,100,20);
   cardboard53.shapeColor = "brown";
   cardboard54 = createSprite(121,762,20,100);
   cardboard54.shapeColor = "brown";
   cardboard55 = createSprite(436,724,100,20);
   cardboard55.shapeColor = "brown";
   cardboard56 = createSprite(704,35,100,20);
   cardboard56.shapeColor = "brown";
   cardboard57 = createSprite(559,661,100,20);
   cardboard57.shapeColor = "brown";
   cardboard58 = createSprite(704,649,20,100);
  cardboard58.shapeColor = "brown";
  cardboard59 = createSprite(242,841,100,20);
  cardboard59.shapeColor = "brown";
  cardboard60 = createSprite(602,746,20,100);
  cardboard60.shapeColor = "brown";
  cardboard61 = createSprite(522,821,100,20);
  cardboard61.shapeColor = "brown";
  cardboard62 = createSprite(387,863,20,100);
  cardboard62.shapeColor = "brown";
  cardboard63 = createSprite(689,752,100,20);
  cardboard63.shapeColor = "brown";
  cardboard63 = createSprite(73,875,20,100);
  cardboard63.shapeColor = "brown";
  cardboard64 = createSprite(798,651,100,20);
  cardboard64.shapeColor = "brown";
  cardboard65 = createSprite(758,837,20,100);
  cardboard65.shapeColor = "brown";
}







function draw() {
  background(0);

  text("score: "+ score,915,33);
  text(mouseX +","+ mouseY,mouseX,mouseY);
  Engine.update(engine);
 
if(gameState === PLAY){


if(keyDown("DOWN_ARROW")){
  piskeloa.velocityY = 1
}
if(keyDown("UP_ARROW")){
  piskeloa.velocityY = -1
}
if(keyDown("LEFT_ARROW")){
  piskeloa.velocityX = -1
}
if(keyDown("RIGHT_ARROW")){
  piskeloa.velocityX = 1
}
piskeloa.bounceOff(edges);


if(piskeloa.isTouching(goldcoin)||piskeloa.isTouching(goldcoin1)||piskeloa.isTouching(goldcoin2)||piskeloa.isTouching(goldcoin3)){
  score = score+5
}

if(piskeloa.isTouching(ghoststare)||piskeloa.isTouching(ghoststare1)){
  score = score-3
}






//piskeloa.bounceOff(wall6);
ghoststare.bounceOff(edges);
ghoststare1.bounceOff(edges);
goldcoin.bounceOff(edges);
goldcoin1.bounceOff(edges);
goldcoin2.bounceOff(edges);
goldcoin3.bounceOff(edges);
galaix.bounceOff(edges);
galaix2.bounceOff(edges);
piskeloa.bounceOff(cardboard1);
piskeloa.bounceOff(cardboard2);
piskeloa.bounceOff(cardboard3);
piskeloa.bounceOff(cardboard4);
piskeloa.bounceOff(cardboard5);
piskeloa.bounceOff(cardboard6);
piskeloa.bounceOff(cardboard7);
piskeloa.bounceOff(cardboard8);
piskeloa.bounceOff(cardboard9);
piskeloa.bounceOff(cardboard10);
piskeloa.bounceOff(cardboard11);
piskeloa.bounceOff(cardboard12);
piskeloa.bounceOff(cardboard13);
piskeloa.bounceOff(cardboard14);
piskeloa.bounceOff(cardboard15);
piskeloa.bounceOff(cardboard16);
piskeloa.bounceOff(cardboard17);
piskeloa.bounceOff(cardboard18);
piskeloa.bounceOff(cardboard19);
piskeloa.bounceOff(cardboard20);
piskeloa.bounceOff(cardboard21);
piskeloa.bounceOff(cardboard22);
piskeloa.bounceOff(cardboard23);
piskeloa.bounceOff(cardboard24);
piskeloa.bounceOff(cardboard25);
piskeloa.bounceOff(cardboard26);
piskeloa.bounceOff(cardboard27);
piskeloa.bounceOff(cardboard28);
piskeloa.bounceOff(cardboard29);
piskeloa.bounceOff(cardboard30);
piskeloa.bounceOff(cardboard31);
piskeloa.bounceOff(cardboard32);
piskeloa.bounceOff(cardboard33);
piskeloa.bounceOff(cardboard34);
piskeloa.bounceOff(cardboard35);
piskeloa.bounceOff(cardboard36);
piskeloa.bounceOff(cardboard37);
piskeloa.bounceOff(cardboard38);
piskeloa.bounceOff(cardboard39);
piskeloa.bounceOff(cardboard40);
piskeloa.bounceOff(cardboard41);
piskeloa.bounceOff(cardboard42);
piskeloa.bounceOff(cardboard43);
piskeloa.bounceOff(cardboard44);
piskeloa.bounceOff(cardboard45);
piskeloa.bounceOff(cardboard46);
piskeloa.bounceOff(cardboard47);
piskeloa.bounceOff(cardboard48);
piskeloa.bounceOff(cardboard49);
piskeloa.bounceOff(cardboard50);
piskeloa.bounceOff(cardboard51);
piskeloa.bounceOff(cardboard52);
piskeloa.bounceOff(cardboard53);
piskeloa.bounceOff(cardboard54);
piskeloa.bounceOff(cardboard55);
piskeloa.bounceOff(cardboard56);
piskeloa.bounceOff(cardboard57);
piskeloa.bounceOff(cardboard58);
piskeloa.bounceOff(cardboard59);
piskeloa.bounceOff(cardboard60);
piskeloa.bounceOff(cardboard61);
piskeloa.bounceOff(cardboard62);
piskeloa.bounceOff(cardboard63);
piskeloa.bounceOff(cardboard64);
piskeloa.bounceOff(cardboard65);

if(piskeloa.isTouching(house)){
gameState = END
}
}
else if(gameState === END){
coinGroup.setVelocityEach(0,0);
ghostGroup.setVelocityEach(0,0);
piskeloa.setVelocity(0,0);
}

  drawSprites();

}




