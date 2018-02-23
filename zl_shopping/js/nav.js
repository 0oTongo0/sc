$(function() {
	$(".section-nav-left-next>li").hover(function() {
		var wd = $(this).index();
		$(".next-right").show();
		$(".section-nav-left-next>li").eq(wd).addClass("on bp").siblings().removeClass("on bp");
		$('.next-right .next-right-next').eq(wd).removeClass("hide").siblings().addClass("hide");
	}, function() {
		$('.main-next-nav-right .main-next-nav-right-mian').addClass("hide");
//		$(".next-right").hide();
	})
	$(".section-nav-left").hover(function(){
		$(".section-nav-left-next").show()
	},function(){
		$(".section-nav-left-next>li").removeClass("on bp");
		$(".section-nav-left-next").hide()
		$(".next-right").hide();
	})
//	回到顶部
		    $(window).on('scroll', function () {
		    	if($(window).scrollTop()>150){
		    		$("#top").show();
		    	}else{
		    		$("#top").hide();
		    	}
		    })
		    $("#top").click(function () {
		        $('body,html').animate({ scrollTop: 0 }, 200);
		        return false;
		 });
//	分类切换颜色
	$('.section-nav-main-right a').on('click',function(e){
	    event.preventDefault();
	    $(this).addClass("yc").siblings().removeClass("yc");
	});
})