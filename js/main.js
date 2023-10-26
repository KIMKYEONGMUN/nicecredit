$(function(){
    var swiper1 = new Swiper(".swiperCont1", {
        pagination: {
          el: ".swiper-pagination-cont1",
          clickable: true,
        },
        loop: true,
        autoplay: true,
      });

    var swiper2 = new Swiper(".swiperCont2", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination-cont2",
          clickable: true,
        },
      });

    $('.pause').click(function(){
      swiper1.autoplay.stop();
      $(this).hide();
      $('.play').show();
    });
    $('.play').click(function(){
      swiper1.autoplay.start();
      $(this).hide();
      $('.pause').show();
    });

});// jquery end