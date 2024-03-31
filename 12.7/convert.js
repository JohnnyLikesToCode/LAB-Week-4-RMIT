window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Define variables
   const fInput = document.querySelector("#fInput");
   const cInput = document.querySelector("#cInput");
   let cDegrees;
   let fDegrees;
   let inputFromUser; // Initialize to determine user input
   let errorMessageContainer = document.querySelector("#errorMessage");
   let weatherImage = document.querySelector("#weatherImage");

   // Clear the other input when one is filled in
   document.querySelector("#cInput").addEventListener("input", () => {
      fInput.value = "";
   })

   document.querySelector("#fInput").addEventListener("input", () => {
      cInput.value = "";
   })

   // Convert button click event
   document.querySelector("#convertButton").addEventListener("click", () => {
      console.clear();
      // Clear error message
      errorMessageContainer.innerHTML = "";

      // Conversion
      console.log(`Celsius (before): ${cInput.value}\nFahrenheit (before): ${fInput.value}`);

      if (cInput.value) {  // If Celsius is filled in
         fDegrees = convertCtoF(parseFloat(cInput.value));
         fInput.value = fDegrees;
         cDegrees = cInput.value;
         inputFromUser = cInput.value;
         console.log(`Celsius detected!\n==========\nCelsius (after): ${cDegrees}\nFahrenheit (after): ${fDegrees}`);
      }

      else if (fInput.value) {  // If Fahrenheit is filled in
         cDegrees = convertFtoC(parseFloat(fInput.value));
         cInput.value = cDegrees;
         fDegrees = fInput.value;
         inputFromUser = fInput.value;
         console.log(`Fahrenheit detected!\n==========\nCelsius (after): ${cDegrees}\nFahrenheit (after): ${fDegrees}`);
      }

      else { inputFromUser = undefined }

      // Check for invalid input
      if (isNaN(cDegrees) || isNaN(fDegrees)) {
         console.log("NaN detected!");
         errorMessageContainer.innerHTML = `${inputFromUser} is not a number`;
      }

      // Display temperature image based on Fahrenheit
      if (fDegrees > 50) {
         weatherImage.src = "warm.png";
         weatherImage.alt = "Warm";
      }

      else if (fDegrees >= 32) {
         weatherImage.src = "cool.png";
         weatherImage.alt = "Cool";
      }

      else {
         weatherImage.src = "cold.png";
         weatherImage.alt = "Cold";
      }
   });
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9/5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5/9;
}
