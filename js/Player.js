class Player {
  constructor() {
    this.name = "";
    this.index = null;
    this.score = 0
  }

  getPlayerCount(){
    database.ref("playerCount").on("value", (data)=>{
      playerCount = data.val();
    })
  }

  updatePlayerCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      score: this.score
    });
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      index: this.index
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  }
