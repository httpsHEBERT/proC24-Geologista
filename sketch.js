const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var música;

var solo, paredeE, paredeD, teto;
var martelo;
var pedra, borracha, bola;

function preload(){
  música = loadSound("Sound/música.mp3");
}

function setup(){

  createCanvas(windowWidth, windowHeight-4);
  engine = Engine.create();
  world = engine.world;

  solo = new Solo(width/2, height-50, width+20, 110);
  paredeE = new Solo(width-width-23, height/2, 50, height);
  paredeD = new Solo(width+22, height/2, 50, height);
  teto = new Solo(width/2, height-height-23, width, 50);

  martelo = new Martelo(width/2, height/2, 30, 100);
  pedra = new Pedra(width/2, height-250, 80);
  borracha = new Borracha(width/2-30, height-430, 40, 60);
  bola = new Bola(width/2+15, height-500, 50);

  música.setVolume(0.5);
  música.loop();
}

function draw(){

  background("lightBlue");
  Engine.update(engine);

  paredeE.display();
  paredeD.display();
  teto.display();
  solo.display();
  martelo.display();
  pedra.display();
  borracha.display();
  bola.display();
}