$(function(){
	$(".log-right").on('click',function(e){
		$(".herder-nav").toggle(200)
		e.stopPropagation();
	})
	$(document).on('click',function() {
		$(".herder-nav").hide(200);
	});
	$(".herder-nav-parent>li").on('click',function(e){
		$(this).find("a").children(".ico").toggleClass("on");
		$(this).children(".herder-nav-next").toggle(200);
		$(this).siblings().children(".herder-nav-next").hide(200);
		$(this).siblings().find("a").children(".ico").removeClass("on");
		e.stopPropagation();
	})
	//回到顶部
	$(".copyright-top").on('click',function(){
		$('body,html').animate({
			scrollTop: 0
		}, 200);
		return false;
	})
//回到顶部	
	$("#top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 200);
		return false;
	})
})
