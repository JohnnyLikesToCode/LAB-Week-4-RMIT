function parseScores(scoresString) {
   const scoresArray = scoresString.split(" ");
   console.log(`Scores Array: [${scoresArray}]`);
   return scoresArray;
}

function buildDistributionArray(scoresArray) {
   distributionArray = [0, 0, 0, 0, 0];

   scoresArray.forEach((score) => {
      if (score >= 90) {
         distributionArray[0] += 1; // A
      } 
      
      else if (score >= 80) {
         distributionArray[1] += 1; // B
      } 
      
      else if (score >= 70) {
         distributionArray[2] += 1; // C
      } 
      
      else if (score >= 60) {
         distributionArray[3] += 1; // D
      } 
      
      else if (score < 60 && score != "") {
         distributionArray[4] += 1; // F
      }
   })

   console.log(`Distribution Array: [${distributionArray}]`);
   return distributionArray;
}

function setTableContent(userInput) {
   // Call the nescessary functions
   console.log(`Input String: ${userInput}`);
   const scoresArray = parseScores(userInput);
   const distributionArray = buildDistributionArray(scoresArray);

   // Define the table rows
   const barRow = document.querySelector("#firstRow");
   const countRow = document.querySelector("#thirdRow");

   let barCount = 0; // Initialize to keep track of the current bar
   distributionArray.forEach((count) => {
      // Add counts
      const td = document.createElement("td");
      td.textContent = count;
      countRow.appendChild(td);

      // Add bars
      const barDiv = document.createElement("div");
      barDiv.classList.add(`bar${barCount++}`); // Assign class to bar

      // Set the height of the bar
      barDiv.style.setProperty("height", `${count * 10}px`);

      // Append the bar to row
      const barTd = document.createElement("td");
      barTd.appendChild(barDiv);
      barRow.appendChild(barTd);
   })
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 60 59 74 59");