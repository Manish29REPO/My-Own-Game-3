var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount = 0;
var bluePlayer, redPlayer;
var bluePlayerImg, redPlayerImg;
var gameState = 0;
var ships=[];
var allPlayers =[];

function preload() {
  backgroundImage = loadImage("./assets/sprite_BackGround0.png");
  bluePlayerImg = loadImage("./assets/bluePC.png");
  redPlayerImg = loadImage("./assets/redPC.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getGameState();
  game.start();

}

function draw() {
  background(backgroundImage);
  
  if (playerCount == 2) {
    //console.log(allPlayers)
    game.updateGameState(1);
  }

  if (gameState == 1) {
    //console.log(allPlayers);
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
