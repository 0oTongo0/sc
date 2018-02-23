		$(function(){
			var imgs = $(".nav img")
			var len = imgs.length;
			var left = $(".left")
			var right = $(".right")
			var index = 0;
			var spanFather = $(".yuand");
			var timer = null
			for(var i=0; i<imgs.length; i++){
				var span = $("<span class='yuan'></span>");
				spanFather.append(span);
			}
			var spans = $(".yuand").children("span");
			$(spans[0]).addClass("col");
			function showimgs(idx){
				$(".yuand span").eq(idx).addClass("col").siblings().removeClass("col");
				$(".nav>li").stop(true,true).eq(idx).fadeIn().siblings().fadeOut();
			}
			$(".yuand span").mouseover(function(){
				index = $(this).index();
				$(this).addClass("col").siblings().removeClass("col");
				$(".nav>li").eq(index).fadeIn().siblings().fadeOut();
			});
			right.click(function(){
				index ++;
				if(index > len-1){
					index = 0;
				}
				showimgs(index);
			});
			left.click(function(){
				index --;
				if(index < 0){
					index = len-1;
				}
				showimgs(index);
			});			
			$(".banner").hover(function(){
				clearInterval(timer);
				$(".left,.right").fadeIn();
			},function(){
				$(".left,.right").fadeOut();
				timer = setInterval(function(){
					index ++;
					if(index == len){
						index = 0;
					}
					showimgs(index);
				}, 2000);			
		}).trigger("mouseleave");
	});