$(function(){
	$(window).scroll(function(){
		y = $(window).scrollTop();
		if(y > 337){
		// làm cho navbar nhỏ đi khi scroll xuống
		$('.navbar-fixed-top').addClass('bigger');

	}else{
		// làm cho navbar to ra khi scroll lên gần navbar
		$('.navbar-fixed-top').removeClass('bigger');
	}

	let posFooter= $('#footer').position();
	if(y>1900){
		$('.home-btn').addClass('boom');
	}else{
		$('.home-btn').removeClass('boom');
	}

	$(window).scroll(function(){
		y=$(window).scrollTop();
		console.log(y);
		if(y>500){
			$('#menu1').addClass('disappear');
			$('#menu2').addClass('navbar-fixed-top');
			$('#menu2').addClass('menu-kenh14');
		}else{
			$('#menu1').removeClass('disappear');
			$('#menu2').removeClass('navbar-fixed-top');
			$('#menu2').removeClass('menu-kenh14');
		}
	})


})
})