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


// 비건식당 팝업
$(function () {
  $('.infobox a:nth-child(1)').click(function () {
    $('.popup1').show();
    $('.popup2').hide();
  });

  $('.infobox a:nth-child(2)').click(function () {
    $('.popup2').show();
    $('.popup1').hide();
  });
});
