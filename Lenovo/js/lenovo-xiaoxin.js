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
	
	//顶部
	$(document).scroll(function(){
		if($(document).scrollTop()!=0){
			$('header').css('position','fixed');
			$('header img').attr('src','img/556db20f-e4d1-4ff8-8a24-8680b1da64fd.png');
			$('header img').css('width','4rem')
		}
		if($(document).scrollTop()==0){
			$('header').css('position','relative');
			$('header img').attr('src','img/0d66fb8c-f7b0-4d2c-888c-51d56f67aeab_1.jpg');
			$('header img').css('width','5rem')
		}
	})
	
	//选项卡
	$('.content_tab span').click(function(){
		$('.content_tab span').css('color','#D0CBCF')
		$(this).css('color','#fff');
		$(this).attr('class','active');
		//console.log($(this).index());
		$('.tab_hollow').css('display','none');
		$('.tab_hollow').eq($(this).index()).css('display','block');
	})
	
	/*$('#bigvideo #video section img:nth-of-type(2)').click(function(){
	$('#bigvideo #video section video').css({display:'block'}).play();
	$('#bigvideo #video section p').css({display:'block'});*/
	var imgtwo=document.querySelector('#bigvideo #video section img:nth-of-type(2)');
	var video=document.querySelector('#bigvideo #video section video');
	var videop=document.querySelector('#bigvideo #video section p');
	imgtwo.onclick=function(){
		video.style.display='block';
		videop.style.display='block';
		video.play();
	}
	videop.onclick=function(){
		video.style.display='none';
		videop.style.display='none';
		video.pause();
		video.currentTime=0;
	}
	var kaiguan=true;
	video.onclick=function(){
		if(!kaiguan){
			video.play();
		}else{
			video.pause();
		}
		kaiguan=!kaiguan;
	}
	
		/*换国旗*/
	var x=['img/2345截图20180127083209.png','img/2345截图20180127094450.png'];
	
	var bigbottom=document.getElementById('bigbottom');
	var imgh=document.getElementById('imgh');
	var sec=bigbottom.querySelector('select');
	var opa=bigbottom.querySelectorAll('select option');
	sec.onchange=function(){
		for(var s=0;s<opa.length;s++){
			/*alert(this.value);*/
			if(this.value%2==1){
				imgh.setAttribute('src',x[0]);
			}else{
				imgh.setAttribute('src',x[1]);
			}
		}
	}
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

