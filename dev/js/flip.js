$(document).ready(function() {
    $('.auth_button').on('click', function(e) {
        e.preventDefault();
        $('.welcome_block').css("transform", "rotateY(1620deg)");
    });
    $('.auth_link-home').on('click', function(e) {
        e.preventDefault();
        $('.welcome_block').css("transform", "rotateY(0deg)");
    });
});