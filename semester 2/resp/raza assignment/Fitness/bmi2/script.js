$(document).ready(function () {
    // Hover effect for the Calculate button
    $('#calculateBtn').hover(
      function () {
        $(this).css('background-color', '#0ff'); // Highlight on hover
      },
      function () {
        $(this).css('background-color', 'rgb(0, 0, 0)'); // Reset on mouse leave
      }
    );
  
    // BMI Calculation
    $('#calculateBtn').click(function () {
      const weight = parseFloat($('#weight').val());
      const height = parseFloat($('#height').val()) / 100; // Convert height to meters
  
      const resultElement = $('#result');
  
      if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.text('Please enter valid weight and height.').css('opacity', 1);
        return;
      }
  
      const bmi = weight / (height * height);
      let category = '';
  
      if (bmi <= 18.4) category = 'Underweight';
      else if (bmi <= 24.9) category = 'Normal weight';
      else if (bmi <= 39.9) category = 'Overweight';
      else category = 'Obese';
  
      var bmiText = "Your BMI is " + bmi.toFixed(2) + " (" + category + ").";
      resultElement
        .text(bmiText)
        .css('opacity', 0)
        .animate({ opacity: 1 }, 1000); // Fade-in result
    });
  });
  