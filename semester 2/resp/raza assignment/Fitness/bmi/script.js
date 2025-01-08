// Wait for the DOM to fully load before executing the code
$(document).ready(function () {
    /**
     * Function to create a floating effect for the container.
     * The container moves up and down continuously to create a dynamic look.
     */
    function floatEffect() {
      $('.container')
        .animate({ top: '-=10px' }, 1200) // Move up by 10px
        .animate({ top: '+=10px' }, 1200, floatEffect); // Move down by 10px and repeat
    }
  
    // Initialize the floating effect on page load
    floatEffect();
  
    /**
     * Add a hover effect to the "Calculate BMI" button.
     * The font size enlarges slightly when hovered and reverts back when not hovered.
     */
    $('#calculateBtn').hover(
      function () {
        $(this).animate({ fontSize: '18px' }, 200); // Enlarge font size to 18px
      },
      function () {
        $(this).animate({ fontSize: '16px' }, 200); // Reset font size to 16px
      }
    );
  
    /**
     * Event listener for the "Calculate BMI" button click.
     * Calculates the BMI based on user input and displays the result with a fade-in effect.
     */
    $('#calculateBtn').click(function () {
      // Retrieve user inputs for weight and height
      const weight = parseFloat($('#weight').val()); // Get weight input
      const height = parseFloat($('#height').val()) / 100; // Convert height to meters
  
      // Reference to the result element
      const resultElement = document.getElementById('result');
  
      // Validate inputs
      if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        // Display error message for invalid inputs
        resultElement.textContent = 'Please enter valid values for weight and height.';
        resultElement.style.opacity = 1; // Make the result visible
        return; // Stop further execution
      }
      // Calculate BMI using the formula
      const bmi = weight / (height * height);
  
      let category = '';
      if (bmi <= 18.4) {
        category = 'Underweight';
      } else if (bmi <= 24.9) {
        category = 'Normal weight';
      } else if (bmi <= 39.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }
  
      // Display the calculated BMI and category
      resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
      // Use a fade-in animation to make the result appear smoothly
      $('#result').css('opacity', 0).animate({ opacity: 1 }, 1000); });});
  