function checkForm() {
   // Clear console
   console.clear();

   console.log("Initializing form...\n===============================");

   // Define variables
   console.log("Defining variables...");
   const fullName = document.querySelector("#fullName").value;
   const email = document.querySelector("#email").value;
   const pass = document.querySelector("#password").value;
   const confirmPass = document.querySelector("#passwordConfirm").value;

   // Initialize error messages
   console.log("Initializing error messages...");
   document.querySelector("#formErrors").classList.add("hide");
   const formErrors = document.querySelector("#formErrors");
   while (formErrors.hasChildNodes()) {
      formErrors.removeChild(formErrors.firstChild);
   }

   // Initialize error border
   console.log("Initializing error border...");
   document.querySelectorAll("input").forEach((e) => e.classList.remove("error"));

   // Initialize error array
   console.log("Initializing error array...");
   const errorArray = [];

   console.log("");

   console.log("Checking form...\n===============================");

   // Full name >1 character
   if (fullName.length < 1) {
      errorArray.push("Missing full name.");
      errorBorderEnabler("#fullName", "add");
   }

   // Valid email address
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!emailRegex.test(email)) {
      errorArray.push("Invalid or missing email address.");
      errorBorderEnabler("#email", "add");
   }

   // Password <10 or >20 characters
   if (pass.length < 10 || pass.length > 20) {
      errorArray.push("Password must be between 10 and 20 characters.");
      errorBorderEnabler("#password", "add");
   }

   // Password has at least one lowercase
   if (!/[a-z]/.test(pass)) {
      errorArray.push("Password must contain at least one lowercase character.");
      errorBorderEnabler("#password", "add");
   }

   // Password has at least one uppercase
   if (!/[A-Z]/.test(pass)) {
      errorArray.push("Password must contain at least one uppercase character.");
      errorBorderEnabler("#password", "add");
   }

   // Password has at least one digit
   if (!/[0-9]/.test(pass)) {
      errorArray.push("Password must contain at least one digit.");
      errorBorderEnabler("#password", "add");
   }

   // Password confirmation has to match password
   if (pass !== confirmPass) {
      errorArray.push("Password and confirmation password don't match.");
      errorBorderEnabler("#password", "add");
      errorBorderEnabler("#passwordConfirm", "add");
   }

   // Check if errors exist
   if (errorArray.length > 0) {
      document.querySelector("#formErrors").classList.remove("hide");
      errorsFormatterAndPrinter(errorArray);
   }
}

function errorBorderEnabler(id) {
   console.log(`Error border added: ${id}`);
   document.querySelector(id).classList.add("error");
}

function errorsFormatterAndPrinter(errorArray) {
   console.log("Printing errors...");

   const errorDiv = document.querySelector("#formErrors");
   const errorUnorderedList = errorDiv.appendChild(document.createElement("ul"));

   errorArray.forEach((error) => {
      let errorListElement = document.createElement("li");
      let errorText = document.createTextNode(error);
      errorListElement.appendChild(errorText);
      errorUnorderedList.appendChild(errorListElement);
   })
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});