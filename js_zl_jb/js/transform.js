$(function(){
			$(".sub").on('click',function() {
				var val1 = $(".leix").val();      //转换类型
				var val2 = $(".num").val();		//众宝数量
				var val3 = $(".pass").val();	  //密码
				var check = /^\d+(\.{0,1}\d+){0,1}$/;
				if(val1 == "") {
					$(".pop").text("转换类型不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("众宝数量不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val3 == "") {
					$(".pop").text("支付密码不能为空").show().delay(2000).hide(100);
					return false;
				}else if(!check.test(val2)) {
					$(".pop").text("众宝数量不能小于0").show().delay(2000).hide(100)
					return false;
				} else {
					return true;
				}
			})
})