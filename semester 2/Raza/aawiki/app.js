$(document).ready(function() {
    // Smooth scrolling for navigation
    $('aside ul li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 20
        }, 800);
    });

    // Toggle product description on hover
    $('.product-item img').hover(function() {
        $(this).siblings('.product-description').fadeToggle();
    });

    // FAQ toggle
    $('.faq-item h3').click(function() {
        $(this).siblings('.answer').slideToggle();
    });

    // Custom animation for product gallery
    $('.product-item img').click(function() {
        $(this).animate({ 
            opacity: 0.5, 
            marginLeft: '20px' 
        }, 500).animate({
            opacity: 1,
            marginLeft: '0'
        }, 500);
    });
});
\\788