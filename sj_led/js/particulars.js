$(function(){
					//加的效果
			$(".add").click(function() {
				var n = $(this).siblings(".num").val();
				var num = parseInt(n) + 1;
				if(num == 0) {
					return;
				}else{
					$(this).siblings("input").val(num);
				}
			});
			//减的效果
			$(".minus").click(function() {
				var n = $(this).siblings(".num").val();
				var num = parseInt(n) - 1;
				if(num == 0) {
					return
				}else{
					$(this).siblings("input").val(num);
				}
			});
//			出现蒙层
			$(".model-main-right").on('click',function(){
				$(".mc").show()
			})
//			隐藏蒙城
			$(".del").on('click',function(e){
				$(".mc").hide()
				e.stopPropagation();
			})	
//			tab
			$(".pop .sapn").on('click',function(){
				$(this).addClass("on").siblings().removeClass("on");
			})
})
