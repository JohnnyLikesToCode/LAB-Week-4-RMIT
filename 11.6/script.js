const playGuessingGame = (numToGuess, totalGuesses) => {
    // Assign totalGuesses with 10 if no parameter is passed
    if (totalGuesses === undefined) {
        totalGuesses = 10;
    }

    // Main game loop
    let guessNum = 0;
    let guessCount = 1;
    let isFirstTime = true;
    while (guessCount < totalGuesses) {
        console.log(`Current guessNum: ${guessNum}`);
        // If user ran the game for the first time
        if (isFirstTime) {
            guessNum = prompt("Enter a number between 1 and 100.");
            isFirstTime = false;
        }

        // If user chose Cancel
        if (guessNum === null) {
            console.log("User cancelled the game");
            return 0;
        }
        
        // If user entered an invalid number
        if (isNaN(guessNum) || guessNum === "") {
            console.log(`Guess count (not count): ${guessCount}`);
            guessNum = prompt("Please enter a number.");
        }

        // If user entered a larger number
        else if (guessNum > numToGuess && guessNum !== "") {
            console.log("Larger ran");
            guessCount++;

            console.log(`Guess count (larger): ${guessCount}`);
            guessNum = prompt(`${guessNum} is too large. Guess a smaller number.`);
        }

        // If user entered a smaller number
        else if (guessNum < numToGuess && guessNum !== "") {
            console.log("Smaller ran");
            guessCount++;

            console.log(`Guess count (smaller): ${guessCount}`);
            guessNum = prompt(`${guessNum} is too small. Guess a larger number.`);
        }

        // If user guessed correctly
        else if (guessNum == numToGuess) {
            console.log("User won (1st loop)!");
            return guessCount;
        }
    }

    // If user got to the last guess
    while (guessCount == totalGuesses) {
        console.log("Second loop triggered!");
        // If user entered an invalid number
        if (isNaN(guessNum) || guessNum === "") {
            console.log(`Guess count (not count): ${guessCount}`);
            guessNum = prompt("Please enter a number.");
        }
        
        // If user entered the wrong number
        else if (guessNum != numToGuess) {
            console.log("User lost (2nd loop)!");
            return 0;
        }

        // If user guessed correctly
        else if (guessNum == numToGuess) {
            console.log("User won (2nd loop)!");
            return guessCount;
        }
    }
}