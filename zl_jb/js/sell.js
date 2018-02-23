$(function(){
				//我要出售验证
			$(".sub").on('click',function() {
				var val1 = $(".zb").val();      //众宝
				var val2 = $(".price").val();		//单价
				var val3 = $(".sell_pass").val();	  //密码
				var check = /^\d+(\.{0,1}\d+){0,1}$/;
				if(val1 == "") {
					$(".pop").text("出售众宝不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("众宝单价不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val3 == "") {
					$(".pop").text("支付密码不能为空").show().delay(2000).hide(100);
					return false;
				} else if(!check.test(val1)) {
					$(".pop").text("出售众宝不能小于0").show().delay(2000).hide(100)
					return false;
				}else if(!check.test(val2)) {
					$(".pop").text("单价金额不能小于0").show().delay(2000).hide(100)
					return false;
				} else {
					return true;
				}
			})
})
