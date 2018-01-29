$(function(){
	//选项卡
	$('.tab').mouseenter(function(){
		$('.tab img').css({opacity:'0.5'});
		$('.tab img').eq($(this).index()).css({opacity:'1'});
		$('.tab_ho').css('display','none');
		$('.tab_ho').eq($(this).index()).css('display','block');
	})
	var i=0;
	setInterval(function(){
		i++;
		$('.img_zhuan_1').css({transform:'rotate('+i+'deg)'});
		$('.img_zhuan_2').css({transform:'rotate('+i+'deg)'});
		$('.img_zhuan_3').css({transform:'rotate('+i+'deg)'});
		$('.img_zhuan_4').css({transform:'rotate('+i+'deg)'});
	},10)
	/*tab_move();
	function tab_move(){
		//初始
		$('.img_zi').css({opacity:'0',top:'0px'});
		$('.icon').css({opacity:'0',top:'24rem'});
		$('.img_cha').css({opacity:'0'});
		$('.img_zhuan_1').css({opacity:'0'});
		$('.img_diannao1').css({opacity:'0',top:'-10rem'});
		//目标
		move($('.img_zi'),{top:70},500,"linear");
		move($('.img_zi'),{opacity:1},500,"linear");
	}*/
})