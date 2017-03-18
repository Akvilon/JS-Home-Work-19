$(function () {
    $('.slidesNav').click(function (e) {
        var id = e.target.id;
        var number = parseInt(id.slice(-1));

        $('.slidesNav').removeClass('activeSlide');
        $('#slidesNav' + number).addClass('activeSlide');

        $('#bigImage').attr('src', 'img/backgroundImage' + number + '.jpg');

    });

    $('.accordion-element').click(function () {
        if ($(this).className != 'active') {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

        }
    });
});