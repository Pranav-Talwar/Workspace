// Select all elements with the class 'value-link'
document.querySelectorAll('.value-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the related text from the clicked link's data-text attribute
        var newText = this.getAttribute('data-text');

        // Update the text content in the dynamic text container
        document.getElementById('dynamic-text').textContent = newText;
    });
});
$(document).ready(function () {
  $(".full-img").hover(
    function () {
      $(this).css({"opacity": "0.8" ,    "filter": "brightness(150%)"
      });},

    function () {
        $(this).css({"opacity": "1" ,    "filter": "brightness(100%)"

        });
    }
  );
});

var img = document.querySelector(".full-img");
var x = document.getElementById("sound");
img.addEventListener("click", function() {
    x.play();  
  });