$(document).ready(function() {
    $('.nav a').click(function(e) {
        $('.nav .active').removeClass();
        $(e.target).parent('li').addClass('active');

        e.preventDefault();
        var strAncla=$(this).attr('href');
        $('body,html').stop(true,true).animate({
            scrollTop: $(strAncla).offset().top
        },1000);
    })
});