$(document).ready(function () {
    $('.trigger').on('click', function () {
        console.log('Hello their');
        $(this).toggleClass('clicked')
    })
})