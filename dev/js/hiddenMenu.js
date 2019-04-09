$(document).ready(function() {
    $('.humburger_menu').on('click', function() {
        var $this = $(this),
            container = $this.closest('.wrapper'),
            wrapInner = container.find('.wrapper_inner'),
            hiddenMenu = container.find('.hidden_list');


        $this.toggleClass('active');
        wrapInner.toggleClass('active');
        if ($this.hasClass('active')) {
            hiddenMenu.stop(true).slideDown(500)
        } else {
            hiddenMenu.stop(true).slideUp()
        }

        console.log(hiddenMenu);
    });
});