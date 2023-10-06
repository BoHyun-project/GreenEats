// 슬라이드 배너
$(function () {
  var swiper = new Swiper('.slide ', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
      nextEl: '.slide .swiper-button-next',
      prevEl: '.slide .swiper-button-prev',
    },
    pagination: {//블릿 버튼
      el: '.slide .swiper-pagination',
      clickable: true,
    },
  });
});

//    숫자 올라가는 효과


$(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 1500
  });
});

// sns 슬라이드
$(function () {
  var swiper = new Swiper('.flowslide_inner ', {
    slidesPerView: 5,//보여지는 갤러리 수
    spaceBetween: 50,//갤러리 사이 간격
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 0,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
  });

  $('.flowslide .swiper-slide').on('mouseover', function () {
    swiper.autoplay.stop();
  });
  $('.flowslide .swiper-slide').on('mouseout', function () {
    swiper.autoplay.start();
  });
});

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