var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["accc3bfb-94b1-4dda-b6c7-5c12863277d8"],"propsByKey":{"accc3bfb-94b1-4dda-b6c7-5c12863277d8":{"name":"animation","sourceUrl":null,"frameSize":{"x":239,"y":360},"frameCount":1,"looping":true,"frameDelay":12,"version":"gih4kz03nazy8cWlP0IDMSac9vnzff9S","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":360},"rootRelativePath":"assets/accc3bfb-94b1-4dda-b6c7-5c12863277d8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


playSound("assets/category_background/synthesize.mp3", true);
var border1 = createSprite(200,310,450,10);
border1.shapeColor='black';
var border2 = createSprite(200,210,450,10);
border2.shapeColor='black';
var border3 = createSprite(200,110,450,10);
border3.shapeColor='black';
var border4 = createSprite(200,10,450,10);
border4.shapeColor='black';

var startpoint1 = createSprite(50,360,2,90);
startpoint1.shapeColor='green' ;
var startpoint2 = createSprite(350,260,2,90);
startpoint2.shapeColor='green' ;
var startpoint3 = createSprite(50,160,2,90);
startpoint3.shapeColor='green' ;
var startpoint4 = createSprite(350,60,2,90);
startpoint4.shapeColor='green' ;

var goal1 = createSprite(390,360,50,90);
goal1.shapeColor='yellow' ;
var goal2 = createSprite(10,260,50,90);
goal2.shapeColor='yellow' ;
var goal3 = createSprite(390,160,50,90);
goal3.shapeColor='yellow' ;
var goal4 = createSprite(10,60,50,90);
goal4.shapeColor='yellow' ;

var player = createSprite(30, 360, 7, 7);
player.shapeColor = 'blue';

var ball1 = createSprite(100,395,10,10);
ball1.shapeColor = 'red';
var ball2 = createSprite(150,320,10,10);
ball2.shapeColor = 'red';
var ball3 = createSprite(200,395,10,10);
ball3.shapeColor = 'red';
var ball4 = createSprite(250,320,10,10);
ball4.shapeColor = 'red';
var ball5 = createSprite(300,395,10,10);
ball5.shapeColor = 'red'; 
var ball6 = createSprite(350,320,10,10);
ball6.shapeColor = 'red';

var pad1 = createSprite(320,300,60,4);
pad1.shapeColor = 'purple';
var pad2 = createSprite(230,300,60,4);
pad2.shapeColor = 'purple';
var pad3 = createSprite(160,300,60,4);
pad3.shapeColor = 'purple';
var pad4 = createSprite(70,300,60,4);
pad4.shapeColor = 'purple';

var wall8 = createSprite(70,150,7,70);
wall8.shapeColor = 'black';
var wall1 = createSprite(110,170,7,70);
wall1.shapeColor = 'black';
var wall2 = createSprite(150,150,7,70);
wall2.shapeColor = 'black';
var wall3 = createSprite(190,170,7,70);
wall3.shapeColor = 'black';
var wall4 = createSprite(230,150,7,70);
wall4.shapeColor = 'black';
var wall5 = createSprite(270,170,7,70);
wall5.shapeColor = 'black';
var wall6 = createSprite(310,150,7,70);
wall6.shapeColor = 'black';
var wall7 = createSprite(350,170,7,70);
wall7.shapeColor = 'black';

var brick1 = createSprite(300,50,30,60);
brick1.shapeColor='brown';
var brick2 = createSprite(240,50,30,60);
brick2.shapeColor='brown';
var brick3 = createSprite(180,50,30,60);
brick3.shapeColor='brown';
var brick4 = createSprite(120,50,30,60);
brick4.shapeColor='brown';
var brick5 = createSprite(60,50,30,60);
brick5.shapeColor='brown';

ball1.velocityY=-7;
ball2.velocityY=7;
ball3.velocityY=-7;
ball4.velocityY=7;
ball5.velocityY=-7;
ball6.velocityY=7;

pad1.velocityY=-3;
pad2.velocityY=-3;
pad3.velocityY=-3;
pad4.velocityY=-3;

brick1.velocityY=1;
brick2.velocityY=1;
brick3.velocityY=1;
brick4.velocityY=1;
brick5.velocityY=1;






function draw() {
  
  background("white");
  createEdgeSprites();
 ball1.bounceOff(border1);
 ball1.bounceOff(edges);
ball2.bounceOff(border1);
ball2.bounceOff(edges);
ball3.bounceOff(border1);
ball3.bounceOff(edges);
ball4.bounceOff(border1);
ball4.bounceOff(edges);
ball5.bounceOff(border1);
ball5.bounceOff(edges);
ball6.bounceOff(border1);
ball6.bounceOff(edges);

pad1.bounceOff(border1);
pad1.bounceOff(border2);
pad2.bounceOff(border1);
pad2.bounceOff(border2);
pad3.bounceOff(border1);
pad3.bounceOff(border2);
pad4.bounceOff(border1);
pad4.bounceOff(border2);

brick1.bounceOff(border3);
brick1.bounceOff(border4);
brick2.bounceOff(border3);
brick2.bounceOff(border4);
brick3.bounceOff(border3);
brick3.bounceOff(border4);
brick4.bounceOff(border3);
brick4.bounceOff(border4);
brick5.bounceOff(border3);
brick5.bounceOff(border4);


if(keyDown("RIGHT")){
  player.x= player.x + 4;
}

if(keyDown("UP")){
  player.y= player.y - 4;
}

if(keyDown("DOWN")){
  player.y= player.y + 4;
}

if(keyDown("LEFT")){
  player.x= player.x - 4;
}

if(player.isTouching(goal1)){
  player.x=380;
  player.y=260;
}

if(player.isTouching(goal2)){
  player.x=26;
  player.y=162;
}

if(player.isTouching(goal3)){
  player.x=378;
  player.y=64;
}

if(player.isTouching(goal4)){
  background("yellow");
  textSize(49);
  text("👌👍You win 👌👍 ",1, 200);
  textFont("Arial");
  ball1.visible = false;
ball2.visible = false;
ball3.visible = false;
ball4.visible = false;
ball5.visible = false;
ball6.visible = false;

player.visible = false;

pad1.visible = false;
pad2.visible = false;
pad3.visible = false;
pad4.visible = false;

goal1.visible = false;
goal2.visible = false;
goal3.visible = false;
goal4.visible = false;

border1.visible = false;
border2.visible = false;
border3.visible = false;
border4.visible = false;

startpoint1.visible = false;
startpoint2.visible = false;
startpoint3.visible = false;
startpoint4.visible = false;

brick1.visible = false;
brick2.visible = false;
brick3.visible = false;
brick4.visible = false;
brick5.visible = false;

wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
wall8.visible = false;
}

player.collide(bottomEdge);

if(player.isTouching(border1)||
  player.isTouching(border2)||
  player.isTouching(border3)||
  player.isTouching(border4)||
  player.isTouching(ball1)||
  player.isTouching(ball2)||
  player.isTouching(ball3)||
  player.isTouching(ball4)||
  player.isTouching(ball5)||
  player.isTouching(ball6)||
  player.isTouching(pad1)||
  player.isTouching(pad2)||
  player.isTouching(pad2)||
  player.isTouching(pad3)||
  player.isTouching(pad4)||
  player.isTouching(brick1)||
  player.isTouching(brick2)||
  player.isTouching(brick3)||
  player.isTouching(brick4)||
  player.isTouching(brick5)||
  player.isTouching(wall1)||
  player.isTouching(wall2)||
  player.isTouching(wall3)||
  player.isTouching(wall4)||
  player.isTouching(wall5)||
  player.isTouching(wall6)||
  player.isTouching(wall7)||
  player.isTouching(wall8))
{
  player.x=30;
  player.y=360;
}
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
