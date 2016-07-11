

$(document).ready(function () {

    $('body').on({
        'mousewheel': function (e) {
            if (e.target.id == 'el') return;
            e.preventDefault();
            e.stopPropagation();
        }
    });
    
    //$('body').unbind('mousewheel');

    var ele = $('html');
    var scroll = $(window).outerHeight();

    $(document).keypress(function (event) {
        var key = event.keyCode;
        if (key == 40) {
            scroll_down();
        }
        if (key == 38) {
            scroll_up();
        }

    });

    function scroll_down() {
        ele.animate({
            scrollTop: (ele.scrollTop() + scroll)
        }, 3500)
    }

    function scroll_up() {
        ele.animate({
            scrollTop: (ele.scrollTop() - scroll)
        }, 3500)
    }

    $('.scroller-btn-up').click(function () {
        // Scroll the element up    
        scroll_up();
    });

    $('.scroller-btn-down').click(function () {
        scroll_down();
    });

    $('.scroller-btn-up, .scroller-btn-down').bind({
        click: function (e) {
            // Prevent the default click action
            e.preventDefault();
        }
    });

    var controller = new ScrollMagic.Controller();

    var truckScene = new ScrollMagic.Scene({
        triggerElement: '.parallax',
        duration: '50%',
        //triggerHook:'0.5'
    })
        .setTween(TweenMax.to('#truck', 1, {
            left: '40%', ease: Power0.easeNone
        }))
        .addIndicators()
        .addTo(controller);

});