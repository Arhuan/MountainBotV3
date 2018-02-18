var Discord = require("discord.js");



function createMatrix (arr, rows) {
    for (var i=0;i<rows;i++) {
        arr[i] = [];
     }
}

class TicGame {
    constructor(ID_1, ID_2) {
        this.player1 = ID_1;
        this.player2 = ID_2;
        this.turn = true;
        this.isOver = false;
        this.bd = [];
    }

    initialize() {
        this.turn = (Math.trunc(Math.random()*100000) % 2 == 0);
        createMatrix(this.bd);
    };

    checkOver () {
       var H = [];
       var found = false;
       for (var i = 0; i < 3; i++) {
           for(var j = 0; j < 3; j++) {
               H[i] += this.bd[i][j];
           }
       }
       
       for(var i = 0; i < 3; i++) {
           if (H[i] == "XXX" || H[i] == "OOO") {
               found = true;
               this.isOver = true;
           }
       }

       if (!found) {
           var V = [];
           for (var i = 0; i < 3; i++) {
               for (var j = 0; i < 3; j++) {
                V[i] += this.bd[j][i];
               }
           }

           for (var i = 0; i < 3; i++) {
               if (V[i] == "XXX" || "OOO") {
                   this.isOver = true;
               }
           }
       }
    };

    play(id, x, y) {
        if (col > 2 || col < 0 || row > 2 || row < 0) {
            return "Please place on the board!"
        }
        if (id === this.player1) {
            this.bd[y][x] = "X";
            updateBoard(true, x, y);
        } else {
            this.bd[y][x] = 2;
            updateBoard("O", x, y);
        }
    };

    updateBoard() {
       return "``` \n" +
              this.bd[0][0] + " | " + this.bd[0][1] + " | " + this.bd[0][2] + "\n" +
              this.bd[1][0] + " | " + this.bd[1][1] + " | " + this.bd[1][2] + "\n" +
              this.bd[2][0] + " | " + this.bd[2][1] + " | " + this.bd[2][2] + "\n" +
              "``` \n";
    };
}

function playGame(message, arg) {
    let game = new TicGame();
}