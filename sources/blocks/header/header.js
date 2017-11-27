$(function () {
  $(document).on('click', '.header__menu-toggle', function () {
    $(this).toggleClass('header__menu-toggle--open');
    $('.header__inn-bottom').fadeToggle(200);
  })
});