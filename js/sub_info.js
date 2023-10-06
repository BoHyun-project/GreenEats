// 서브
$(function () {
  $('.header_in li').mouseenter(function () {
    $('.sub_box, .sub').stop().slideDown();
  });
  $('.header_in li').mouseleave(function () {
    $('.sub_box, .sub').stop().slideUp();
  });
});

//   인포박스 나타내기
$(function () {
  $('.locate').click(function () {
    $('.infobox').fadeToggle();
  });
});