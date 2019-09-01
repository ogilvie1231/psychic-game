
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var lettersGuessedText = []
        var winsText = document.getElementById("winsText");
        var lossText = document.getElementById("lossText");
        var lettersGuessed = document.getElementById("lettersGuessedText");
        var guessesLeftText = document.getElementById("guessesLeftText");
        




        var computerGuess = options[Math.floor(Math.random() * options.length)];
        var guessesLeft = 11;
        // creating a reset
        var restart = function () {
            guessesLeft = 10;
            computerGuess = options[Math.floor(Math.random() * options.length)];
            lettersGuessedText = []
        }



        document.onkeyup = function () {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            var letCheck = false

            for(var i = 0; i < options.length; i++){
                if (userGuess === options[i]){
                    letCheck = true
                }
            }

            if (letCheck){

            for (var i = 0; i < lettersGuessedText.length; i++){
                if (userGuess === lettersGuessedText[i]){
                    alert("letter already guessed")
                    return
                }
            }
            lettersGuessedText.push(userGuess)

            console.log(computerGuess);

            console.log(userGuess);
            
            guessesLeft = (guessesLeft - 1)
            console.log(guessesLeft)



            if (computerGuess === userGuess) {

                wins++;

                restart();

                console.log(wins);

                alert("You are psychic!");

            }

            else if (guessesLeft === 0){
                losses++
                restart();

            console.log(losses)
        }




            winsText.textContent = "wins: " + wins;
            lossText.textContent = "losses: " + losses;
            guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
            lettersGuessed.textContent = "Letters Guessed: " + lettersGuessedText.join(', ');


        };

};

