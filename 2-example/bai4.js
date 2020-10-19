$(function(){
	$('.navbar-right li:nth-child(2) a')
	.click(function(){
		$('body').scrollTop(700);
		console.log('vua cuon 700 px');
	})
})
