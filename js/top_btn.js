// 탑 버튼
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 700) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
});

$(function () {
  $('.top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });
});

