$(document).ready(function() {
    $('.humburger_menu').on('click', function() {
        var $this = $(this),
            container = $this.closest('.wrapper'),
            wrapInner = container.find('.wrapper_inner'),
            hiddenItem = container.find('.hidden_item');


        $this.toggleClass('active');
        wrapInner.toggleClass('active');
        if ($this.hasClass('active')) {
            hiddenItem.stop(true).slideDown(500)
        } else {
            hiddenItem.stop(true).slideUp()
        }

        console.log(hiddenMenu);
    });
});