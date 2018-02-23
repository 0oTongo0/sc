$(function(){
				//我要出售验证
			$(".sub").on('click',function() {
				var val1 = $(".recipients").val();      //收件人
				var val2 = $("#myText").val();		//正文
				if(val1 == "") {
					$(".pop").text("收件人不能为空").show().delay(2000).hide(100);
					return false;
				} else if(val2 == "") {
					$(".pop").text("标题不能为空").show().delay(2000).hide(100);
					return false;
				} else {
					return true;
				}
			})
})