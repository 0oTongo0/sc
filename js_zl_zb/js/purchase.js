$(function(){
			$(".sub").on('click',function() {
				var val1 = $(".buy").val();      //购买众宝
				var val2 = $(".sum").val();		//众宝数量
  				var val4 = $(".zhanghao").val()   //对方账号
				var val3 = $(".pass").val();	  //密码
				var check = /^\d+(\.{0,1}\d+){0,1}$/;
				if(val1 == "") {
					$(".pop").text("购买众宝不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("众宝数量不能为空").show().delay(2000).hide(100);
					return false;
				}else if(val4 == "") {
					$(".pop").text("账号不能为空").show().delay(2000).hide(100);
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