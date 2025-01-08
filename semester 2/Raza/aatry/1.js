$(function() {
    // Toggle navigation menu with animation
    $(".menu-btn").on("click", function() {
        $("#menu").css("transform", function(index, value) {
            return value === "translateX(0%)" ? "translateX(-100%)" : "translateX(0%)";
        });
    });

    // Smooth scroll for navigation links
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, 'swing');
        }
    });

    // FAQ section: slideToggle for showing/hiding answers
    $(".faq .question").on("click", function() {
        $(this).next(".answer").slideToggle(500, "swing");
    });

    // Custom animation using .animate() for image resize
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

    // Product card hover effects with fade-in description
    $(".product-card").hover(function() {
        $(this).find("img").fadeTo(200, 0.5);
        $(this).find("h3").fadeIn(200);
    }, function() {
        $(this).find("img").fadeTo(200, 1);
        $(this).find("h3").fadeOut(200);
    });

    // Toggle product image visibility on click
    $(".product-card img").on("click", function() {
        $(this).fadeToggle(800);
    });
});
