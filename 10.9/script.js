function calcWordFrequencies() {
    let sentence = prompt();

    // Split sentence into words
    let words = sentence.split(" ");

    // Count the words
    let frequencies = {};
    for (let word of words) {
        if (word in frequencies) {
            frequencies[word] = frequencies[word] + 1;
        } else {
            frequencies[word] = 1;
        }
    }

    // Display results
    for (let word in frequencies) {
        console.log(`${word} ${frequencies[word]}`);
    }
}