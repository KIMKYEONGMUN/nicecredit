$(function(){
    var swiper = new Swiper(".swiperCont1", {
        pagination: {
          el: ".swiper-pagination-cont1",
          clickable: true,
        },
        loop: true,
        autoplay: true,
      });

    var swiper = new Swiper(".swiperCont2", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination-cont2",
          clickable: true,
        },
      });

});// jquery end