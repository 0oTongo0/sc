$(function(){
			$(".sub").on('click',function() {
				var val1 = $(".sell").val();      //转让金宝
				var val2 = $(".unit").val();		//金宝金额
  				var val4 = $(".zhanghao").val()   //转让账号
				var val3 = $(".pass").val();	  //密码
				var check = /^\d+(\.{0,1}\d+){0,1}$/;
				if(val1 == "") {
					$(".pop").text("转让金宝不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("金宝金额不能为空").show().delay(2000).hide(100);
					return false;
				}else if(val4 == "") {
					$(".pop").text("转让账号不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val3 == "") {
					$(".pop").text("支付密码不能为空").show().delay(2000).hide(100);
					return false;
				}else if(!check.test(val2)) {
					$(".pop").text("金宝金额不能小于0").show().delay(2000).hide(100)
					return false;
				} else {
					return true;
				}
			})
})