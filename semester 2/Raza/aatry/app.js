$(document).ready(function() {
    // Initialize all the functionalities
    initializeSmoothScroll();
    initializeFAQToggle();
    initializeImageResize();
    initializeProductCardHover();
    initializeProductImageToggle();
    initializeMenuToggle();
});

// Function for smooth scroll on navigation links
function initializeSmoothScroll() {
    $("nav ul li a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, 'swing');
        }
    });
}

// Function to toggle FAQ answers
function initializeFAQToggle() {
    $(".question").on("click", function() {
        $(this).next(".answer").slideToggle(500, "swing");
    });
}

// Function to animate image resizing and opacity change
function initializeImageResize() {
    $(".img1 img").on("click", function() {
        $(this).animate({
            width: "80%",
            opacity: 0.5
        }, 1000, function() {
            $(this).animate({
                width: "100%",
                opacity: 1
            }, 1000);
        });
    });
}

// Function for hover effects on product cards
function initializeProductCardHover() {
    $(".card").hover(function() {
        $(this).css("transform", "scale(1.05)");
    }, function() {
        $(this).css("transform", "scale(1)");
    });
}

// Function to toggle product image visibility with fade effect
function initializeProductImageToggle() {
    $(".card img").on("click", function() {
        $(this).fadeOut(300, function() {
            // Optionally change the image source here
            $(this).fadeIn(300);
        });
    });
}

// Function to toggle navigation menu visibility
function initializeMenuToggle() {
    $(".menu-btn").on("click", function() {
        $("#menu").toggleClass("active");
        if ($("#menu").hasClass("active")) {
            $("#menu").css("transform", "translateX(0)");
        } else {
            $("#menu").css("transform", "translateX(-100%)");
        }
    });
}
