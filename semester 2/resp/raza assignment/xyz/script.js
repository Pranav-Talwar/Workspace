$(document).ready(function () {
    let timerInterval;
    let time = 0; // Time in seconds
  
    $(".start-btn").click(function () {
      // Clear any existing intervals to avoid multiple intervals running at once
      clearInterval(timerInterval);
      
      // Start the timer
      timerInterval = setInterval(() => {
        time++;
        updateDisplay($(this).siblings(".timer"), time);
      }, 1000);
    });
  
    $(".pause-btn").click(function () {
      clearInterval(timerInterval);
    });
  
    $(".reset-btn").click(function () {
      clearInterval(timerInterval);
      time = 0;
      updateDisplay($(this).siblings(".timer"), time);
    });
  
    // Function to update timer display
    function updateDisplay($timerElement, seconds) {
      let minutes = Math.floor(seconds / 60);
      let remainingSeconds = seconds % 60;
      
      // Format minutes and seconds with leading zeros
      $timerElement.find(".minutes").text(minutes.toString().padStart(2, "0"));
      $timerElement.find(".seconds").text(remainingSeconds.toString().padStart(2, "0"));
    }
  });
  