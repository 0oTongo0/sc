$(function(){
					//我要出售验证
			$(".sub").on('click',function() {
				var val1 = $(".rechaerge").val();      //充值金额
				var val2 = $(".zhanghao").val();		//充值账号
				var val3 = $(".sell_pass").val();	  //密码
				var check = /^\d+(\.{0,1}\d+){0,1}$/;
				if(val1 == "") {
					$(".pop").text("充值金额不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("充值不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val3 == "") {
					$(".pop").text("支付密码不能为空").show().delay(2000).hide(100);
					return false;
				}else if(!check.test(val1)) {
					$(".pop").text("充值金额不能小于0").show().delay(2000).hide(100)
					return false;
				} else {
					return true;
				}
			})
})
