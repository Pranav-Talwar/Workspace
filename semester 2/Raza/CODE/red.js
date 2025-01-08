$(function() { //used $ symbol as a shortcut for $(document).ready()
    // Kick things off by setting up the main functionalities
    FAQToggle();           
    ProductImageToggle();  
    ProductCardHover();
    ImageMovement();       
    SmoothScroll();        
});

// Handle the toggling of FAQ answers and add some flair
function FAQToggle() {
    $(".question").on("click", function() {
        var $answer = $(this).next(".answer"); // Grab the related answer
        
        // Slide the answer up or down smoothly
        $answer.stop(true, true).slideToggle(500, "swing");
        
        // Give the question a little personality based on the answer's visibility
        if ($answer.is(":visible")) {
            $(this).animate({
                backgroundColor: "#aa0000", // Change the background to a nice red
                color: "#fff",               // Change text color to white
                width: 450                   // Widen it for emphasis
            }, 1000);
        } else {
            $(this).animate({
                backgroundColor: "#fff",     // Reset the background color
                color: "#000",               // Set text color back to black
                width: 250                   // Bring it back to original width
            }, 1000); 
        }
    });
}

// Set up hover effect for product cards
function ProductCardHover() {
    $(".card").hover(function() {
        $(this).css("transform", "scale(1.05)");
    }, function() {
        $(this).css("transform", "scale(1)");
    });
}

// Function to toggle product image visibility with fade effect
function ProductImageToggle() {
    $(".card img").on("click", function() {
        $(this).fadeOut(200, function() {
            // Optionally change the image source here
            $(this).fadeIn(500);
        });
    });
}

// Add a playful bounce effect to images
function ImageMovement() {
    $(".img1").on("click", function() {
        $(this).stop(true, true).animate({ top: "-=20px" }, 200) // Bounce up
            .animate({ top: "+=20px" }, 300) // Bounce back down
            .animate({ top: "-=15px" }, 200) // A little jiggle up
            .animate({ top: "+=15px" }, 200); // And a jiggle down
    });
}

// Enable smooth scrolling to sections when buttons are clicked
function SmoothScroll() {
    $("button").on("click", function(event) {
        event.preventDefault(); // Stop the button from its default action
        var target = $(this).data("target"); // Get where we need to scroll to
        
        // Smoothly scroll to the specified section
        $('html, body').animate({
            scrollTop: $(target).offset().top // Move to the top of the target section
        }, 500); // This will take 500 milliseconds
    });
}
