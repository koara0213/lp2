// Voice
$(document).ready(function() {
  var currentSlide = 0;
  var slidesToShow = 1; // 初期状態では1枚表示
  var slideWidth = $('.customer-slide').outerWidth(true); // スライドの幅を取得（マージンを含む）
  var totalSlides = Math.ceil($('.customer-slide').length / slidesToShow); // 初期のスライド数を計算

  function updateSlidesToShow() {
    if ($(window).width() >= 768) { // 768px以上のとき
      slidesToShow = 3; // 3枚表示
      totalSlides = Math.ceil($('.customer-slide').length / slidesToShow); // ドットを再計算
      $('.dot').hide(); // すべてのドットを非表示
      for (let i = 0; i < totalSlides; i++) {
        $('.dot[data-slide="' + i + '"]').show(); // 計算された数だけドットを表示
      }
    } else {
      slidesToShow = 1; // 1枚表示
      totalSlides = Math.ceil($('.customer-slide').length / slidesToShow); // ドット数はスライド数に合わせて計算
      $('.dot').show(); // すべてのドットを表示
    }
    slideWidth = $('.customer-slide').outerWidth(true); // レスポンシブ対応で幅を再取得
  }

  function showSlide(index) {
    var offset = -index * slideWidth * slidesToShow; // スライドの位置を計算
    $('.customer-slides').css('transform', 'translateX(' + offset + 'px)');
    updateDots(index);
  }

  function updateDots(index) {
    $('.dot').removeClass('active');
    $('.dot[data-slide="' + index + '"]').addClass('active');
  }

  $('.slider-next').click(function() {
    currentSlide = (currentSlide + 1) % totalSlides; // 次のスライドへ移動
    showSlide(currentSlide);
  });

  $('.slider-prev').click(function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // 前のスライドへ移動
    showSlide(currentSlide);
  });

  $('.dot').click(function() {
    var slideIndex = $(this).data('slide');
    currentSlide = slideIndex;
    showSlide(currentSlide);
  });

  // ウィンドウサイズが変わったときの処理
  $(window).resize(function() {
    updateSlidesToShow();
    showSlide(currentSlide); // 現在のスライドを再表示
  });

  // 初期スライドを表示
  updateSlidesToShow();
  showSlide(currentSlide);
});


// Q&A
// ページロード時に全ての回答を非表示にする
$(document).ready(function() {
  $('.qa__answer').hide();
});

// Q&A アコーディオンのクリックイベント
$('.qa__text').on('click', function() {
  var answerBox = $(this).closest('.qa__item').find('.qa__answer');
  answerBox.slideToggle(); // slideToggleを使用して表示/非表示を切り替え

  var icon = $(this).closest('.qa__item').find('.bi-caret-down-fill, .bi-caret-up-fill');
  if (icon.hasClass('bi-caret-down-fill')) {
    icon.removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
  } else {
    icon.removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
  }
});

  // スムーススクロールの実装
  document.addEventListener("DOMContentLoaded", function () {
    // ページ内リンクのセレクタを指定
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < smoothScrollTrigger.length; i++) {
      smoothScrollTrigger[i].addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));

        // ターゲットの位置を取得
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const target = rect + offset;
        const s = document.documentElement.style;
        s.scrollBehavior = 'smooth';

        // ターゲット位置までスムーススクロール
        window.scrollTo({
          top: target,
          behavior: 'smooth'
        });

        // スクロール後は scrollBehavior を元に戻す
        setTimeout(() => {
          s.scrollBehavior = 'auto';
        }, 1000);
      });
    }
  });
