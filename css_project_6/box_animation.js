$(document).ready(function () {
    $('.trigger').on('click', function () {
        $(this).toggleClass('clicked');
    });
    $('.trigger_1').on('click', function(){
        $(this).toggleClass('paused');
    });

    $('html').on('click', function(){
        $(this).find('body').append('<div class="trigger_2">' +
            '<div class="box_2" >' +
            '</div>'+ '</div>');
    });

});
