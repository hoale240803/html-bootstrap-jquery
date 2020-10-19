$(function () {
	//khi click vào id sản phẩm thì nó scroll từ từ đến vị trí đó
	$('.n1').click(function(){	
		let posPortfolio= $('#sanpham').position();
		$('html').animate({scrollTop : posPortfolio.top-30},2000,"easeInOutExpo");
	return false; // để không gọi #sanpham mặc định thử bỏ rồi nó sẽ nháy nháy khó chịu lắm 
})
	$('.n2').click(function(){	
		let posAbout= $('#gioithieu').position();
		$('html').animate({scrollTop : posAbout.top-30},2000,"easeInOutExpo");
		return false;
	})
	$('.n3').click(function(){	
		let posContact= $('#lienhe').position();
		$('html').animate({scrollTop : posContact.top-30},2000,"easeInOutExpo");
		return false;
	})

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
})
})