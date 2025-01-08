$(document).ready(function () {
    // 1. Navigation Menu with show/hide animation
    function toggleMenu() {
        $("#navigationMenu ul").hide();
        $("#navigationMenu h2").click(function () {
            $("#navigationMenu ul").slideToggle(); // Show/hide the navigation menu
        });
    }
    
    // Smooth scroll for navigation menu
    function smoothScroll() {
        $("a").click(function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800, 'swing'); // Smooth scroll with easing effect
        });
    }
    
    // 2. Product Gallery: Toggle visibility of product description with fade-in effect
    function toggleGallery() {
        $(".product-description").hide(); // Initially hide all product descriptions
        $(".product-item img").hover(function () {
            $(this).next(".product-description").fadeIn(); // Fade in description on hover
        }, function () {
            $(this).next(".product-description").fadeOut(); // Fade out description on hover out
        });
    }

    // 3. FAQ Section: Slide up/down answers on question click
    function toggleFAQ() {
        $(".answer").hide(); // Initially hide all answers
        $(".faq-item h3").click(function () {
            $(this).next(".answer").slideToggle(); // Slide down/up the clicked answer
        });
    }

    // 4. Custom Animation: Resize product image on click
    function customAnimation() {
        $(".product-item img").click(function () {
            $(this).animate({
                width: "300px", // Enlarge image
                height: "300px"
            }, 1000, 'easeInOutCubic') // Easing effect for animation
            .animate({
                width: "200px", // Resize back to original
                height: "200px"
            }, 1000);
        });
    }

    // 5. Handle various events (click, hover, mouseenter, mouseleave)
    function eventHandling() {
        // Click event example on FAQ item
        $(".faq-item").click(function () {
            console.log("FAQ item clicked");
        });

        // Mouse enter/leave events on product items
        $(".product-item").mouseenter(function () {
            $(this).css("border", "2px solid #ff6600"); // Highlight product on mouse enter
        }).mouseleave(function () {
            $(this).css("border", "none"); // Remove highlight on mouse leave
        });
    }

    // Function calls to initialize everything
    toggleMenu();
    smoothScroll();
    toggleGallery();
    toggleFAQ();
    customAnimation();
    eventHandling();
});
