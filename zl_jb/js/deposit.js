$(function(){
				//			提现表单验证
			$(".sub").on('click',function() {
				var val1 = $(".tixian").val();      //提现
				var val2 = $(".zhanghu").val();		//账户
				var val3 = $(".pass").val();	  //密码
				var check = /^\d+(\.{0,1}\d+){0,1}$/; 
				if(val1 == "") {
					$(".pop").text("提现金额不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("提现账户不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val3 == "") {
					$(".pop").text("提现密码不能为空").show().delay(2000).hide(100);
					return false;
				} else if(!check.test(val1)) {
					$(".pop").text("金额不能小于0").show().delay(2000).hide(100)
					return false;
				} else {
					return true;
				}
			})			
//			财务明细中
		$(".detail-mian-right-nav li").on('click',function(){
			$(this).addClass("on").siblings().removeClass("on");
		})
})
