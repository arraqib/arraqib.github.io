/**
 * Created by Abdullah on 7/30/2016.
 */

jQuery(function() {
    jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$("canvas.snow").let_it_snow({
    windPower: 0,
    opacity: 0.001,
    speed: 1,
    count: 200,
    size: 0,
    interaction: true,
    color: "#dbff00"
});

//When window load
$("#about img").addClass('animated zoomIn');

//When mouse hover
$("#about img").hover(function(event) {
    $(this).removeClass('animated zoomIn');
    $(this).toggleClass('animated rotateIn');
});

$("#work img").hover(function() {
        $(this).animate({
            opacity: 0.3
        }, "slow", "linear");
    },
    function() {
        $(this).animate({
            opacity: 1
        }, "slow", "linear");
    });
$("#contact .fa").hover(function() {
    $(this).toggleClass('animated flip');
});

// $("div").hover(function() {
//     $(this).animate({
//         width: "200px"
//     });
// }, function() {
//     $(this).animate({
//         width: "100px"
//     });
// });


//
//
//
// $(document).ready(function() {
//     // Add smooth scrolling to all links in navbar + footer link
//     $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
//
//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//
//             // Prevent default anchor click behavior
//             event.preventDefault();
//
//             // Store hash
//             var hash = this.hash;
//
//             // Using jQuery's animate() method to add smooth page scroll The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 900, function() {
//
//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });
