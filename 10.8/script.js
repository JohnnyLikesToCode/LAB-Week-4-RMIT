const divideArray = (numArray) => {
    // Initialize variables
    let evenNums = [];
    let oddNums = [];

    numArray.forEach(num => {
        // Check for even numbers
        if (num % 2 === 0) {
            evenNums.push(num);
        } 

        else {
            oddNums.push(num); // Else means odd
        }
    })

    // Sort the array
    evenNums.sort(function(a, b){return a - b});
    oddNums.sort(function(a, b){return a - b});


    // Display even results
    console.log("Even numbers:");
    if (evenNums.length === 0) {
        console.log("None");
    }
    else {
        evenNums.forEach(num => {
            console.log(num);
        })   
    }

    // Display odd results
    console.log("Odd numbers:");
    if (oddNums.length === 0) {
        console.log("None");
    }

    else {
        oddNums.forEach(num => {
            console.log(num);
        })
    }

}