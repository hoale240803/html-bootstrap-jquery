$(function(){
	
	// nếu scroll thì navbar sẽ nhỏ lại 
	$(window).scroll(function(){
		let y= $(window).scrollTop();
		if(y>337){
			$('.navbar').addClass('blacker');
		}else{
			$('.navbar').removeClass('blacker');
		}
	})

	// nếu click vào menu thì sẽ transition nhẹ đến vị trí đã click
	$('.m1').click(function(){
		let posM1=$('#about').position();
		$('html').animate({
			scrollTop: posM1.top
		},2000,"easeInOutExpo");
		console.log(posM1);
		return false;
		
	})
	$('.m2').click(function(){
		let posM1=$('#download').position();
		$('html').animate({
			scrollTop: posM1.top
		},2000,"easeInOutExpo");
		return false;
	})
	$('.m3').click(function(){
		let posM1=$('#contact').position();
		$('html').animate({
			scrollTop: posM1.top
		},2000,"easeInOutExpo");
		return false;
	})

})