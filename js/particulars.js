		$(function() {
			$(".section-content-left-footer-center li").hover(function() {
				var page = $(this).index();
				$(".section-content-left-top img").eq(page).show().siblings().hide();
			})
			var list = $(".section-content-left-footer-center").children().length;
			var prev = $(".up"); //获取左边按钮
			var next = $(".next"); //获取右边按钮
			var num = list * 50 + 6; //获取设置完后的宽度
			var listWidth = parseInt($(".section-content-left-footer-nav").css("width")); //获取大盒子的宽度
			var reduce = 300 - num; //差值
			var index = 0; //作为序列号，用于存储点击次数
			var move = 0; //作为存储具体移动的值
			prev.click(function() {
				if(!$(".section-content-left-footer-center").is(":animated")) {
					if(num < listWidth || num == listWidth) {
						return false;
					} else if(parseInt($(".section-content-left-footer-center").css("left")) == 0 || parseInt($(".section-content-left-footer-center").css("left")) > 0) {
						return false;
					} else {
						index--;
						about(index);
					}
				} else {}
			});
			next.click(function() {
				if(!$(".section-content-left-footer-center").is(":animated")) { //防止用户连续点击造成的错误
					if(num < listWidth || num == listWidth) {
						return false;
					} else if(parseInt($(".section-content-left-footer-center").css("left")) == reduce || parseInt($(".section-content-left-footer-center").css("left")) < reduce) {
						return false;
					} else {
						index++;
						about(index);
					}
				} else {}
			});

			function about(index) {
				move = index * 56;
				$(".section-content-left-footer-center").animate({
					"left": -move
				}, 300);
			}
			$(".plus").click(function() {
				var num = $(".num").val();
				var num1 = parseInt(num);
				$(".num").val(num1 + 1);
				
			})
			$(".minus").click(function() {
				var num3 = $(".num").val();
				var num4 = parseInt(num3);
				$(".num").val(num4 - 1);
				if(num3 < 2){
					$(".num").val("1");
				}				
			})
//			规格样式
			$(".gg-right .link").click(function(){
				$(this).addClass("on").siblings().removeClass("on");
			})
			//		tab切换
			$('.tab_menu li').click(function() {
				var wd = $(this).index();
				$(".tab_menu li").eq(wd).addClass("on").siblings().removeClass("on");
				$('.tab_box>div').eq(wd).show().siblings().hide();
			});

		})