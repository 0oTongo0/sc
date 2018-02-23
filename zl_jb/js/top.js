$(function(){
	//	回到顶部
		    $(window).on('scroll', function () {
		    	if($(window).scrollTop()>150){
		    		$(".top").show();
		    	}else{
		    		$(".top").hide();
		    	}
		    })
		    $(".top").click(function () {
		        $('body,html').animate({ scrollTop: 0 }, 200);
		        return false;
		 });
//	左边导航
				$(".personal-mian-left-nav>.jiaoyi").on('click',function() {
					$(this).toggleClass("yes");
					$(this).children(".personal-mian-left-nav-nexts").toggle(200);
					$(this).siblings().children(".personal-mian-left-nav-nexts").hide(200);
					$(this).siblings().removeClass("yes");
			})

})
