$(function(){
			$(".sub").on('click',function() {
				var val1 = $(".leix").val();      //类型
				var val2 = $(".money").val();		//提现金额
				var val3 = $(".zhanghao").val()    //账号
				var val4= $(".pass").val();	  //密码
				var check = /^\d+(\.{0,1}\d+){0,1}$/;
				if(val1 == "") {
					$(".pop").text("提现类型不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("提现金额不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val3 == "") {
					$(".pop").text("提现账户不能为空").show().delay(2000).hide(100);
					return false;
				}else if(val4 == "") {
					$(".pop").text("提现密码不能为空").show().delay(2000).hide(100);
					return false;
				}else if(!check.test(val2)) {
					$(".pop").text("众宝数量不能小于0").show().delay(2000).hide(100)
					return false;
				}else {
					return true;
				}
			})
})