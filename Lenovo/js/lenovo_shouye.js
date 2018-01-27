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
	
	
	/*wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*/
	$('#bigchange div').each(function(i,elem){
		$(elem).mouseenter(function(){
			$('#bigchange div p:nth-of-type(2) b').eq(i).css({color:'#fff'});
			$('#bigchange div img:nth-of-type(2)').eq(i).stop().animate({opacity:0},10,'linear');
		}).mouseleave(function(){
			$('#bigchange div p:nth-of-type(2) b').eq(i).css({color:'#000'});
			$('#bigchange div img:nth-of-type(2)').eq(i).delay(500).animate({opacity:1},10,'linear');
		})
	})
	
	
	//world
	
	var world=document.getElementById('world');
	var p=world.querySelectorAll('p')
	var ul=world.querySelector('ul');
	var lis=ul.getElementsByTagName('li');
	ul.innerHTML+=ul.innerHTML;
	ul.style.width=lis[0].clientWidth*lis.length+'px';
	var q=0;
	var timerw=setInterval(function(){
		q++;
		if(q==lis.length/2){
			ul.style.marginLeft=0;
			q=0;
		}
		/*ul.style.marginLeft=-40-lis[0].clientWidth*q+'px';*/
		$(ul).animate({marginLeft:-lis[0].clientWidth*q},1000,'linear');
	},4000)
	
	for(var i=0;i<lis.length/2;i++){
		lis[i].onmouseenter=function(){
			clearInterval(timerw);
		}
		lis[i].onmouseleave=function(){
		timerw=setInterval(function(){
		q++;
		if(q==lis.length/2){
			ul.style.marginLeft=0;
			q=0;
		}
		$(ul).animate({marginLeft:-lis[0].clientWidth*q},1000,'linear');
	},4000)
		}
	}
	
	p[0].onclick=function(){
		q++;
		if(q==lis.length/2){
			ul.style.marginLeft=0;
			q=0;
		}
		$(ul).animate({marginLeft:-lis[0].clientWidth*q},1000,'linear');
	}
	p[1].onclick=function(){
		q--;
		if(q<0){
			ul.style.marginLeft=lis[0].clientWidth*q+'px';
			q=lis.length/2-1;
		}
		$(ul).animate({marginLeft:-lis[0].clientWidth*q},1000,'linear');
	}
	
	for(var i=0;i<p.length;i++){
		p[i].onmouseenter=function(){
			clearInterval(timerw);
		}
		p[i].onmouseleave=function(){
		timerw=setInterval(function(){
		q++;
		if(q==lis.length/2){
			ul.style.marginLeft=0;
			q=0;
		}
		$(ul).animate({marginLeft:-lis[0].clientWidth*q},1000,'linear');
	},4000)
		}
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
