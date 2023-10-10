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

// 탭메뉴
$(function(){
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active').parents('li').removeClass('on');
		$(this).addClass('active').parents('li').addClass('on');
		return false;
	}).filter(':eq(0)').click();
  });
// 탭메뉴

// aos
AOS.init({
  duration: 1200 //aos 나타나는 속도
})
// aos