$(function(){
  $('.play-video-button').on('click',function(){
    $(this).hide();
    $('.demo-video')[0].play();
  })
  $('.demo-video').on('click',function(){
    this.pause();
    $('.play-video-button').show();
  })
  $('.demo-video').on('ended',function(){
    $('.play-video-button').show();
  })
});