// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});

$('.hamburger-menu-list').on('click', function () {
  hamburger.removeClass('hamburger-menu-active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });
});


// お客様の声
document.addEventListener('DOMContentLoaded', function () {
  $('.customer-slides').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }]
  });

  $('.slider-prev').on('click', function() {
      $('.customer-slides').slick('slickPrev');
  });

  $('.slider-next').on('click', function() {
      $('.customer-slides').slick('slickNext');
  });
});


// Q&A
$('.qa__description, .qa_containar_accordion-content_qa_question_content_accordion-icon').on('click', function() {
  var answerBox = $(this).closest('.qa_containar_accordion-content_qa').find('.qa_containar_accordion-content_qa_answer_content');

  answerBox.slideToggle();

  var icon = $(this).closest('.qa_containar_accordion-content_qa').find('.bi-caret-down-fill, .bi-caret-up-fill');

  if (icon.hasClass('bi-caret-down-fill')) {
    icon.removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
  } else {
    icon.removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
  }
});

$('.qa__description').on('click', function(e) {
  var answerBox = $(this).closest('.qa_containar_accordion-content_qa').find('.qa_containar_accordion-content_qa_answer_content');

  if (answerBox.css('display') === 'none') {
    answerBox.css('display', 'none');
  } else {
    answerBox.css('display', 'flex');
  }
});
