$(document).ready(function () {
    alert('hi');
    var ele = $('html');
    var scroll = 60;

    $('.scroller-btn-up').click(function () {
        // Scroll the element up    
        ele.animate({
            scrollTop : (ele.scrollTop() - scroll)
        })
    });

    $('.scroller-btn-down').click(function () {
        //alert('hi');
        // Scroll the element down
        ele.animate({
            scrollTop: (ele.scrollTop() + scroll)
        })
    });

    $('.scroller-btn-up, .scroller-btn-down').bind({
        click: function (e) {
            // Prevent the default click action
            e.preventDefault();
        }
    });
});