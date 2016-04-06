$(document).ready(function() {
  var src   = $('img.audio').attr('data-audio-src').toString();
  var sound = new Howl({
      urls: [src],
      buffer: true
  });

  $('.audio').click(function(e) {
    e.preventDefault();

    if ($(this).hasClass('playing')) {
      sound.pause();
      $(this).removeClass('playing');
    } else {
      sound.play();
      $(this).addClass('playing');
    }
  });

  $('.waves').click(function(e) {
    e.preventDefault();

    sound.pause();
  });
});
