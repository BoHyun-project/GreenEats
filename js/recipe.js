// 서브
$(function () {
    $('.header_in li').mouseenter(function () {
      $('.sub_box, .sub').stop().slideDown();
    });
    $('.header_in li').mouseleave(function () {
      $('.sub_box, .sub').stop().slideUp();
    });
  });
//   서브

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
// 탑 버튼

// aos JS
AOS.init({
  duration: 1200 //aos 나타나는 속도
})
// aos JS

// 레시피팝업
$(function () {
  $('.cookmenu1').click(function () {
    $('.popup1').show();
    $('.popup2, .popup3, .popup4').hide();
  });

  $('.cookmenu2').click(function () {
    $('.popup2').show();
    $('.popup1, .popup3, .popup4').hide();
  });

  $('.cookmenu3').click(function () {
    $('.popup3').show();
    $('.popup1, .popup2, .popup4').hide();
  });

  $('.cookmenu4').click(function () {
    $('.popup4').show();
    $('.popup1, .popup2, .popup3').hide();
  });
});
// 레시피팝업