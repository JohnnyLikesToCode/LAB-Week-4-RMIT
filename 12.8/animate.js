let timerId = null;

window.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("click", startAnimation);
});

function startAnimation(e) {
   console.clear();
   console.log("Starting animation...");

   // Get mouse coordinates
   let clickX = e.clientX;
   let clickY = e.clientY;  
   
   // TODO: Modify the code below
   if (timerId !== null) {
      console.log("Timer existed, reseting...");
      clearInterval(timerId);
      timerId = null;
      timerId = setInterval(() => moveImage(clickX, clickY), 10);
   }

   else {
      console.log("Timer does not exist, creating...");
      timerId = setInterval(() => moveImage(clickX, clickY), 10);
   }
}

function moveImage(x, y) {
   console.log("Moving image...");
   const img = document.querySelector("img");
            
   // Determine location of image
   let imgX = parseInt(img.style.left);
   let imgY = parseInt(img.style.top);

   // Determine (x,y) coordinates that center the image 
   // around the clicked (x, y) coords
   const centerX = Math.round(x - (img.width / 2));
   const centerY = Math.round(y - (img.height / 2));

   // TODO: Add code here
   if (imgX === centerX && imgY === centerY) {
      console.log("Position reached, stopping...");
      clearInterval(timerId);
      timerId = null;
   }
   
   // Move 1 pixel in both directions toward the click
   if (imgX < centerX) {
      imgX++;
   }
   else if (imgX > centerX) {
      imgX--;
   }
   
   if (imgY < centerY) {
      imgY++;
   }
   else if (imgY > centerY) {
      imgY--;
   }
   
   img.style.left = imgX + "px";
   img.style.top = imgY + "px";
}