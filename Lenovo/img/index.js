/**
 * Created by guotingting on 2017/8/1.
 */
//第二屏轮播
var swiper1 = new Swiper('.banner1', {
  speed: 400,
  autoplay: 4500,
  pagination: '.swiper-pagination1',
  paginationClickable: true,
  onSlideChangeEnd:function(swiper){
    var index = swiper.activeIndex;
    $('.j-dots1 li').removeClass('active');
    $('.j-dots1 li').eq(index).addClass('active');
  }
});
swiper1.stopAutoplay();
//第三屏轮播
var swiper2 = new Swiper('.banner2', {
  autoplay: 4500,
  pagination: '.swiper-pagination2',
  paginationClickable: true,
  onSlideChangeEnd:function(swiper){
    var index = swiper.activeIndex;
    $('.j-dots2 li').removeClass('active');
    $('.j-dots2 li').eq(index).addClass('active');
  }
});
swiper2.stopAutoplay();

$('.j-dots1 li').mouseenter(function() {
  var _i = $(this).index();
  $('.j-dots1 li').removeClass('active');
  $(this).addClass('active');
  swiper1.slideTo(_i);
});
$('.j-dots1 li').mouseleave(function() {
  swiper1.startAutoplay();
});
$('.li_link').mouseenter(function() {
  swiper1.stopAutoplay();
});
$('.li_link').mouseleave(function() {
  swiper1.startAutoplay();
});
$('.j-dots2 li').mouseenter(function() {
  var _i = $(this).index();
  $('.j-dots2 li').removeClass('active');
  $(this).addClass('active');
  swiper2.slideTo(_i);
});
$('.j-dots2 li').mouseleave(function() {
  swiper2.startAutoplay();
});
$('.con_link').mouseenter(function() {
 swiper2.stopAutoplay();
 });
$('.con_link').mouseleave(function() {
  swiper2.startAutoplay();
});

//滚动加载动画
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height()/2;
  if (scrollTop >= (content1Height - height)) {
    if(!swiper1.autoplaying){
      swiper1.startAutoplay();
    }
    if(!$('.banner1').hasClass('loaded')){
      $('.banner1').addClass('loaded');
    }
  } else {
    if(swiper1.autoplaying){
      swiper1.stopAutoplay();
    }
  }
  if (scrollTop >= (content2Height - height)) {
    if(!swiper2.autoplaying){
      swiper2.startAutoplay();
    }
    if(!$('.banner2').hasClass('loaded')){
      $('.banner2').addClass('loaded');
    }
  } else {
    if(swiper2.autoplaying){
      swiper2.stopAutoplay();
    }
  }
});
//滚动条刷新加载动画
var content1Height = $('.content1').offset().top;
var content2Height = $('.content2').offset().top;
var documentHeight = $(document).scrollTop();
if (documentHeight >= (content1Height - 250) ) {
  if(!swiper1.autoplaying){
    swiper1.startAutoplay();
  }
  if(!$('.banner1').hasClass('loaded')){
    $('.banner1').addClass('loaded');
  }
} else {
  if(swiper1.autoplaying){
    swiper1.stopAutoplay();
  }
}
if (documentHeight >= (content2Height - 250) ) {
  if(!swiper2.autoplaying){
    swiper2.startAutoplay();
  }
  if(!$('.banner2').hasClass('loaded')){
    $('.banner2').addClass('loaded');
  }
} else {
  if(swiper2.autoplaying){
    swiper2.stopAutoplay();
  }
}
// 点我推荐弹框
$(".dianji_btn").click(function () {
  var i = $(this).attr('data-index');
  $(".dianji_tk").eq(i).show();
  $(".tk_main").show();
  swiper2.stopAutoplay();
});
$(document).on('click','.btn_close',function () {
  $('.dianji_tk').hide();
  $(".tk_main").hide();
  swiper2.startAutoplay();
});
//  右侧悬浮分享
var suspension = $("#suspension"),
  suspension_top = $("#content1"),
  s_t_value = suspension_top.offset().top;
if ($(window).scrollTop() >= s_t_value) {
  suspension.fadeIn();
} else {
  suspension.fadeOut();
}
$(window).scroll(function () {
  if ($(window).scrollTop() >= s_t_value) {
    suspension.fadeIn();
  } else {
    suspension.fadeOut();
  }
});