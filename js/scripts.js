/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('.navbar-logo').attr('src','img/logo_color.png');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('.navbar-logo').attr('src','img/logo_white.png');
    }
});

$(window).resize(function() {
    if ($(".navbar").offset().top <= 50) {
        if ($(window).width() >= 768) {
            $('.navbar-logo').attr('src','img/logo_white.png');
        } else {
            $('.navbar-logo').attr('src','img/logo_color.png');
        }
    }
    
})

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(".issue-btn").click(function(event) {
    $(event.target).prev().slideToggle();
});


// Creates c3 chart
$(document).ready(function() {
    var chart = c3.generate({
        data: {
            x: 'x',
            columns: [
                ['x', '2000', '2002', '2004', '2006', '2008', '2010', '2012'],
                ['spending', 33.8, 16.7, 63.9, 37.8, 143.6, 205.5, 1000]
            ],
            type: 'bar'
        },
        axis: {
            y: {
                tick: {
                    format: function (d) { return '$' + d + 'M'; }
                },
                label: 'Total (in millions)'
            }
        },
        legend: {
            hide: true
        }
    });
});
