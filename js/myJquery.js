/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
  'use strict';
  var swiper = new Swiper('.main-slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 0,
    speed: 4000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    }
  });
  var swiper = new Swiper('.sec-slider', {
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 16,
        autoplay: false,
      }
    }
  });
  $(function () {
    $(document).scroll(function () {
      var headr = $("#mainNav");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headr.addClass('scrolled');
      } else {
        headr.removeClass('scrolled');
      }
    });
  });
  var proj = $(".proj-col:nth-child(-n+6)");
  proj.show().addClass('f3-show');
  $(".loadMore").on("click", function (e) {
    e.preventDefault();
    $(".tab-pane.active  .proj-col").not('.f3-show').slideToggle(500, function () {
      if ($(".tab-pane.active .proj-col:hidden").length == 0) {
        $(".tab-pane.active .loadMore span").text("Show Less");
        return
      } else {
        $(".tab-pane.active .loadMore span").text("Load More");
      }
    });
  });
  $('input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);
  });
  var swiper = new Swiper('.swiper3', {
    slidesPerView: 2,
    speed: 3000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 5,
      }
    }
  });
  var swiper = new Swiper('.swiper4', {
    slidesPerView: 2,
    speed: 3000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      575: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 5,
      }
    }
  });
});