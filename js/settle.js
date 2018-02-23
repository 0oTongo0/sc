$(function(){
//	支付方式
	$(".main-message-top-way span").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
//	优惠券+积分
	$(".discount-top li").click(function(){
		$(this).addClass("on").siblings().removeClass("on")
		var index = $(this).index();
		$(".discount-footer>div").eq(index).addClass("hide").siblings().removeClass("hide")
	})
//	点击新增地址弹出蒙层
	$("#increased").on('click',function(){
		$(".matte").fadeIn(200);
	})
//	蒙城部分
	$(".del,.cancel").on('click',function(){
		$(".matte").fadeOut(200);
	})
})
