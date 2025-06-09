function rollDice() {
    var randomNumber1 = (Math.random() * 6) + 1;
    randomNumber1 = Math.floor(randomNumber1);

    var randomNumber2 = (Math.random() * 6) + 1;
    randomNumber2 = Math.floor(randomNumber2);

    function player1(randomNumber1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    }

    function player2(randomNumber2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    }

    function winner(randomNumber1, randomNumber2) {
        if (randomNumber1 > randomNumber2) {
            document.querySelector(".para").textContent = "Player 1 Wins !";
        }
        else if (randomNumber1 < randomNumber2) {
            document.querySelector(".para").textContent = "Player 2 Wins !";
        }
        else {
            document.querySelector(".para").textContent = "Draw !";
        }
    }
    player1(randomNumber1);
    player2(randomNumber2);
    winner(randomNumber1, randomNumber2);
}

// gihtub button
    document.getElementById("github").addEventListener("click", function() {
        window.open("https://github.com/amitsharma4567/diceduel", "_blank");
    });
