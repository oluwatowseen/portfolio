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