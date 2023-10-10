// 서브
$(function () {
    $('.header_in li').mouseenter(function () {
      $('.sub_box, .sub').stop().slideDown();
    });
    $('.header_in li').mouseleave(function () {
      $('.sub_box, .sub').stop().slideUp();
    });
  });
// 서브

// 컨텐츠1 aos 스크롤 애니메이션 효과
AOS.init({
    duration: 1200 //aos 나타나는 속도
  })

  // 탑 버튼
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 700) {
      $('.top').fadeIn();
  } else {
      $('.top').fadeOut();
  }
});

$( '.top' ).click( function() {
$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
return false;
} );
