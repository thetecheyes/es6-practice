class Player {
    constructor(pNum, pName) {
        this.jerseryNum = pNum;
        this.playerName = pName;
    }
}

const player1 = new Player(11, "Karim");
const player2 = new Player(14, "Ponting");

console.log(player1["playerName"], player2.playerName);