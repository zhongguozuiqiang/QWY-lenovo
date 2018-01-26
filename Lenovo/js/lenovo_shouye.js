$(function(){
	var m=0;
	var timer;
	$('.banner').css('height',$('.banner img').css('height'));
	//鼠标移入
	$('.banner_sp span').mouseenter(function(){
		clearInterval(timer);
		$('.banner_sp span').each(function(i,elem){
			move(elem,{width:10},100,'linear');
			$(this).css({background:'#535353'});
		})
		move(this,{width:50},100,'linear');
		$(this).css({background:'#fff'});
		$('.banner img').each(function(i,elem){
			move(elem,{opacity:'0'},500,'linear');
		})
		m=$(this).index();
		//console.log($('.banner img').eq(0)[0]);
		move($('.banner img').eq(m)[0],{opacity:'1'},500,'linear');
	}).mouseout(function(){
		banner_move();
	})
	//轮播效果
	banner_move();
	function banner_move(){
		timer=setInterval(function(){
			m+=1;
			if(m==8){
				m=0;
			}
			$('.banner_sp span').each(function(i,elem){
				move(elem,{width:10},100,'linear');
				$(this).css({background:'#535353'});
			})
			move($('.banner_sp span').eq(m)[0],{width:50},100,'linear');
			$('.banner_sp span').eq(m).css({background:'#fff'});
			$('.banner img').each(function(i,elem){
				move(elem,{opacity:'0'},500,'linear');
			})
			move($('.banner img').eq(m)[0],{opacity:'1'},500,'linear');
		},2000);
	}
	$('.banner_sp1').click(function(){
		m-=1;
		if(m<0){
			m=7;
		}
		$('.banner_sp span').each(function(i,elem){
			move(elem,{width:10},100,'linear');
			$(this).css({background:'#535353'});
		})
		move($('.banner_sp span').eq(m)[0],{width:50},100,'linear');
		$('.banner_sp span').eq(m).css({background:'#fff'});
		$('.banner img').each(function(i,elem){
			move(elem,{opacity:'0'},500,'linear');
		})
		move($('.banner img').eq(m)[0],{opacity:'1'},500,'linear');
	})
	$('.banner_sp2').click(function(){
		m+=1;
		if(m==8){
			m=0;
		}
		$('.banner_sp span').each(function(i,elem){
			move(elem,{width:10},100,'linear');
			$(this).css({background:'#535353'});
		})
		move($('.banner_sp span').eq(m)[0],{width:50},100,'linear');
		$('.banner_sp span').eq(m).css({background:'#fff'});
		$('.banner img').each(function(i,elem){
			move(elem,{opacity:'0'},500,'linear');
		})
		move($('.banner img').eq(m)[0],{opacity:'1'},500,'linear');
	})
	$('.banner').mouseover(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		banner_move();
	})
	
	//选项卡
	$('.mingxingdanping span').mouseover(function(){
		$('.mingxingdanping span').css('color','#b6b6b6');
		$(this).css('color','#3d3d3d');
		$('.mx_tab').css('display','none');
		$('.mx_tab').eq($(this).index()-1).css('display','block');
	})
	//鼠标移入图片效果
	/*$('.mx_tab div img').mouseover(function(){
		$(this).css({marginTop:'-5'})
		console.log($('this'));
	})*/
/*	$('.mingxingdanping img').each(function(i,elem){
		$(elem).mouseover(function(){
			$(elem).css({marginTop:-10});
		})
	})*/
})
