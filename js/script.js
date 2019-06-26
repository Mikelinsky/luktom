function showMenu () {
    let menuHeight = $('.vertical-menu__list').height();
    if (menuHeight === 0) {
        $('.vertical-menu__list').animate({
            height: '100%',
            width: '100%',
        }, 500);

        $('.vertical-menu__list').addClass('vertical-menu__list--visible');
    } else {
        $('.vertical-menu__list').animate({
            width: '0',
            height: '0',
        }, 500);

        $('.vertical-menu__list').removeClass('vertical-menu__list--visible');
    };
};

$(window).resize(function () {
    $('.vertical-menu__list').removeAttr('style');
    $('.vertical-menu__list').removeClass('vertical-menu__list--visible');
});

$('.vertical-menu__hamburger').on('click', showMenu);