$(function(){
	$(".swiper-wrapper>div").on('click',function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
})
