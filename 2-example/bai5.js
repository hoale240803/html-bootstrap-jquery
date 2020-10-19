$(function(){
		//click vào nút find out more thì nó trượt một đoạn
		$('.bg-image a.btn.btn-default').click(function(){
			let pos= $('.bg-gray2').position();
		// Scroll to specific values
		// scrollTo is the same
		window.scroll({
			top: pos.top, 
			behavior: 'smooth'
		});
		$('.right-menu').removeClass('out');
		return false;
	});
		$('.l1').click(function(){
			let pos= $('.bg-image').position();
		// Scroll to specific values
		// scrollTo is the same
		window.scroll({
			top: pos.top, 
			behavior: 'smooth'
		});
		$('.right-menu').removeClass('out');
		return false;
	});
		$('.l2').click(function(){
			let pos= $('.infor').position();
		// Scroll to specific values
		// scrollTo is the same
		window.scroll({
			top: pos.top, 
			behavior: 'smooth'
		});
		$('.right-menu').removeClass('out');
		return false;
	});
		$('.l3').click(function(){
			let pos= $('.footer').position();
		// Scroll to specific values
		// scrollTo is the same
		window.scroll({
			top: pos.top, 
			behavior: 'smooth'
		});
		$('.right-menu').removeClass('out');
		return false;
	});
		$('.l4').click(function(){
			let pos= $('.services').position();
		// Scroll to specific values
		// scrollTo is the same
		window.scroll({
			top: pos.top, 
			behavior: 'smooth'
		});
		$('.right-menu').removeClass('out');
		return false;
	});

	//resize độ cao của win thì nó sẽ auto set height của window cho bg-image
	$(window).resize(function(){
		let docao = $(window).height();
		$('.bg-image').css({'height':docao})
	});
	// khi click vao icon menu
	$('.menu-button').click(function(){
		$('.right-menu').addClass('out');
	return false; // chống lại reload trang chằng hặn
});
	//khi click vào window thì nó sẽ close
	$('.right-menu').click(function(){
		$('.right-menu').removeClass('out');
	});
});


