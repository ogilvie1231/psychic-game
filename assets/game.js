
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // To start wins and losses at 0
        var wins = 0;
        var losses = 0;
        // to start quantity of guesses to 10
        var guessesLeft = 10;
        // empty array to hold user guesses
        var lettersGuessedText = []
        // calling on the HTML ID's
        var winsText = document.getElementById("winsText");
        var lossText = document.getElementById("lossText");
        var lettersGuessed = document.getElementById("lettersGuessedText");
        var guessesLeftText = document.getElementById("guessesLeftText");




        // giving the computer a random choice from the options array
        var computerGuess = options[Math.floor(Math.random() * options.length)];

        // creating a reset
        var restart = function () {
            guessesLeft = 10;
            computerGuess = options[Math.floor(Math.random() * options.length)];
            lettersGuessedText = []
        }
        winsText.textContent = "wins: " + wins;
        lossText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

        // creating onkey up function
        document.onkeyup = function () {
            // setting user guess to keyboard input and setting them all to lower case
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            // setting a letter checker to make only the keys in the options array playable
            var letCheck = false

            for (var i = 0; i < options.length; i++) {
                if (userGuess === options[i]) {
                    letCheck = true
                }
            }

            // only running these if letCheck is true
            if (letCheck) {

                for (var i = 0; i < lettersGuessedText.length; i++) {
                    if (userGuess === lettersGuessedText[i]) {
                        alert("letter already guessed")
                        return
                    }
                }
                // pushing letters guessed into our blank letters guessed array
                lettersGuessedText.push(userGuess)

                console.log(computerGuess);

                console.log(userGuess);

                // reducing guesses left by 1 for each guess made
                guessesLeft = (guessesLeft - 1)
                console.log(guessesLeft)


                // creating an 'if' for a user win and adding to 'wins'
                if (computerGuess === userGuess) {

                    wins++;

                    restart();

                    console.log(wins);

                    alert("You are psychic!");

                }

                // creating the scenario of a losing situation and adding to 'losses'
                else if (guessesLeft === 0) {
                    losses++
                    restart();

                    console.log(losses)
                }



                // displaying new numbers in the html
                winsText.textContent = "wins: " + wins;
                lossText.textContent = "losses: " + losses;
                guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
                lettersGuessed.textContent = "Letters Guessed: " + lettersGuessedText.join(', ');


            };

        };

