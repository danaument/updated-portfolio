

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});

$( document ).ready(function() {
    $("a[href='#home']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
        return false;
    });
});

