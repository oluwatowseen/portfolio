$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#toTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

});
$(document).ready(function(){
        $("#projects").click(function() {
            $('html, body').animate({
                scrollTop: $("#project").offset().top
            }, 800);
        });

        $("#abouts").click(function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 800);
        });

        $("#contacts").click(function() {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 800);
        });
});