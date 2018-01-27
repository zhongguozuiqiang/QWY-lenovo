$(function(){
	//搜索框
	$('.nav_down input').keyup(function(){
		var script=document.createElement("script");
		$('.nav_down').append($('<script></script>'));
		$('.nav_down script').attr('src','https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.value+'&cb=fn11');
		$('.nav_down script').remove();
	})
	
	//轮播效果
	var timer1;
	console.log($('.banner_img_view').css('left'));
	timer1=setInterval(function(){
		if($('.banner_img_view').css('left')=='0px'){
			$('.banner_img_move').css({left:'2000px'});
			move($('.banner_img_view')[0],{left:-2000},700,'linear');
			move($('.banner_img_move')[0],{left:0},700,'linear');
		}
		if($('.banner_img_move').css('left')=='0px'){
			$('.banner_img_view').css({left:'2000px'});
			move($('.banner_img_move')[0],{left:-2000},700,'linear');
			move($('.banner_img_view')[0],{left:0},700,'linear');
		}
	},3000);
	
	//顶部效果
	$(document).scroll(function(){
		if($(document).scrollTop()!=0){
			$('header').css('position','fixed');
			$('.nav_down img').attr('src','img/2642a0cd-0b67-4684-86e0-51036c82e72c.jpg');
			$('.nav_down img').css('width','4rem');
		}
		if($(document).scrollTop()==0){
			$('header').css('position','relative');
			$('.nav_down img').css('width','5rem');
			$('.nav_down img').attr('src','img/0d66fb8c-f7b0-4d2c-888c-51d56f67aeab_1.jpg');
		}
	})
	
	//选项卡
	$('.content_tab span').click(function(){
		$('.content_tab span').css('color','#D0CBCF');
		$(this).css('color','#fff');
		$('.tab_hollow').css('display','none');
		$('.tab_hollow').eq($(this).index()).css('display','block');
	})
})
function fn11(data){
	var input=document.querySelector(".nav_down input");
	var ul=document.querySelector(".nav_down ul");
	console.log(data);
	var str='';
	if(!data.s.length){
		ul.style.display="none";
		ul.innerHTML='';
	}else{
		ul.style.display="block";
			
		for(var i=0;i<data.s.length;i++){
			str+='<li>'+data.s[i]+'</li>';
		}
		ul.innerHTML=str;
	}
};

