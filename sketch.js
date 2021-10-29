const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImage, playerImage;
var baseOptions;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  baseOptions = {
    isStatic: true
  }

  //create player base body
  playerBase = Bodies.rectangle(200,400,250,100,baseOptions);
  World.add(world,playerBase);


  //create player body
  player = Bodies.rectangle(200,315,25,100,baseOptions);
  World.add(world,player);


}

function draw() {



  background(backgroundImg);

  imageMode(CENTER);

  //show the player image using image() function
  image(baseImage,playerBase.position.x,playerBase.position.y,250,100);

  //show the playerbase image using image() function
  image(playerImage,player.position.x,player.position.y,25,100);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
