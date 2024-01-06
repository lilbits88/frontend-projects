document.addEventListener('DOMContentLoaded', function() {
  // Get all summary elements
  var summaries = document.querySelectorAll('summary');

  // Iterate over each summary element
  summaries.forEach(function(summary) {
    // Add a click event listener
    summary.addEventListener('click', function() {
      // Toggle a class on the parent details element
      this.parentNode.classList.toggle('clicked');

      // Get the image element within the details element
      var image = this.parentNode.querySelector('img');

      // Check if the details element has the 'clicked' class
      if (this.parentNode.classList.contains('clicked')) {
        // Change the image source when clicked
        image.src = 'assets/images/icon-minus.svg';
      } else {
        // Reset the image source to the original when not clicked
        image.src = 'assets/images/icon-plus.svg';
      }
    });
  });
});
