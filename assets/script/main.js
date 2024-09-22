// Voice
$(document).ready(function() {
  var currentSlide = 0;
  var slidesToShow = 1;
  var slideWidth = $('.customer-slide').outerWidth(true);
  var totalSlides = Math.ceil($('.customer-slide').length / slidesToShow);

  function showSlide(index) {
    var offset = -index * slideWidth * slidesToShow;
    $('.customer-slides').css('transform', 'translateX(' + offset + 'px)');
    updateDots(index);
  }

  function updateSlidesToShow() {
    if ($(window).width() >= 1500) {
      slidesToShow = 3;
      totalSlides = Math.ceil($('.customer-slide').length / slidesToShow);
      $('.dot').hide();
      for (let i = 0; i < totalSlides; i++) {
        $('.dot[data-slide="' + i + '"]').show();
      }
    } else {
      slidesToShow = 1;
      totalSlides = Math.ceil($('.customer-slide').length / slidesToShow);
      $('.dot').show();
    }
    slideWidth = $('.customer-slide').outerWidth(true);
  }

  function showSlide(index) {
    var offset = -index * slideWidth * slidesToShow;
    $('.customer-slides').css('transform', 'translateX(' + offset + 'px)');
    updateDots(index);
  }

  function updateDots(index) {
    $('.dot').removeClass('active');
    $('.dot[data-slide="' + index + '"]').addClass('active');
  }

  $('.slider-next').click(function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  $('.slider-prev').click(function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  $('.dot').click(function() {
    var slideIndex = $(this).data('slide');
    currentSlide = slideIndex;
    showSlide(currentSlide);
  });

  $(window).resize(function() {
    updateSlidesToShow();
    slideWidth = $('.customer-slide').outerWidth(true);
    showSlide(currentSlide);
  });

  updateSlidesToShow();
  showSlide(currentSlide);
});


// Q&A
$(document).ready(function() {
  $('.qa__answer').hide();
});

$('.qa__item').on('click', function() {
  var answerBox = $(this).closest('.qa__item').find('.qa__answer');
  answerBox.slideToggle();

  var icon = $(this).closest('.qa__item').find('.bi-caret-down-fill, .bi-caret-up-fill');
  if (icon.hasClass('bi-caret-down-fill')) {
    icon.removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
  } else {
    icon.removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < smoothScrollTrigger.length; i++) {
      smoothScrollTrigger[i].addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));

        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const target = rect + offset;
        const s = document.documentElement.style;
        s.scrollBehavior = 'smooth';

        window.scrollTo({
          top: target,
          behavior: 'smooth'
        });

        setTimeout(() => {
          s.scrollBehavior = 'auto';
        }, 1000);
      });
    }
  });
