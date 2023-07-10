class Game {
  constructor() {}

  start() {
    player = new Player();
    playerCount = player.getPlayerCount();

    form = new Form();
    form.display();
  
    redPlayer = createSprite(width-150, random(100,height-100));
    redPlayer.addImage("redTeam", redPlayerImg);
    redPlayer.scale = 0.5;

    bluePlayer = createSprite(100, random(100, height-100) );
    bluePlayer.addImage("blueTeam", bluePlayerImg);
    bluePlayer.scale = 0.5;

    ships = [redPlayer, bluePlayer];
  }

  getGameState(){
    database.ref("gameState").on("value", (data)=>{
      gameState = data.val();
    })
  }

  updateGameState(state){
    database.ref("/").set({
      "gameState": state
    })
  }

  play() {
    form.hide(); 
    
    Player.getPlayersInfo();
    //console.log(allPlayers);
    this.handlebluePlayerControls();
    this.handleredPlayerControls();
    this.shoot();

    if (allPlayers !== undefined) {
      for(var plr in allPlayers){
        //console.log(plr.index)
      }
    }
    
    drawSprites();
  }
    
    
  handlebluePlayerControls(){
    if (keyIsDown(UP_ARROW)) {
      bluePlayer.position.y -= 10;       
    }

    if (keyIsDown(DOWN_ARROW)) {
      bluePlayer.position.y += 10;       
    }
    
      if (keyIsDown(LEFT_ARROW)) {
      bluePlayer.position.x -= 5;
    }
    
      if (keyIsDown(RIGHT_ARROW)) {
      bluePlayer.position.x += 5;
    }
    }

    handleredPlayerControls(){
      if (keyDown("w")) {
        redPlayer.position.y -= 10;       
      }
  
      if (keyDown("s")) {
        redPlayer.position.y += 10;       
      }
      
        if (keyDown("a")) {
        redPlayer.position.x -= 5;
      }
      
        if (keyDown("d")) {
        redPlayer.position.x += 5;
      }
      }

    shoot(){
      if(player.index == 1){
        if(keyDown("z")){
          var sprite = createSprite(bluePlayer.position.x, bluePlayer.position.y, 40, 10);
          sprite.shapeColour = "blue"
          sprite.velocity.x = +5
        }
      }
      else{
        if(keyDown("x")){
          var sprite = createSprite(redPlayer.position.x, redPlayer.position.y, 40, 10);
          sprite.shapeColour = "red"
          sprite.velocity.x = -5
      }
    }  

}
}
