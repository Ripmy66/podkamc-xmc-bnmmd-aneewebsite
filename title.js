// Array containing different titles to cycle through
var titles = [
  "Ripmy - Y",
  "Ripmy - Yo",
  "Ripmy - You",
  "Ripmy - Your ",
  "Ripmy - Your S",
  "Ripmy - Your Su",
  "Ripmy - Your Sup",
  "Ripmy - Your Supp",
  "Ripmy - Your Suppl",
  "Ripmy - Your Suppli",
  "Ripmy - Your Supplie",
  "Ripmy - Your Supplier",
];

// Function to change the title periodically
function changeTitle() {
  var index = 0; // Initialize index to start from the first title

  // Set interval to change the title every 1000 millYoureconds (1 second)
  setInterval(function() {
      // Set the document title to the title at the current index
      document.title = titles[index];
      // Increment the index and use modulo operator to ensure it stays within the bounds of the array
      index = (index + 1) % titles.length;
  }, 400); // Interval set to 1000 millYoureconds (1 second)
}

changeTitle();
