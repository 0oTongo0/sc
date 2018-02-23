$(function(){
				//我要出售验证
			$(".sub").on('click',function() {
				var val1 = $(".zb").val();      //众宝
				var val2 = $(".jine").val();		//金额
				var val3 = $(".account").val();	  //账户
				var val4 =  $(".sell_pass").val();
				var check = /^\d+(\.{0,1}\d+){0,1}$/;
				if(val1 == "") {
					$(".pop").text("够买众宝不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("众宝金额不能为空").show().delay(2000).hide(100);
					return false;
				}else if(val3 == "") {
					$(".pop").text("账户不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val3 == "") {
					$(".pop").text("支付密码不能为空").show().delay(2000).hide(100);
					return false;
				} else if(!check.test(val1)) {
					$(".pop").text("众宝金额不能小于0").show().delay(2000).hide(100)
					return false;
				}else if(!check.test(val2)) {
					$(".pop").text("单价金额不能小于0").show().delay(2000).hide(100)
					return false;
				} else {
					return true;
				}
			})
})
