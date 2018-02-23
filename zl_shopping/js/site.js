$(function(){
	//	点击新增地址弹出蒙层
	$(".site_click").on('click',function(){
		$(".matte").fadeIn(200);
	})
//	蒙城部分
	$(".del,.cancel").on('click',function(){
		$(".matte").fadeOut(200);
	})
})
